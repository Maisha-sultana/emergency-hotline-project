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
if (clickedBtn.classList.contains("call-btn")) {
  const card = clickedBtn.closest(".card");

  const serviceName = card.querySelector("h2").innerText;
  const serviceNumber = card.querySelector("h3").innerText;

  if (coinCount < 20) {
    alert("Not enough coins to make the call.You Need minimum 20 coins to make a call");
    return;
  }

  coinCount -= 20;
  coinCountElement.innerText = coinCount;

  alert("Calling " + serviceName + " Service " + serviceNumber);

  const callTime = new Date().toLocaleTimeString();

  const newEntry = document.createElement("div");
  newEntry.classList.add("bg-gray-100", "rounded-xl", "p-3", "my-2");

  const flexContainer = document.createElement("div");
 flexContainer.classList.add("flex", "justify-between", "items-center");

  const namePara = document.createElement("p");
  namePara.innerText = serviceName;
  namePara.classList.add("font-semibold", "text-md");


  const timePara = document.createElement("p");
  timePara.innerText =  callTime;
  timePara.classList.add("text-xs", "text-gray-400");

  flexContainer.appendChild(namePara);
  flexContainer.appendChild(timePara);
  
  
  const numberPara = document.createElement("p");
  numberPara.innerText = serviceNumber;
  numberPara.classList.add("text-sm", "text-gray-500");

  
 
  newEntry.appendChild(flexContainer);
   newEntry.appendChild(numberPara);

  cartContainer.appendChild(newEntry);

}


// copy

let copyCountElement = document.getElementById("copy-count");
copyCountElement.innerText = copyCount + " Copy";
if (clickedBtn.classList.contains("copy-btn")) {
  const card = clickedBtn.closest(".card");
  const serviceNumber = card.querySelector("h3").innerText;

  alert("Number has copied :" + serviceNumber );

  copyCount += 1;
  copyCountElement.innerText = copyCount + " Copy";
}



//   heart
  if (target.classList.contains("fa-heart")) {
  
    if (target.classList.contains("fa-regular")) {
      heartCount = heartCount + 1;
    } 

    heartCountElement.innerText = heartCount;
  }
});


// clear
document.getElementById("btn-clear").addEventListener("click", function () {
  const cartContainer = getElement("cart-container");
  cartContainer.innerHTML = "";
});
