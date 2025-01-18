//const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

const dropdown = document.querySelectorAll(".dropdown select")//by using queryselectorall we are selecting dropdown all select
const btn = document.querySelector("form button")//when we will click on exchange rate it should display the exact exchange rate for that we are using query selector
 const fromCurr = document.querySelector(".from select")//from from we are accessing select
 const toCurr = document.querySelector(".to select")//from to we are accessing select

// for (code in countryList){//for in loop(all country code will be printed in the console)
//     console.log(code, countryList[code])//will print the country code as well as currency code
// }


for(let select of dropdown){//in each select we are going to add each and every option by creating new element
    for(currCode in countryList){
     let newOption = document.createElement("option")   //for each country code we will add option for that we have created this new element which is option type
     newOption.innerText = currCode; //ion new option our innertext will be currency code
     newOption.value = currCode; //new opt value will be equal to currency code
     if(select.name==="from" && currCode==="USD"){
     newOption.selected="selected"
     }  
     else if(select.name==="to" && currCode==="INR"){
      newOption.selected="selected"
     }
     
       
     select.append(newOption)//new option will be added to select
    }
select.addEventListener("change",(evt)=>{//evt is an object
    updateFlag(evt.target)//calling updateflag  //target is basically whenever we change anything that will be passed to update flag

})

}

//to change country wise flat the below codition is used

const updateFlag =(element) => {//this function will update flag according to country
  let currCode = element.value;//to extract currency code from element//currcode will be element value
    let countryCode = countryList[currCode]//to bring country code from currency code
   let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img")//in element we have select and in select we have to see where is img in select so we have to go in the parent on the select and copy the img
    img.src = newSrc;
}

btn.addEventListener("click",async(evt) => {
  evt.preventDefault()//this will prevent all the default changes like form has a default behaviour whenever we click on any button the page will refresh and now onwards it won't work
  let amount = document.querySelector(".amount input")//to access the amount which we will enter//.amount se input ko access krre hai
  let amtVal = amount.value;// to print amount value
 if(amtVal === "" || amtVal < 1){
    amtVal = 1;
    amount.value="1";

 }

// console.log(fromCurr.value, toCurr.value)
//API always work in small letter thats why we use (.toLowerCase())
 const URL= `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`//will send request on this url//and in response we will get exchange rate

 let response = await fetch(URL)
 let data = await response.json()
//  let rate = data[toCurr.value.toLowerCase()]//will display only data(rate)
 console.log(data)

}
)
