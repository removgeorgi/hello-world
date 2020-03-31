//1
window.onload = function(){

};

//2
let heading = document.getElementById("change_heading");
heading.innerText = "Hello World!";

//3
let section = document.querySelector("section");
section.addEventListener("mouseover", function(event){
    let selectedColor = document.querySelector(".selected");
    selectedColor.innerText = event.target.className;
});

//4 , 5 ,6 
let newDiv = document.createElement("div");
newDiv.className = "purple";
section.appendChild(newDiv);
