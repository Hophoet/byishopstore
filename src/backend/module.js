

const getPasswordResetValues = () => {
    let pathname = document.location.pathname;
    if(pathname.endsWith('/')){
        pathname = pathname.substring(0, pathname.length - 1)
    }
    let pathnameList = pathname.split('/')
    let token = pathnameList.pop()
    let uid = pathnameList.pop()
    if(token && uid){
        return {token:token, uid:uid}
    }
    
}

export {
    getPasswordResetValues
}