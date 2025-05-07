import { useEffect } from "react"

export const useSEO = ({title,subtitle,descripccion= "",subUrl}) => {
    useEffect(()=>{
        console.log(subUrl)
        document.title = subtitle;
        document.querySelector('meta[property="og:title"]').setAttribute("content", title);
        document.querySelector('meta[name="twitter:title"]').setAttribute("content", title);
        // document.querySelector('meta[property="og:description"]').setAttribute("content", descripccion);
        // document.querySelector('meta[name="twitter:description"]').setAttribute("content", descripccion);
        document.querySelector('meta[property="og:site_name"]').setAttribute("content", "mlopez");
        document.querySelector('meta[property="og:url"]').setAttribute("content", window.location.origin + subUrl);
        document.querySelector('meta[name="twitter:url"]').setAttribute("content", window.location.origin + subUrl);
        return ()=>{
            document.title = "";
            document.querySelector('meta[property="og:title"]').setAttribute("content", "");
            document.querySelector('meta[name="twitter:title"]').setAttribute("content", "");
            // document.querySelector('meta[property="og:description"]').setAttribute("content", descripccion);
            // document.querySelector('meta[name="twitter:description"]').setAttribute("content", descripccion);
            document.querySelector('meta[property="og:site_name"]').setAttribute("content", "mlopez");
            document.querySelector('meta[property="og:url"]').setAttribute("content", "");
            document.querySelector('meta[name="twitter:url"]').setAttribute("content", "");
        }
    },[subUrl]);
}