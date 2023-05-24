// ihawp


// movement observer
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
const wow = document.querySelectorAll('.hidden');
wow.forEach((el) => observer.observe(el));
const wow2 = document.querySelectorAll('.hidden2');
wow2.forEach((el) => observer.observe(el));
const wow3 = document.querySelectorAll('.hidden3');
wow3.forEach((el) => observer.observe(el));


// view car button action
function viewCarPage(carId) {
    const url = `product-page.html?carId=${carId}`;
    window.location.href = url;
}