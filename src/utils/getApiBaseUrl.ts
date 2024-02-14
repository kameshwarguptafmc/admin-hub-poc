export const getApiBaseUrl = (subdomain:string) => {
    
  const allowedWebSubDomains = process.env.NEXT_PUBLIC_WEB_ALLOWED_DOMAINS ? process.env.NEXT_PUBLIC_WEB_ALLOWED_DOMAINS.split(", ") : [];

  const allowedAdminSubDomains = process.env.NEXT_PUBLIC_ADMIN_ALLOWED_DOMAINS ? process.env.NEXT_PUBLIC_ADMIN_ALLOWED_DOMAINS.split(", ") : [];

  if (allowedAdminSubDomains.includes(subdomain)) {
    const subDomainIndex = allowedAdminSubDomains.findIndex(subdomainString => subdomain === subdomainString)
    if (subDomainIndex > -1) {
      const apiHostname =  process.env.NEXT_PUBLIC_ADMIN_API_DOMAINS?.split(", ")[subDomainIndex]
      return `https://${apiHostname}/`
    }
    
  } else if (allowedWebSubDomains.includes(subdomain)) {
    const subDomainIndex = allowedWebSubDomains.findIndex(subdomainString => subdomain === subdomainString)
    if (subDomainIndex > -1) {
      const apiHostname =  process.env.NEXT_PUBLIC_WEB_API_DOMAINS?.split(", ")[subDomainIndex]
      return `https://${apiHostname}/`
    }
  }
    
}