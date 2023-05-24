const urlParams = new URLSearchParams(window.location.search);

const make = urlParams.get('make');
const model = urlParams.get('model');
const mileage = urlParams.get('mileage');
const condition = urlParams.get('condition');
const price = urlParams.get('price');
const image = urlParams.get('image');

const storedData = localStorage.getItem('userImage');
const imgElement = document.getElementById('section-user-div');
imgElement.src = storedData;

const newdiv = document.getElementById("section-user-div");
const newDivHTML = `
<div class="bcc">
    <img id="image-element" src="${imgElement.src}" alt="${make}" draggable="false">
    <bcc-textbox>    
        <c>${make} / ${model}</c>
        <p><b>$${price}</b><br>condition: ${condition}<br>mileage: ${mileage}</p>
    </bcc-textbox>
</div>
<div class="next-bcc">
    <nbcc-header>
        <h1>You must <a href="index.html">login</a> or <a href="index.html">register</a> before completing your listing.</h1>
    </nbcc-header>
</div>`;
newdiv.innerHTML = newDivHTML;