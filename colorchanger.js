const getColor=()=>{
    const randNumber=Math.floor(Math.random()*16777215);
    // console.log(randNumber)
    const randomCode="#"+randNumber.toString(16);
    // console.log(randomCode)
    document.body.style.background=randomCode;
    document.getElementById('color-code').innerText=randomCode;
}
document.getElementById('btn').addEventListener("click",getColor);
getColor();