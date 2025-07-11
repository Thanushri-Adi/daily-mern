//Create a new input and button element on the page using JavaScript only.Set the text of button to “Clickme”;

let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Clickme";
document.querySelector("body").append(input,button);

//Add following attributes to the element:
// -Change placeholder value of input to “username”
// -Change the id of button to “btn”

button.setAttribute("id" , "btn");
input.setAttribute("placeholder", "username");

//Access the btn using the querySelector and button id.Change the button backgroundcolor to blue and text 
// color to white

let btn = document.getElementById('btn');
btn.style.backgroundColor = "blue";
btn.style.color = "white";

//Create a h1 element on the page and set its text to “DOM Practice” underlined. Change its color to purple
 let heading = document.createElement("h1");
 heading.innerText = "DOM Practice";
 document.querySelector("body").append(heading);
 heading.style.textDecoration = "underline";
 heading.style.color = "purple";

 //Create a p tag on the page and set its text to “ApnaCollege Delta Practice”,where Delta is bold
 let para = document.createElement('p');
 para.innerHTML="ApnaCollege <b>Delta</b> Practice";
 document.querySelector("body").append(para);
 