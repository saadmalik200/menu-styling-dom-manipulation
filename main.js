document.querySelector("body").style.fontSize = "1.25rem";

document.querySelector(".title").style.textAlign = "center";

const main = document.querySelector(".main");
main.style.display = "flex";

main.style.justifyContent = "center";
main.style.alignItems = "center";
main.style.gap = "2rem";
main.style.flexWrap = "wrap";

const category = document.querySelectorAll(".category");
console.log(category);
for (const item of category) {
  item.style.color = "Black";
  item.style.fontSize = "2rem";
  item.style.textDecoration = "underline";
  item.style.fontStyle = "italic";
  item.style.fontStyle = "bold";
}

const foodCategory = document.querySelectorAll(".food-category");

console.log(foodCategory);
for (const item of foodCategory) {
  item.style.color = "black";
  item.style.fontSize = "1.5rem";
  item.style.marginTop = "2rem";
  item.style.backgroundColor = color1();
  item.style.padding = "2rem";
  item.style.width = "20%";
}

const h3 = document.getElementById("warning");
h3.style.textAlign = "center";
h3.style.fontSize = "2rem";
h3.style.fontFamily = "Arial";

function color1() {
  const clr1 = Math.floor(Math.random() * 254 + 1);
  const clr2 = Math.floor(Math.random() * 254 + 1);
  const clr3 = Math.floor(Math.random() * 254 + 1);
  const trans = Math.random().toFixed(1);
  //   console.log(trans);
  return `rgb(${clr1},${clr2},${clr3},${trans})`;
}

// console.log(color1());
// document.body.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
// document.body.style.backgroundColor = "rgb(" + [a, b, c].join(",") + ")";
// console.log(colorGenerator());
