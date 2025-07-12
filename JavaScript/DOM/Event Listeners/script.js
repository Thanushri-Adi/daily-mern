// Try out the mouseout event in Event Listener 

let btn = document.querySelector("button");
btn.addEventListener("mouseout",function(e){
    console.log("mouse on button");
}
);

// Create a button on the page using JavaScript.Add an event listener to the button that changes the button’s color to green when it is clicked.
btn.addEventListener("click",function(e){
    btn.style.backgroundColor = "green";
}
)
//Create an input element on the page with a placeholder ”enter your name”and an H2 heading
//  on the page inside HTML.The purpose of this input element is to enter a user’s name so
// it should only input letters from a -z,A-Z and space(all other characters should not be
//  detected).Whenever the user inputs their name,their input should be dynamically visible
//  inside the heading.[Please note that no other character apart from the allowed characters
//  should be visible in the heading]

const input = document.getElementById("nameInput");
    const heading = document.getElementById("displayName");

input.addEventListener("input", function() {
    const filteredValue = input.value.replace(/[^a-zA-Z ]/g, "");
      heading.textContent = filteredValue;
    });