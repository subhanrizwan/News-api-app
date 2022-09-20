// if ("serviceWorker" in navigator) {
//     window.addEventListener("load", function() {
//       navigator.serviceWorker
//         .register("/serviceWorker.js")
//         .then(res => console.log("service worker registered" , res))
//         .catch(err => console.log("service worker not registered", err))
//     })
//   }

//   function showNotification() {
//     Notification.requestPermission((result) => {
//       if (result === "granted") {
//         navigator.serviceWorker.ready.then((registration) => {
//           registration.showNotification("Apni News Notification", {
//             body: "Notification from Khubsurat Website",
//             icon: "/images/logo.png",
//             vibrate:[200, 100, 200, 100, 200, 100, 200],
//             tag:"vibration-sample",
//           });
//         });
//       }
//     });
//   }
//   showNotification();
 
function submit(){
    let news = document.getElementById('getNews').value
    fetch(
        // `https://newsapi.org/v2/everything?q=bitcoin&apiKey=08c94fef7b7f4ea3b382b2113bcc9d85`
        // s// `https://newsapi.org/v2/everything?q=${news}&ApiKey=08c94fef7b7f4ea3b382b2113bcc9d85`
// a//
 `https://newsapi.org/v2/everything?q=${news}&apiKey=89a0dd4e948a49d49de178c9fe1c6850`
        )
.then((res)=> res.json())       
.then((res) =>{
    console.log(res)
let mid =document.getElementById('midCont')
mid.innerHTML +=
`<img src="" id="img" alt="">
<h4 id="tittle"></h4>
<div id="desc"></div>
`
if(!news){
   
    swal(`${news}` + " not found")
}
let imgs = document.getElementById('img')
imgs.src = `${res.articles[0].urlToImage}`
imgs.style.width = '80%'
imgs.style.marginLeft = '20px'


let ttl = document.getElementById('desc')
ttl.innerHTML = `${res.articles[0].description}`


let desc = document.getElementById('tittle')
desc.innerHTML = `${res.articles[0].title}`


})
.catch((err)=>{
    console.log(err);
})
}



