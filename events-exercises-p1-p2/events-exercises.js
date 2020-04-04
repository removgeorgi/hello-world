// PART I

// 1.Add the necessary code to wait for the DOM to load to make sure that anything you manipulate 
// in the DOM has loaded. 
// You can do this either using window.onload or adding an event listener for DOMContentLoaded.
// 2.Replace the text "Change me" with "Hello World!".
window.onload = function(){
    let heading = document.getElementById("change_heading");
    heading.innerText = "Hello World!";

// 3.When a user hovers over one of the colored boxes change the text 
// to display the color that is being hovered over.

    let section = document.querySelector("section");
section.addEventListener("mouseover", function(event) {
  let selectedColor = document.querySelector('.selected');
  selectedColor.innerText = event.target.className;
});


// 4.Create a new div element.

let newDiv = document.createElement("div");

// 5.Give your new div a class of purple and style it so that it has a background color of purple.
newDiv.className = "purple";

// 6.Append your new div to the page to the section tag.
section.appendChild(newDiv);


// PART II
// Create a racing game with the two cars. When the race button is pressed, 
// the two cars should move across the screen until one of them is at the end of the screen. 
// When one of the blocks reaches the end - you should alert "winner!"

let button = document.querySelector("button");
let car1 = document.querySelector('.car1');
let car2 = document.querySelector('.car2');
car1.style.marginLeft = 0;
car2.style.marginLeft = 0;


function reset(car1, car2) {
  clearTimeout(car1.timer);
  clearTimeout(car2.timer);
  car1.style.marginLeft = 0;
  car2.style.marginLeft = 0;
  button.disabled = false;
}


button.addEventListener("click", function(event){
    button.disabled = true;
    car1.timer = setInterval(function(){
        car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*60 + 'px';
        if(parseInt(car1.style.marginLeft) > window.innerWidth){
            alert("Car 1 wins!");
            reset(car1,car2);
        }
    },60)

    car2.timer = setInterval(function(){
        car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()*60 + 'px';
        if(parseInt(car2.style.marginLeft) > window.innerWidth){
            alert("Car 2 wins!");
            reset(car1,car2);
        }
    },60)

})

}
