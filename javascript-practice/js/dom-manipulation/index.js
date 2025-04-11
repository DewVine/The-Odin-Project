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




// mdn first active learning example
const link = document.querySelector(".mdn-link");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect1 = document.querySelector(".mdn-active-learning-1");

const para = document.createElement('p');
para.textContent = "We hope you enjoyed the ride.";
para.setAttribute("class", "highlight");
sect1.appendChild(para);

const text3 = document.createTextNode(
    " - the premier source for web development knowledge."
);
const linkPara = document.querySelector(".para");
linkPara.appendChild(text3);



// mdn second active learning
const list = document.querySelector(".shopping-items");
let input = document.querySelector("#item");
const button1 = document.querySelector(".add-item");

button1.addEventListener("click", function (e) {
    let value = input.value;
    input.value = '';

    let listItem = document.createElement("li");
    let listSpan = document.createElement("span");
    let listButton = document.createElement("button");

    listButton.addEventListener("click", function (e) {
        listItem.remove();
    });

    listSpan.textContent = value;
    listButton.textContent = "Delete";

    listItem.appendChild(listSpan);
    listItem.appendChild(listButton);
    list.appendChild(listItem);

    input.focus();
});