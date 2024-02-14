export const getClinetBaseUrl = () => {
  const protocol = 'https'  
  if(typeof window !== 'undefined'){
    return `${protocol}://${window.location.hostname}/`
  }  
}
