
async function getUserData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/5"); 
    const responseData = await response.json();
   // console.log(responseData)

    //binding the data to HTML  
    const userNameUp = document.querySelector(".back-bar h2")
    userNameUp.innerText = responseData.name 
    const nameProfile = document.querySelector(".profile-details h2");
    nameProfile.innerHTML = responseData.name
    const userNameProfile = document.querySelector(".profile-details p");
    userNameProfile.innerHTML = "@"+responseData.username
    const city = document.querySelector(".where p");
    city.innerHTML = responseData.address.city
    const website = document.querySelector(".profile-website a")
    website.innerText = responseData.website
    const work = document.querySelector(".what p")
    work.innerText = responseData.company.name

   // return responseData
}
getUserData()

const allTweets = document.querySelector(".all-tweets")
async function getUserTweets() {
    const userDetails = await fetch("https://jsonplaceholder.typicode.com/users/5");
    const userDetailsData = await userDetails.json();
    
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const responseData = await response.json();
  //  console.log( responseData)
    let html ="" 
    
    responseData.forEach(tweet => {
    let htmlTweet
  if (tweet.userId == userDetailsData.id) {
       // console.log(tweet);
       htmlTweet = `<div class="each-tweet">
        <img class="rounded-img-tweet" src="https://imgs.search.brave.com/-kbPyYociYHJHnq0mIgr1ijsibfqv4x0FNW-5OhYQqI/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eG45WTFsWVdsUVEx/Qm1QNEc0bVh3SGFF/SyZwaWQ9QXBp" alt="nezuko">
        <div class="tweet-details">
            <div class="tweet-name-date">
                <h3>${userDetailsData.name}</h3>
                <p>@${userDetailsData.username}</p>
                <p>. 1 Sept, 2019</p>
            </div>
            <p style="color: #fff;">${tweet.body}</p>
            <div class="tweet-actions">
                <div class="repy">
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <p>200</p>  
                </div>
                <div class="repy">
                    <ion-icon name="repeat-outline"></ion-icon> 
                    <p>123</p> 
                </div>
                <div style="color: gray;"class="repy">
                    <ion-icon name="heart-outline"></ion-icon>
                    4243
                </div>
                <ion-icon style="color: gray;"name="stats-chart-outline"></ion-icon>
                <ion-icon name="share-outline"></ion-icon>
                <div style="color: gray;" class="repy">
                    <ion-icon name="triangle"></ion-icon>
                    <p>tip</p>
                </div>
            </div>
           
             <button class="show-comments" style="color: #fff;" onclick="getTweetComments(${tweet.id})">Show comments </button>
        </div>
        
    </div>`
    html+= htmlTweet;
 }
  
});
 
    allTweets.innerHTML = html 

}

//const tweets = document.querySelector(".show-tweets").addEventListener("click", getUserTweets) 
//decided to go with a static one for now
getUserTweets()

const allComments = document.querySelector(".comments")
//const background = document.querySelector(".container")
async function getTweetComments( id) {
    //console.log("I'm in :)");
 
   //console.log(id);
   
    const commentDetails = await fetch("https://jsonplaceholder.typicode.com/comments")
    const commentDetailsData = await commentDetails.json();
        let html =`
        <div style="display: flex; align-items:center; justify-content:space-between;">
        <h1 style="margin:2rem;" > Tweet Comments: </h1>
                    <button style="margin:2rem;" onClick="closeModal()"> X </button>
                    </div> `
  
      commentDetailsData.forEach(comment =>{
        let htmlComment
          if (comment.postId == id) {
           console.log(comment);
         htmlComment = ` 
         <div class="comment">
         <p>${comment.name} <span style="color: white;">  left a comment: </span> </p>
         <p>${comment.body}</p>
         <div class="tweet-actions">
             <div class="repy">
                 <ion-icon name="chatbubble-outline"></ion-icon>
                 <p>200</p>  
             </div>
             <div class="repy">
                 <ion-icon name="repeat-outline"></ion-icon> 
                 <p>123</p> 
             </div>
             <div style="color: gray;"class="repy">
                 <ion-icon name="heart-outline"></ion-icon>
                 4243
             </div>
             <ion-icon style="color: gray;"name="stats-chart-outline"></ion-icon>
             <ion-icon name="share-outline"></ion-icon>
             <div style="color: gray;" class="repy">
                 <ion-icon name="triangle"></ion-icon>
                 <p>tip</p>
             </div>
         </div>
     </div>`
     html +=htmlComment
          }
      })   
      
      allComments.style["display"] = "block"
      allComments.innerHTML = html
  
    }
    
    allComments.addEventListener("click",closeModal)
   
    function closeModal() {
        allComments.style["display"] = "none"
    }