let arr = document.getElementsByTagName("h1")

let h = arr[0]
h.innerHTML = "Lab12 Assignment"
h.style.color = "blue"

let hr = document.createElement("hr")
document.body.appendChild(hr)
let h2 = document.createElement("h2")
h2.innerHTML = "Task"
h2.style.color = "red"
document.body.appendChild(h2)


let p1 = document.createElement("p")
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.append(p1)


let ul = document.createElement("ul")

let first_li = document.createElement("li")
first_li.innerHTML = "find elements in the DOM (<b>5 points</b>);"
first_li.style.color = "green"
ul.appendChild(first_li)

let first_li1 = document.createElement("li")
first_li1.innerHTML = "create/add/remove elements (<b>5 points</b>);"
first_li1.style.color = "purple"
ul.appendChild(first_li1)

let first_li2 = document.createElement("li")
first_li2.innerHTML = "change content of the elements (<b>5 points</b>);"
first_li2.style.color = "green"
ul.appendChild(first_li2)

let first_li3 = document.createElement("li")
first_li3.innerHTML = "change styles of the elements (<b>5 points</b>);"
first_li3.style.color = "purple"
ul.appendChild(first_li3)

let first_li4 = document.createElement("li")
first_li4.innerHTML = "change attributes of the elements (<b>5 points</b>);"
first_li4.style.color = "green"
ul.appendChild(first_li4)

let first_li5 = document.createElement("li")
first_li5.innerHTML = "change classes of the elements (<b>5 points</b>)."
first_li5.style.color = "purple"
ul.appendChild(first_li5)
console.log(ul)

document.body.appendChild(ul)

let a = document.createElement("a")
a.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12")
a.innerText = "link."

let p2 = document.createElement("p")
p2.innerText = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this "
p2.appendChild(a)
document.body.appendChild(p2)

let hr_2 = document.createElement("hr")
document.body.appendChild(hr_2)

let h2 = document.createElement("h2")
h2.innerHTML = "Submission"
h2.style.color = "red"
document.body.appendChild(h2)

let p3 = document.createElement("p")
p3.innerText = "To submit your work, follow these instructions:"
document.body.appendChild(p3)


let ul2 = document.createElement("ul")
let second_li = document.createElement("li")
second_li.innerHTML = "Create a new repository on Github, named <b>lab12</b> (1 point)."
second_li.style.color = "green"
ul2.appendChild(second_li)

let second_li1 = document.createElement("li")
second_li1.innerHTML = "Clone this repository to your local machine and work inside it.;"
second_li1.style.color = "purple"
ul2.appendChild(second_li1)

let second_li2 = document.createElement("li")
second_li2.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; Hello World tag with message (<b>1 point</b>).;"
second_li2.style.color = "green"
ul2.appendChild(second_li2)

let second_li3 = document.createElement("li")
second_li3.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain our program (assignment) described above (<b>1 point</b>).;"
second_li3.style.color = "purple"
ul2.appendChild(second_li3)

let second_li4 = document.createElement("li")
second_li4.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).;"
second_li4.style.color = "green"
ul2.appendChild(second_li4)

let second_li5 = document.createElement("li")
second_li5.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).;"
second_li5.style.color = "purple"
ul2.appendChild(second_li5)

let second_li6 = document.createElement("li")
second_li6.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>).;"
second_li6.style.color = "green"
ul2.appendChild(second_li6)

document.appendChild(ul2)

let hr_3 = document.createElement("hr")
document.appendChild(hr_3)

console.log("done")
