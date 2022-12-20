//=========================Смена темы сайта===========================
let link = document.getElementById("style_theme");

let themeBtn = document.querySelector(".theme__btn");
let qualityPath = Array.from(document.querySelectorAll(".qualities__figure path"));
let pathArray = Array.from(document.querySelectorAll(".logo_shadow g path"));
let imgSocial = document.querySelectorAll(".social__img");
let qualitiesImgPath = Array.from(document.querySelectorAll(".qualities__img path"));
let qualitiesImgCircle = Array.from(document.querySelectorAll(".qualities__img circle"));

// theme.addEventListener('click', changeTheme);

themeBtn.onclick = function() {
	let theme = document.getElementById("theme");
	themeBtn.classList.toggle('icon_moon');

	if (link.getAttribute("href") == 'css/light-theme.css'){
		link.href = "css/dark-theme.css";
		themeBtn.style.left = 'calc(100% - 30px)';

		pathArray.forEach((path) => {
			path.setAttribute('stroke','#111F20');
		})
		qualityPath.forEach((qulity) => {
			qulity.setAttribute('stroke','#111F20');
		})
		qualitiesImgPath.forEach((path) => {
			path.setAttribute('fill','#D0D0D2');
		})
		qualitiesImgCircle.forEach((circle) => {
			circle.setAttribute('stroke','#D0D0D2');
		})
		

		themeBtn.classList.toggle('icon_sun');
		themeBtn.classList.toggle('icon_moon');

		for(let i = 0; i<imgSocial.length; i++){
			imgSocial[i].src=`img/social/social_img${i+1}${i+1}.png`;
			console.log(i);
		}
	}
	else {
		link.href = "css/light-theme.css";
		themeBtn.style.left = '0%';

		pathArray.forEach((path) => {
			path.setAttribute('stroke','#e1e1e1');
		})
		qualityPath.forEach((qulity) => {
			qulity.setAttribute('stroke','#e1e1e1');
		})
		qualitiesImgPath.forEach((path) => {
			path.setAttribute('fill','#68768A');
		})
		qualitiesImgCircle.forEach((circle) => {
			circle.setAttribute('stroke','#68768A');
		})

		themeBtn.classList.toggle('icon_moon');
		themeBtn.classList.toggle('icon_sun');
		
		for(let i = 0; i<imgSocial.length; i++){
			imgSocial[i].src=`img/social/social_img${i+1}.png`;
			console.log(i);
		}
	}

}


//=======================Скрытие Header при скроле====================
let header = document.querySelector('header');
let screenHeight = window.screen.height-100;
let navigation = document.querySelector('nav');

window.addEventListener('scroll', function () {
	if (window.scrollY > screenHeight) {
		header.style.opacity = '0';
		navigation.classList.add('nav_active');
	} else {
		header.style.opacity = '1';
		navigation.classList.remove('nav_active');
	}
});
window.addEventListener('scroll', function () {
	if (window.scrollY > window.screen.height-300) {
		navigation.classList.add('nav_active');
	} else {
		navigation.classList.remove('nav_active');
	}
});

//==================Создание анимации параллакса======================
window.onload = function(){ 
	let figure = document.querySelectorAll('.figure');

//Массив, отвечающий за кэффициенты для перемещения и вращения
let arrayForMove = [-5,4,10,-2,10,-7,9,-3,-10,2]

//Скорость анимаций
const speed = 0.05;

//Определение позиции и переменные для перевода в проценты значений
let positionX = 0, positionY = 0;
let coordProcentX = 0, coordProcentY = 0;

//Функция параллакса
function setMouseParallax(){
	const distX = coordProcentX - positionX;
	const distY = coordProcentY - positionY;

	positionX = positionX + (distX * speed);
	positionY = positionY + (distY * speed);

	rotate = positionX*(180/Math.PI);

//Перемещение массива фигур с учетом массива коэффициентов
for(i = 0; i < figure.length; i++){
	figure[i].style.cssText = `Transform: translate(${positionX*arrayForMove[i]}%,${positionY*arrayForMove[i]}%) rotate(${rotate/150*arrayForMove[i]}deg);`;
	// if(document.querySelector('body').offsetWidth < 800){
	// 	figure[i].style.cssText = `Transform: translate(${positionX*arrayForMove[i]}%,${positionY*arrayForMove[i]}%) rotate(${rotate/150*arrayForMove[i]}deg) scale(0.5);`;
	// }
}
requestAnimationFrame(setMouseParallax);
}
setMouseParallax();

//Проверка события перемещения мыши
header.addEventListener('mousemove', function(e){
	const parallaxWidth = header.offsetWidth;
	const parallaxHeight = header.offsetHeight;

	const coordX = e.pageX - parallaxWidth / 2;
	const coordY = e.pageY - parallaxHeight / 2;

	coordProcentX = coordX / parallaxWidth * 100;
	coordProcentY = coordY / parallaxHeight * 100;
});
}

/*===============Автоматическое обновление даты в футере===============*/
let footerData = document.getElementById('footer_data');
let data = new Date().getFullYear();

footerData.innerHTML = `Баланюк Никита, ${data}`;

/*=====================Анимация svg при скролле =======================*/
let infoCard = Array.from(document.querySelectorAll('.for_adopt .card'));

let word = document.querySelectorAll('.word');
let arrayWords = Array.from(word);
let portfBlock = Array.from(document.querySelectorAll('.portf__block'));
let portfCard = Array.from(document.querySelectorAll('.portf__card'));
let socialBlock = Array.from(document.querySelectorAll('.social__block'));
let qualities = Array.from(document.querySelectorAll('.qualities__figure'));
let qualityImg = Array.from(document.querySelectorAll('.qualities__img'));
let qualityInfo = Array.from(document.querySelectorAll('.qualities__info'));

window.addEventListener('scroll', trackScroll);

//Рсчет расстояния элемента от верха и определение длины скролла для запуска анимации
function offset(el) {
	var rect = el.getBoundingClientRect(),
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	let topDist = {top:rect.top + scrollTop - (window.innerHeight * 0.96)}
	return (topDist.top);
}

function trackScroll() {

	let scrolled = window.pageYOffset - 200;
	//Анимация появления заголовков

	arrayWords.forEach((word)=>{
		if(scrolled > offset(word)){
			word.style.opacity = "1";
		}
	})

	qualities.forEach((quality)=>{
		if(scrolled > offset(quality)){
			quality.style.cssText = "animation: qualities 2s ease 0.3s forwards;";
		}
	})

	qualityImg.forEach((img) => {
		if(scrolled > offset(img)){
			img.style.cssText = "opacity: 1;";
		}
	})
	qualityInfo.forEach((info) => {
		if(scrolled > offset(info)){
			info.style.cssText = "opacity: 1;";
		}
	})

	infoCard.forEach((inf)=>{
		if(scrolled > offset(inf)){
			inf.style.cssText = "box-shadow: inset -10px -10px 35px var(--light-shadow-color), inset 10px 10px 25px var(--dark-shadow-color); opacity: 1";
		}
	})

	//Анимация появления блоков Портфолио
	portfBlock.forEach((block)=>{
		if(scrolled > offset(block)){
			block.style.cssText = "opacity: 1";
		}
	})
	portfCard.forEach((card)=>{
		if(scrolled > offset(card)){
			card.style.cssText = "box-shadow: -10px -10px 30px var(--light-shadow-color), 10px 10px 30px var(--dark-shadow-color); opacity: 1";
		}
	})

	socialBlock.forEach((social)=>{
		if(scrolled > offset(social)){
			social.classList.add('social__block_active');
		}
		else{
			social.classList.remove('social__block_active');
		}
	})
}

//============================================
let portfolio = document.querySelector('.portf_frame');

if(window.screen.height<768 || window.screen.width<1366){
	let logoSize = document.querySelector('.logo_shadow');

	logoSize.style.cssText = `Transform: scale(${window.screen.height / 1080 + 0.1})`;
	portfolio.style.cssText = `Transform: skew(-22deg,12deg) scale(${window.screen.width / 1920 })`;
}

if(window.screen.width<=480){
	let logoSize = document.querySelector('.logo_shadow');

	logoSize.style.cssText = `Transform: scale(${window.screen.width / 1920 + 0.2})`;
	portfolio.style.cssText = `Transform: skew(-22deg,12deg) scale(${(window.screen.width / 1920) + 0.2})`;
}

//=====================================================
let buttonHeader = document.querySelector('.button_header');
let firstLink = document.querySelector('.first_link');
let secondLink = document.querySelector('.sec_link');
let thirdLink = document.querySelector('.third_link');

buttonHeader.addEventListener('click', scrollfirst);
firstLink.addEventListener('click', scrollfirst);
secondLink.addEventListener('click', scrollSecond);
thirdLink.addEventListener('click', scrollThird);

function scrollfirst(){
	if(window.screen.width>480){
	window.scrollTo({
	top: 1000,
    left: 0,
    behavior : "smooth"
    });
    }
    else{
 	window.scrollTo({
 		top: offset(word[0])+window.innerHeight-120,
 		left: 0,
 		behavior : "smooth"
 	});
 }

}
function scrollSecond(){
	window.scrollTo({
		top: offset(word[1])+window.innerHeight-120,
		left: 0,
		behavior : "smooth"
	});
}
function scrollThird(){
	window.scrollTo({
		top: offset(word[2])+window.innerHeight-120,
		left: 0,
		behavior : "smooth"
	});
}

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

