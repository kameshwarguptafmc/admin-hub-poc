export const getClientSubdomain = () => {
  if (typeof window !== "undefined") {
    return window.location.hostname.split(".")[0];
  }
  return null
};
