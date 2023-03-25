function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}       
function scrollDown() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
    });
}
function checkArrow() {
    if (window.scrollY > (document.documentElement.scrollHeight/2)) {
        arrowUp.hidden = false;
        arrowDown.hidden = true; 
        }
    if (window.scrollY < (document.documentElement.scroll/2)) {
        arrowUp.hidden = true;
        arrowDown.hidden = false; 
        }
}
const arrowUp = document.querySelector("#arrowTop");
arrowUp.addEventListener("click", scrollUp);
const arrowDown = document.querySelector("#arrowDown");
arrowDown.addEventListener("click", scrollDown);
document.addEventListener("scroll", checkArrow);
checkArrow()