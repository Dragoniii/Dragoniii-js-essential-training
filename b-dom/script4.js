const newArticle = document.createElement("article");
const newContent = document.createTextNode("What is going on?");
const point = document.getElementById("siteheader");


const newDiv = document.createElement("div");
const newSentence = document.createTextNode("What are you doing?");
const main = document.querySelector("main");
newDiv.appendChild(newSentence);
main.append(newDiv);


newArticle.appendChild(newContent);
document.body.insertBefore(newArticle, point);


newArticle.setAttribute("id", "new");
const change = document.getElementById("new");
change.style.color = "blue";
main.style.color = "red";