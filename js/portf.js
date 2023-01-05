let word = Array.from(document.querySelectorAll('.word'));
let portfBlock = Array.from(document.querySelectorAll('.portf__block'));
let portfCard = Array.from(document.querySelectorAll('.portf__card'));

window.onload = function(){ 
    trackScroll();
}

function trackScroll() {
    word.forEach((word)=>{
        word.style.opacity = "1";
    })
    portfBlock.forEach((block)=>{
        block.style.cssText = "opacity: 1";
    })
    portfCard.forEach((card)=>{
        card.style.cssText = "box-shadow: -10px -10px 30px var(--light-shadow-color), 10px 10px 30px var(--dark-shadow-color); opacity: 1";
    })
}