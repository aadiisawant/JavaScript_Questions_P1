let changeText = function(){
    document.querySelector('h1').innerHTML= 'Text Changed :>'
}

const timeOutfnc = setTimeout(changeText,3000)

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(timeOutfnc)
    console.log('STOPPED');
})
const timeNow = function(str){
    console.log(str, Date.now());
}
const startInt = function(){
const intrvlFun = setInterval(timeNow, 1000, 'Hi!')
return intrvlFun;
}
document.querySelector('#startC').addEventListener('click',function(){
    const intervalId = startInt()
    window.intervalId = intervalId;
})

document.querySelector('#stopC').addEventListener('click',function(){
    clearInterval(window.intervalId)
    console.log('STOPPED');
})