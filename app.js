window.addEventListener('load', ()=>{
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.darksky.net/forecast/6f885ab6612d61643ba4dd58dcfb8984/${lat},${long}`;
        })   
    }
});