function Reload() {
    fetch(
        // `https://newsapi.org/v2/everything?q=country&apiKey=08c94fef7b7f4ea3b382b2113bcc9d85`
        `https://newsapi.org/v2/everything?q=country&apiKey=89a0dd4e948a49d49de178c9fe1c6850`
        // `https://newsapi.org/v2/everything?q=country&ApiKey=08c94fef7b7f4ea3b382b2113bcc9d85`
    )
    .then((res)=> res.json())       
    .then((res) =>{
        console.log(res)

    
//      for(let i = 0 ; i < res.articles.length ; i++){
       
    let sub = document.getElementById('card-news')
    sub.innerHTML =
    ` 
    <div class="card" id="cards">
     <img id="img" src= '${res.articles[0].urlToImage}'>
       <div class="card-body">
       <h6 class="card-title" id="ttl">'${res.articles[0].title}'</h6>
       <p class="card-text" id="desc">'${res.articles[0].description}'</p>
      </div>
    </div>

    <div class="card" id="cards">
    <img  src= '${res.articles[1].urlToImage}'>
      <div class="card-body">
      <h6 class="card-title">'${res.articles[1].title}'</h6>
      <p class="card-text" >'${res.articles[1].description}'</p>
     </div>
   </div>

   <div class="card" id="cards">
   <img  src= '${res.articles[2].urlToImage}'>
     <div class="card-body">
     <h6 class="card-title">'${res.articles[2].title}'</h6>
     <p class="card-text" >'${res.articles[2].description}'</p>
    </div>
  </div>
  <div class="card" id="cards">
  <img  src= '${res.articles[3].urlToImage}'>
    <div class="card-body">
    <h6 class="card-title">'${res.articles[3].title}'</h6>
    <p class="card-text" >'${res.articles[3].description}'</p>
   </div>
 </div>
` 

// }

    

  
    //     // console.log(res.articles.lengths);
    //  let card = document.getElementById('cards').innerHTML
    //  "<img  src='' id='images'>"
    //     let pic = document.getElementById('images')
    //     console.log(pic);
    //     pic.src = `${res.articles[i].urlToImage}`

        // document.getElementById('cards').innerHTML +=
        // "<img  src='' id='image'>"
        //    let pic1 = document.getElementById('image')
        //    pic1.src = `${res.articles[1].urlToImage}`
    // }
    
    // let img = document.querySelector('images')
    // img.src = `${res.articles[0].urlToImage}`
    // // img.style.width = '100%'
    // // img.style.marginLeft = '20px'
    
    // let ttl = document.querySelector('#desc')
    // ttl.innerHTML =  `${res.articles[0].description}`
    
    // let desc = document.querySelector('#tittle')
    // desc.innerHTML = `${res.articles[0].title}`
      
})
.catch((err) =>{
    console.log(err);
})
     }

    var submit = () => {
       
        let news = document.getElementById('getNews').value
        fetch(
            // `https://newsapi.org/v2/everything?q=${news}&apiKey=89a0dd4e948a49d49de178c9fe1c6850`
            `https://newsapi.org/v2/everything?q=${news}&apiKey=08c94fef7b7f4ea3b382b2113bcc9d85`
            //  `https://newsapi.org/v2/everything?q=${news}&ApiKey=08c94fef7b7f4ea3b382b2113bcc9d85`
    // a//
    
            )
    .then((res)=> res.json())       
    .then((res) =>{
        console.log(res)

  
      if(!news){
        swal("Hello world!");
      }
  else{
      
  let sub = document.getElementById('card-news')
    sub.innerHTML =
` 
<div class="card" id="cards">
 <img  src='${res.articles[0].urlToImage}' >
   <div class="card-body">
   <h6 class="card-title" >'${res.articles[0].title}'</h6>
   <p class="card-text">'${res.articles[0].description}'</p>
  </div>
</div>

<div class="card" id="cards">
 <img  src='${res.articles[1].urlToImage}' >
   <div class="card-body">
   <h6 class="card-title" >'${res.articles[1].title}'</h6>
   <p class="card-text">'${res.articles[1].description}'</p>
  </div>
</div>

<div class="card" id="cards">
 <img  src='${res.articles[2].urlToImage}' >
   <div class="card-body">
   <h6 class="card-title" >'${res.articles[2].title}'</h6>
   <p class="card-text">'${res.articles[2].description}'</p>
  </div>
</div>

<div class="card" id="cards">
 <img  src='${res.articles[3].urlToImage}' >
   <div class="card-body">
   <h6 class="card-title" >'${res.articles[3].title}'</h6>
   <p class="card-text">'${res.articles[3].description}'</p>
  </div>
</div>
`
}



//  let imgs = document.getElementById('img')
// imgs.src = `${res.articles[0].urlToImage}`
// // imgs.style.width = '80%'
// // imgs.style.marginLeft = '20px'
// let desc = document.getElementById('ttl')
// desc.innerHTML = `${res.articles[0].title}`

// let ttl = document.getElementById('desc')
// ttl.innerHTML = `${res.articles[0].description}`
// }


    
    // }
    })
    .catch((err)=>{
        console.log(err);
    })
    
    }
    
    
    
    