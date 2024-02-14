export interface UserSessionObject {
  analyticsId: string;
  userId: number;
  userLocale: string;
  userType: string;
  token: string;
  tokenExpiry: number;
  redirect?: boolean;
  signUpComplete: boolean;
  verified: boolean;
  firstName: string;
  lastName: string;
  email: string;
}

let sessionToken = ''
let userSessionObject: UserSessionObject

export const setToken = (token: string): void => {
  sessionToken = token
}

export const getToken = (): string => {
  return sessionToken
}

export const setUserSession = (userServerSession: UserSessionObject): void => {
  setToken(userServerSession.token || '')
  userSessionObject = userServerSession
}

export const getUserSession = (): UserSessionObject => {
  return userSessionObject
}