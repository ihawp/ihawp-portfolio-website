product_data = {
    car1: {
        name: "caravan",
        desc1: "- has a steering wheel",
        desc2: "- and seats",
        imgurl: "header-image.png",
        price: "$13,000"
    },
    car2: {
        name: "two way suv",
        desc1: "- goes two ways",
        desc2: "- two steering wheels?",
        imgurl: "suv1.png",
        price: "$43,000"
    },
    car3: {
        name: "hybrid suv",
        desc1: "- gas and electricity",
        desc2: "- probably best",
        imgurl: "suv2.png",
        price: "$68,000"
    },
    car4: {
        name: "midrange",
        desc1: "- small",
        desc2: "- affordable",
        imgurl: "suv3.png",
        price: "$23,000"
    },
    car5: {
        name: "buggy",
        desc1: "- NOT small",
        desc2: "- probably affordable",
        imgurl: "suv4.png",
        price: "$28,000"
    },
    car6: {
        name: "dope asf",
        desc1: "- bigger than NOT small?",
        desc2: "- NOT affordable",
        imgurl: "suv5.png",
        price: "$185,000"
    },
}

const container = document.getElementById("car-container");

for (let carKey in product_data) {
  const car = product_data[carKey];

  const carDiv = document.createElement("div");
  carDiv.classList.add("buy-car-card");

  carDiv.innerHTML = `
    <img src="${car.imgurl}" alt="${car.name}" draggable="false">
    <cardiv-textbox>
        <cd-header>
            <h2>${car.name}<br>
        </cd-header>
        <cd-left>
            <h1>${car.price}</h1>
        </cd-left>
        <cd-right>
        <p>${car.desc1}<br>
            ${car.desc2}</p>
        </cd-right>
    </cardiv-textbox>
    <a onclick="viewCarPage('${carKey}')">view</a>
  `;
  container.appendChild(carDiv);
}