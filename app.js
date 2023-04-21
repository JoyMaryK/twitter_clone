async function getUserData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/5");
    const responseData = await response.json();
    console.log(responseData)

    //binding the data to HTML
    const userName = document.querySelector(".back-bar h2")
    userName.innerHTML = responseData.name
    
}
getUserData()


// fetch("https://jsonplaceholder.typicode.com/users/5")        //alternative method that works but yet to be unserstood
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (theData){
//         console.log(theData)
//     })
//     .catch(function (error) {
//         console.log("no display ", error);   
//     })
    