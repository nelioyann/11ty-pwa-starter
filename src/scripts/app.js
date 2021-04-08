const APP = {
    SW: null,

    init(){

        if("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/service-worker.js")
            .then(registration => {
                APP.SW = registration.installing || registration.waiting || registration.active;
            })
        } else{
            console.log("SW not supported")
        }
    }
}

document.addEventListener('DOMContentLoaded', APP.init)