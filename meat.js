function setToZero(){
    let url = window.location.href;
    
    if(url.includes("&t=")){
        const reg = /&t=\d+s/;
        let newUrl = url.replace(reg, "");
    
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

