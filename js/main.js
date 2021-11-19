let vvClick = document.querySelector('a');
vvClick.onclick = function() {
    alert('ahhhhh');
}

let vvImgs = document.querySelector('img');
vvImgs.onclick = function() {
    let vvSrc = vvImgs.getAttribute('src');
    if (vvSrc === 'images/fruit.jpg') {
        vvImgs.setAttribute('src', 'images/package.jpg');
    } 
    else if (vvSrc === 'images/package.jpg') {
        vvImgs.setAttribute('src', 'images/flower.jpg');
    }
    else {
        vvImgs.setAttribute('src','images/fruit.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }
myButton.onclick = function() {
    setUserName();
 }