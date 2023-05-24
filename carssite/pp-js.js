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

const urlParams = new URLSearchParams(window.location.search);
const carId = urlParams.get('carId');
const car = product_data[carId];

tmswHeader = document.getElementById("tmsw-header");
tmswHeader.textContent = car.name;

tmswImage = document.getElementById("tmsw-car-image");
tmswImage.src = car.imgurl;

tmswPrice = document.getElementById("tmsw-car-price");
tmswPrice.textContent = car.price;

tmswDesc1 = document.getElementById("desc1");
tmswDesc1.textContent = car.desc1;
tmswDesc2 = document.getElementById("desc2");
tmswDesc2.textContent = car.desc2;