export const currentHost = () =>{
    const host =  window.location.hostname
    if(host.indexOf('localhost') >= 0){
        return ""
    }
    return "/Dissertation"
}