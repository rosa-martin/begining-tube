function setToZero(){
    let url = window.location.href;
    const reg = /&t=\d+s/;
    
    if(url.includes("&t=") && !url.includes("&t=0s")){
        
        let newUrl = url.replace(reg, "&t=0s");
    
        window.location.href = newUrl;
    }
    
}

function addLocationObserver(callback){
    let conf = { attributes: false, childList: true, subtree: false };
    const observer = new MutationObserver(callback);
    observer.observe(document.body, conf);
}

function leCallback(){
    if(window.location.href.startsWith("https://www.youtube.com/")){
        setToZero();
    }
        
}

addLocationObserver(leCallback);
leCallback();

