
let displaybox = document.querySelector(".display");

function showDisplay(event) {
    const x = event.target.innerText
    if (displaybox.innerText == 0) {
       return displaybox.innerText = x;
    }
    return displaybox.innerText += x;
}
function calculate () {
    let context = displaybox.innerText;
    let result = eval(context)
    displaybox.innerText =result;    
};

function allclear () {
    displaybox.innerText=0;
}

function clear () {
    let text = displaybox.innerText;
    if (displaybox.innerText === 1) {
        displaybox.innerText = 0;
    }else {
        displaybox.innerText=text.substring(0, text.length-1);
    }
}

document.querySelector(".calculate").addEventListener("click", calculate );
document.querySelector(".all-clear").addEventListener("click", allclear );
document.querySelector(".clear-last").addEventListener("click", clear );
let buttonlist = document.querySelectorAll(".show-display");
buttonlist.forEach(item => {
    item.addEventListener("click", showDisplay)
});