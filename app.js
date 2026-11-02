// const input = document.querySelector('#username');

// input.addEventListener('keydown', function(e) {
// 	console.log('KEY DOWN!');
// });

// input.addEventListener('keyup', function(e) {
// 	console.log('KEY UP!');
// });

// input.addEventListener('keypress', function(e) {
// 	console.log('KEY PRESS!');
// });

// const addItemInput = document.querySelector('#addItem');
// const itemsUL = document.querySelector('#items');

// addItemInput.addEventListener('keypress', function(e) {
// 	if (e.key === 'Enter') {
// 		if (!this.value) return; //if input is empty, skip everything
// 		//add a new item to list
// 		const newItemText = this.value;
// 		const newItem = document.createElement('li');
// 		newItem.innerText = newItemText;
// 		itemsUL.appendChild(newItem);
// 		this.value = '';
// 	}
// });
// const h2 = document.createElement("h2");

// h2.textContent = "h j";
// h2.textContent += " fac";
// // t1.append += "f a";
// // console.log(t1);
// document.body.append(h2);
// const d1 = document.createElement("div");
// const d2 = document.createElement("div");
// const d3 = document.createElement("div");
// d1.textContent = "d1";
// d2.textContent = "d2";
// d3.textContent = "d3";
// d1.classList.add("redColor", "box", "textAlign");
// d2.classList.add("redColor", "box", "textAlign");
// d3.classList.add("redColor", "box", "textAlign");

// document.body.append(d1, d2, d3);
const input = document.querySelector("#username");
input.addEventListener("keydown", function (e) {
  console.log("keydown", e);
});
input.addEventListener("keyup", function (e) {
  console.log("keyup", e);
});
input.addEventListener("keypress", function (e) {
  console.log("keypress ", e);
});
const addItemInput = document.querySelector("#addItem");
const itemsUl = document.querySelector("#items");
addItemInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!this.value) return;
    console.log(this.value);
    const newItemText = this.value;
    const newItem = document.createElement("li");
    newItem.innerText = newItemText;
    itemsUl.append(newItem);
    this.value = "";
    console.log(itemsUl.children);
    let allLis = itemsUl.children;
    console.log([...allLis]);
    let allLisArr = [...allLis];
    for (const item of allLisArr) {
      console.log(item);
      item.addEventListener("click", function () {
        console.log(this);
        this.remove();
      });
    }
  }
});
