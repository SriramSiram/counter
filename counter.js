console.log("Hello World")

const Number = document.querySelector(".counterNumber")
const increase = document.querySelector(".increaseButton")
const decrease = document.querySelector(".decreaseButton")
const reachedHundred = document.querySelector(".reached")
Number.textContent=0;
increase.addEventListener("click",()=>{
    Number.textContent=parseInt(Number.textContent)+1;
    if(Number.textContent==5){
        reachedHundred.textContent="Reached Hundred";
        // var textNode = document.createTextNode(`Reached ${Number.textContent}`);
        // reachedHundred.appendChild(textNode);
    }
    else{
        reachedHundred.textContent="";
    }
})
decrease.addEventListener("click",()=>{
    Number.textContent=parseInt(Number.textContent)-1;
})

//<p class="reached"></p>

// var reachedClass = document.createElement("p");
// reachedClass.classList.add(".reached");
// var divClass = document.querySelector("counterContainer d-flex flex-column justify-content-center");
// divClass.appendChild(reachedClass);
// var spanElement = document.createElement("span");
// spanElement.classList.add(".counterNumber");

// var ramKingClass = document.querySelector(".ramKing");
// var textClass = document.createElement("textarea");
// //textClass.textContent("Hello World!");
// ramKingClass.appendChild(textClass);
// var hoverText = document.createElement("hoverText");
// hoverText.textContent("hoverText Example");
// increase.appendChild(hoverText);

//var saiPandu = document.getElementsByClassName("Dummy");
//var saiPandu = document.getElementsByClassName("counterContainer d-flex flex-column justify-content-center");
//var saiPandu = document.getElementById("#Venkat");
//var saiPandu = document.getElementsByClassName("d-flex flex-row justify-content-center")[0];
// var saiPandu = document.getElementsByClassName("counterContainer")[0];
// //var saiPandu = document.getElementsByClassName("counterContainer");
// console.log(saiPandu);

// var paragraph = document.createElement("p");
// paragraph.style.color = "blue";
// paragraph.style.textAlign = "Center";
// paragraph.textContent = "Sriram Laptop lo chasam";
// // decrease.appendChild(paragraph);
// saiPandu.appendChild(paragraph);