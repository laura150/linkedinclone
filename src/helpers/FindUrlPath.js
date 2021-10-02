const FindUrlPath = (mode = "default", knownPath = null) => {
        // console.log(knownPath, window.location.pathname, path(mode, knownPath, window.location.pathname))
        return path(mode, knownPath, window.location.pathname);
    
}

const path = (mode, knownPath, realpath) => {
    let allowed_paths = null;

    switch (mode) {

        
        case "checkUrlPath":
            return realpath === knownPath ? true : false;

        default:

    }
}


export {
    FindUrlPath
}