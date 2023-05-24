const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* alien observer*/
const observer2 = new IntersectionObserver((entries2) => {
  entries2.forEach((entry2) => {
      console.log(entry2)
      if (entry2.isIntersecting) {
          entry2.target.classList.add('show2');
      } else {
          entry2.target.classList.remove('show2');
      }
  });
});
const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer2.observe(el));

function popupBasic() {
  document.getElementById("popupBasic").style.display = "block";
  document.getElementById("popupBasic").style.opacity = "1";
}
function popupRegular() {
    document.getElementById("popupRegular").style.display = "block";
    document.getElementById("popupRegular").style.opacity = "1";
  }
  function popupPremium() {
    document.getElementById("popupPremium").style.display = "block";
    document.getElementById("popupPremium").style.opacity = "1";
  }
function xButton() {
  document.getElementById("popupBasic").style.display = "none";
  document.getElementById("popupRegular").style.display = "none";
  document.getElementById("popupPremium").style.display = "none";
}

function clickEvilGuy() {
  wow = document.getElementsByClassName('explode-button') [0];
  wow.style.display = 'inline';
  wow2 = document.getElementsByClassName('alien-save') [0];
  wow2.style.display = 'none';
}