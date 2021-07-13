//variables
var numofsquares = 6;
var colors = [];
var pickedcolor;
//queryselector variables
var squares = document.querySelectorAll(".square");
var colordisp = document.querySelector("#colordisp");
var messagedisp = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modebuttons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click",function(){
    reset();
});
//fuctions
function init(){
    //mode button addEventListeners
    for (var i = 0; i < modebuttons.length; i++) {
    modebuttons[i].addEventListener("click",function(){
        modebuttons[0].classList.remove("selected");
        modebuttons[1].classList.remove("selected");
        this.classList.add("selected");
        //checking easy or hard modes and according to it "numofsquares" are selected
        if(this.textContent === "EASY")
            numofsquares = 3;
        else
            numofsquares = 6;
        reset();  //called to set up the squares according to  "numofsquares"
    });
    }
    //setup squares addEventListeners
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
        var clickedcolor = this.style.backgroundColor;
        //checking if it is correct
        if(clickedcolor === pickedcolor){
            messagedisp.textContent = "CORRECT";
            resetButton.textContent = "Play Again?";
            changecolor(clickedcolor);
            h1.style.backgroundColor = clickedcolor;
        }
        else{
           this.style.backgroundColor = "#232323"
           messagedisp.textContent = "TRY AGAIN"
        }
    });
    }
    reset();  //called if you guessed it right
}
//reset the whole screen and gives you the new interface
function reset(){
    //generateRandomColors and numofsquares is send as argument which returns a colors array
    colors = generateRandomColors(numofsquares);
    pickedcolor = pickcolor();
    colordisp.textContent  = pickedcolor;
    resetButton.textContent = "New Colors"
    messagedisp.textContent = "";
    for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    }
    else
        squares[i].style.display = "none";
}
    h1.style.backgroundColor = "steelblue";
}
//changes the color of the squares
function changecolor(color){
    for (var i = 0; i <squares.length; i++) {
       squares[i].style.backgroundColor = color;
    }
}
//picks a random color from the colors array
function pickcolor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
//generates random colors but the help of randomColor function
function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
return arr;
}
//creates a randon rgb color
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}













// easy.addEventListener("click",function(){
//     hard.classList.remove("selected");
//     easy.classList.add("selected");
//     numofsquares = 3;
//     colors = generateRandomColors(numofsquares);
//     pickedcolor = pickcolor();
//     colordisp.textContent = pickedcolor;
//     for (var i = 0; i <squares.length; i++) {
//        if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//        }
//        else{
//         squares[i].style.display = "none";
//        }
//     }
// });

// hard.addEventListener("click",function(){
//     hard.classList.add("selected");
//     easy.classList.remove("selected");
//     numofsquares = 6;
//     colors = generateRandomColors(numofsquares);
//     pickedcolor = pickcolor();
//     colordisp.textContent = pickedcolor;
//     for (var i = 0; i <squares.length; i++) {
//        squares[i].style.backgroundColor = colors[i];
//        squares[i].style.display = "block";
//        }
//    });
