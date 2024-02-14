import "next-auth";
import { Account, AdapterUser, JWT, Profile, User } from "next-auth/jwt/types";
import { UserSessionObject } from "./session";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface Session {
    user: UserSessionObject;
    expires: string;
  }
}

export interface Session {
  user: UserSessionObject;
  expires: string;
}

export interface JWTArguments {
  token: JWT;
  user: User | AdapterUser;
  account: Account | null;
  profile?: Profile | undefined;
  trigger?: "signIn" | "signUp" | "update" | undefined;
  isNewUser?: boolean | undefined;
  session?: Session;
}

export interface SessionArgument {
  session: Session;
  token: JWT;
}
