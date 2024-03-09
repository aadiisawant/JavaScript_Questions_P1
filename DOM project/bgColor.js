const randomColor = function(){
    let hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0;i<6;i++){
       color += hex[Math.floor(Math.random() * 16)];
       
    }
    return color;
}

let intervalId;
const startChangingColor = function(){
    console.log('STARTED');
    intervalId = setInterval(()=> document.body.style.backgroundColor = randomColor(),1000) 
    
}
document.querySelector('#start').addEventListener('click', startChangingColor);

const stopChangingColor = function(){
    clearInterval(intervalId)
    console.log('STOPPED');
}
document.querySelector('#stop').addEventListener('click', stopChangingColor);
