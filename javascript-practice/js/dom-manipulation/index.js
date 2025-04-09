// fetch main container
let container = document.getElementById("main");

// text1
let text1 = document.createElement('p');
text1.innerHTML = "Hey I'm Red!"
text1.style.color = "red";

// text2
let text2 = document.createElement('h3');
text2.innerHTML = "I'm a blue h3!"
text2.style.color = "blue";

// div1
let div1 = document.createElement('div');
div1.style.backgroundColor = "pink"
div1.style.border = "1px solid black";
let h1 = document.createElement('h1');
h1.innerHTML = "I'm in a div";
let p1 = document.createElement('p');
p1.innerHTML = "ME TOO!";

// append all text
main.appendChild(text1);
main.appendChild(text2);

// append div1
main.appendChild(div1);
div1.appendChild(h1);
div1.appendChild(p1);


let button = document.getElementById("btn");
button.addEventListener("click", function (e) {
    if (e.target.style.background !== "yellow") {
        e.target.style.background = "yellow";
    } else {
        e.target.style.background = "red";
    }
});