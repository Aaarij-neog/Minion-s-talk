let input = document.querySelector("#input");
let output = document.querySelector("#output")
let translate = document.querySelector("#translate-btn");

   
let url = "https://api.funtranslations.com/translate/minion.json"

function errorHandler(){
    alert("something went wrong with network so please try again after sometime")
}

function clickHandler(){
    //console.log("btn was clicked");
     let outputText = input.value;
 let newUrl = `${url}?text=${outputText}`
 fetch(newUrl).then(response => response.json()).then(json =>{ 
    //console.log(json)
    output.innerHTML = json.contents.translated;
 })
 .catch(errorHandler);
}


translate.addEventListener("click",clickHandler )
