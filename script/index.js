
function getElement(id) {
  return document.getElementById(id);
}


let heartCount = 0;
let coinCount = 100;
 let copyCount = 0;

const heartCountElement = document.getElementsByTagName("nav")[0].children[1].children[0].children[0];
const coinCountElement = document.getElementsByTagName("nav")[0].children[1].children[1].children[0];


const cartContainer = getElement("cart-container");


getElement("product-box").addEventListener("click", function (e) {
  const target = e.target;

  let clickedBtn = target;
  if (target.tagName === "I") {
    clickedBtn = target.parentNode;
  }

//  call
  if (clickedBtn.className.includes("call-btn")) {
    const card = clickedBtn.parentNode.parentNode;

    const serviceName = card.children[1].children[0].innerText;
    const serviceNumber = card.children[1].children[2].innerText;

    if (coinCount < 20) {
      alert("Not enough coins to make the call!");
      return;
    }

    coinCount = coinCount - 20;
    coinCountElement.innerText = coinCount;

    alert("Calling " + serviceName + " at " + serviceNumber);

    


    const newEntry = document.createElement("div");
    newEntry.classList.add("bg-gray-100", "rounded-xl", "p-3", "my-2");

    const namePara = document.createElement("p");
    namePara.innerText = serviceName;
    namePara.classList.add("font-semibold", "text-md");

    const numberPara = document.createElement("p");
    numberPara.innerText = serviceNumber;
    numberPara.classList.add("text-sm", "text-gray-500");

    newEntry.appendChild(namePara);
    newEntry.appendChild(numberPara);
    cartContainer.appendChild(newEntry);
  }

// copy

let copyCountElement = document.getElementById("copy-count");
copyCountElement.innerText = copyCount + " Copy";

if (clickedBtn.className.includes("copy-btn")) {
  let card = clickedBtn.parentNode.parentNode;
   serviceNumber = card.children[1].children[2].innerText;

  alert("Number " + serviceNumber + " copied!");


  copyCount = copyCount + 1;
  copyCountElement.innerText = copyCount + " Copy";
}



//   heart
  if (target.tagName ===  target.className.includes("fa-heart")) {
    heartCount = heartCount + 1;
    heartCountElement.innerText = heartCount;
  }
});


// clear
document.getElementById("btn-clear").addEventListener("click", function () {
  const cartContainer = getElement("cart-container");
  cartContainer.innerHTML = "";
});
