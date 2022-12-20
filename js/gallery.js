
let scene = document.querySelector(".scene");
let gallery = document.querySelector(".gallery");

scene.addEventListener('mousemove', transport);

function transport(event){
    let sceneY = scene.offsetHeight / 2;
    let sceneX = scene.offsetWidth / 2;

    let translateY = event.offsetY - sceneY;
    let stopY = sceneY * 15 /100;
    console.log(stopY);
    // for(; stopY<translateY || translateY<-stopY;)
    // if( stopY<translateY || translateY<-stopY)
    // {
    //     gallery.style.cssText = `transform: translateY(${event.offsetY - sceneY}px)`;
    // }
    while(stopY<translateY || translateY<-stopY){
        let step = 0;
        step += (event.offsetY - sceneY)/100;
        gallery.style.cssText = `transform: translateY(${step}px)`;
    }
    // console.log(translateY);
    // gallery.style.cssText = `transform: translateY(${event.offsetY - sceneY}px)`;
}
