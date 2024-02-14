import { headers } from "next/headers";

export const getServerBaseUrl = () => {
    const protocol = 'https'   
    const headersList = headers();
    const domain = headersList.get("x-forwarded-host") || "";     
    return `${protocol}://${domain}/`  
}