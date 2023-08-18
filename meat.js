function setToZero(){

    let url = window.location.href;
    const reg1 = /&t=\d+s/; //youtube.com/watch...
    const reg2 = /\\?t=\d+/; //youtu.be/...
    
    if((url.includes("&t=") && !url.includes("&t=0s")) || (url.includes("?t=") && !url.includes("?t=0"))){
        let choice = confirm("Start the video at 0:00?");

        if(choice){
            let newUrl;
            if(url.includes("&t=") && !url.includes("&t=0s")){
                newUrl = url.replace(reg1, "&t=0s");
            } else if (url.includes("?t=") && !url.includes("?t=0")) {
                newUrl = url.replace(reg2, "?t=0");
            }
            
            window.location.href = newUrl;
        }
        
    }
    
}

window.onload = setToZero;
//window.addEventListener("hashchange", setToZero);

//function addLocationObserver(callback){
//    let conf = { attributes: false, childList: true, subtree: false };
//    const observer = new MutationObserver(callback);
//    observer.observe(document, conf);
//}
//
//function leCallback(){
//    if(window.location.href.startsWith("https://www.youtube.com/")){
//        setToZero();
//    }
//        
//}
//
//addLocationObserver(leCallback);
//leCallback();