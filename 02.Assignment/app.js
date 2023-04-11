// Question 01 (Closure Function)

// Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

function createAdderNum(x) {
    return function (y) { //Anonymouse Function
        return x + y;
    }

}
const add = createAdderNum(5);
console.log(add(10)); // prints 15
console.log(add(20)); // prints 25
console.log(add(25)); // prints 30


// Question 02 (Recursive Function)

// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested



function specificVal(arr, val) {
    if (arr.length === 0) {
        return false;
    }
    else if (arr[0] === val) {
        return true;
    } else {
        return specificVal(arr.slice(1), val);
    }
}

let arr = [1, 2, 3, 4, 5]
console.log(specificVal(arr, 3));
console.log(specificVal(arr, 6));


// Question 03

// Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.



function addParagraph(text) {
    const p = `<p>${text}</p>`;
    document.body.innerHTML += p;
}

addParagraph("This is a new paragraph!");


// Question 04 


// Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

function addListItem(text) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}
addListItem('New Item');

// Question 05
// . Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.


function changeBackgroundColor(element, color) {
    // set the background color of the element
    element.style.backgroundColor = color;
}

const element = document.querySelector('#background-color');
changeBackgroundColor(element, 'skyblue');


// Question 06

// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

function saveToLocalStorage(key, object) {
    const jsonString = JSON.stringify(object);
    localStorage.setItem(key, jsonString);
}


const myObject = { name: 'anun', age: 25 };
saveToLocalStorage('myKey', myObject);


// Question 07

// Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

function getFromLocalStorage(key) {
    const jsonString = localStorage.getItem(key);
    return JSON.parse(jsonString);
}
let myObj = getFromLocalStorage('myKey');
console.log(myObj);


// Question 08

// Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object



function saveObjectToLocalStorage(object) {
    for (const property in object) {
      localStorage.setItem(property, object[property]);
    }
    const newObject = {};
    for (const key in localStorage) {
      newObject[key] = localStorage.getItem(key);
    }
    return newObject;
  }
  const myOb = { name: 'anun', age: 25 };
const newObject = saveObjectToLocalStorage(myObject);
console.log(newObject);
