const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/fort-lauderdale-image.jpeg") {
      myImage.setAttribute("src", "images/boston-image.jpeg");
    } else {
      myImage.setAttribute("src", "images/fort-lauderdale-image.jpeg");
    }
};
   

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setColor() {
    const myColor = prompt("Select 'orange' or 'purple'.");
    if (myColor != "orange" & myColor != "purple") {
      setColor();
    } else {
      localStorage.setItem("color", myColor);
      myHeading.style.color = myColor;
    }
}
  


if (!localStorage.getItem("color")) {
    setColor();
} else {
  const storedColor = localStorage.getItem("color");
  myHeading.style.color = myColor;
}
  
myButton.onclick = () => {
    setColor();
};  