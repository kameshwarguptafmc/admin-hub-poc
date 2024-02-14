import { UserSessionObject } from "@/types/session";
import { UserData } from "@/types/user";
import { AuthOptions, Session } from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
      authorization: {
        params: {
          scope:
            "api://64b9aa92-ed9b-4dc9-900f-c7a2fa74627f/user_impersonation openid profile offline_access",
        },
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],

  callbacks: {
    //TODO: Explore the callbacks
    async jwt({ token, account }) {
      let userDetails;
      if (account && account.access_token) {
        if (token.picture) {
          // Github Response Authentication
          userDetails = { firstName: token.name, picture: token.picture };
          token.user = userDetails;
        } else {
          //  Azure Response Authentication
          userDetails = await doSso(account.access_token as string);
          if (userDetails) {
            token.user = userDetails;
          }
        }
      }

      return token;
    },
    async session({ session, token }): Promise<Session> {
      session.user = token.user as UserSessionObject;
      return session;
    },
  },
};

const doSso = async (ssoToken?: string): Promise<UserSessionObject | null> => {
  if (ssoToken) {
    const doSsoUrl = new URL(
      `${process.env.NEXT_PUBLIC_API_HOSTNAME}admin/user/do_sso/`,
    );
    const requestBody = {
      client_id: process.env.AZURE_AD_CLIENT_ID,
      tenant_id: process.env.AZURE_AD_TENANT_ID,
      sso_token: ssoToken,
    };
    const response = await fetch(doSsoUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const res = (await response.json()) as UserData;

    const userSessionObject: UserSessionObject = createUserSessionObject(res);
    return createPromise(userSessionObject);
  }

  return null;
};

const createPromise = (
  userSessionObject: UserSessionObject,
): Promise<UserSessionObject> => {
  return new Promise((resolve, reject) => {
    if (userSessionObject) {
      resolve(userSessionObject);
    } else {
      reject(new Error("Promise rejected"));
    }
  });
};

export const createUserSessionObject = (
  userObject: UserData,
): UserSessionObject => {
  const userSessionObject: UserSessionObject = {
    analyticsId: userObject.analytics_identifier,
    userId: userObject.id,
    userLocale: userObject.language,
    userType: userObject.is_admin_staff ? "internal" : "external",
    token: userObject.token ? userObject.token : "",
    tokenExpiry: userObject.token_expiry_time
      ? userObject.token_expiry_time
      : 0,
    signUpComplete: userObject.is_sign_up_completed,
    verified: userObject.is_verified,
    firstName: userObject.first_name,
    lastName: userObject.last_name,
    email: userObject.email,
  };
  return userSessionObject;
};
