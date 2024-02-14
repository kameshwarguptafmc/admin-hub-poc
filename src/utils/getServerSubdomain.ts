import { headers } from "next/headers";

export const getServerSubdomain = () => {  
    const headersList = headers();
    const domain = headersList.get("x-forwarded-host") || "";     
    return domain.split(".")[0]  
}