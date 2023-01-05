var color1 = getComputedStyle(document.documentElement).
getPropertyValue('--text-color');
var color2 = getComputedStyle(document.documentElement).
getPropertyValue('--placeholder-color');
var color3 = getComputedStyle(document.documentElement).
getPropertyValue('--main-color');

(() => {

    const cnv = document.querySelector('canvas');
    const ctx = cnv.getContext('2d');
    
    function init() {
    cnv.width = innerHeight;
    cnv.height = innerHeight;
    }
    init();
    
    const numberOfRings = 3;
    const ringRadiusOffset = 20;
    // const colors = ['#68768A', '#A0ACBD', '#e1e1e1'];
    const colors = [color1, color2, color3];
    const waveOffset = 15;
    let startAngel = 0;
    
    function updateRings(){
    for(let i = 0; i < numberOfRings; i++){
    let radius = i * ringRadiusOffset + ringRadius;
    let offsetAngle = i * waveOffset * Math.PI / 180;
    drawRing(radius, colors[i], offsetAngle);
    }
    // startAngel++;
    startAngel >= 360? startAngel = 0: startAngel++;
    }
    
    let centerX = cnv.width /2;
    let centerY = cnv.height /2;
    
    let maxWaveAmplitude = 15,
    numberOfWaves = 7;
    var ringRadius = 200;
    
    function drawRing(radius,color, offsetAngle){
    ctx.strokeStyle = color;
    ctx.lineWidth = 23;
    ctx.shadowColor = "#0000004b";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    
    ctx.beginPath();
    for(let j = -180; j < 180; j++){
    let radian = (j + startAngel) * Math.PI /180;
    let displaycement = 0;
    let now = Math.abs(j);
    
    if (now >70){
    displaycement = (now - 70)/100;
    }
    
    if (displaycement >= 1){
    displaycement = 1;
    }
    
    let waveAmplitude = displaycement * Math.sin((radian + offsetAngle) * numberOfWaves) * maxWaveAmplitude;
    let x = centerX + Math.cos(radian) * (radius + waveAmplitude);
    let y = centerY + Math.sin(radian) * (radius + waveAmplitude);
    j > -180? ctx.lineTo(x, y): ctx.moveTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
    }
    
    function loop(){
    cnv.width|=0; //cnx.clearRect(0,0, cnv.width, cnv.height);
    updateRings();
    requestAnimationFrame(loop);
    }
    loop();
    
    window.addEventListener('resize', init);
    })();
    