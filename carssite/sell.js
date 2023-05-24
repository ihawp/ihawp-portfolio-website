function uploadImage() {
    const input = document.getElementById('ss-image-input');
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      const dataUrl = event.target.result;
      localStorage.setItem('userImage', dataUrl);
    };
    reader.readAsDataURL(file);
    if (file) {
      const parentElement = document.getElementById('ss-user-image');
      const newDivHTML = `<div id="ss-user-image"><img draggable="false" src="${URL.createObjectURL(file)}"></div>`;
      parentElement.innerHTML = newDivHTML;
      const submitButton = document.getElementById("ssr-submit");
      submitButton.style = "opacity: 1;"
    } else {
      console.log('No file selected');
    }
}

const form = document.getElementById('ssr-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve user's answers
  const make = document.getElementById('make').value;
  const model = document.getElementById('model').value;
  const mileage = document.getElementById('mileage').value;
  const condition = document.getElementById('condition').value;
  const price = document.getElementById('price').value;
  const image = document.getElementById('ss-image-input').value;

  const url = `sellconf.html?make=${make}&model=${model}&mileage=${mileage}&condition=${condition}&price=${price}&image=${image}`;
    window.location.href = url;
});