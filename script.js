const arr=["Jan","Feb","Mar","April","May","June","July","Aug","sep", "Oct","Nov","Dec"];
let h=document.getElementById("hour");
let m=document.getElementById("min");
let date=document.getElementById("day");
let month=document.getElementById("month");
let year=document.getElementById("year");
let pm=document.getElementById("pm");
let c=new Date();
var mon=c.getMonth();
date.innerHTML=c.getDate();
month.innerHTML=arr[mon];
h.innerHTML=c.getHours();
year.innerHTML=c.getFullYear();

var k=c.getMinutes();
var mon=c.getMonth();
if(k<10){
    m.innerHTML="0"+k;

}
else{
    m.innerHTML=k;
}
if(pm<12){
    pm.innerHTML="AM";
}else{
    pm.innerHTML="PM";
}

const arrowdown=document.getElementById("arrowdown");
const bankname=document.getElementById("line3");
const mainblock=document.getElementById("page");
const bigman=document.getElementById('payment');
const line=document.getElementById('line3');
const downslide=document.getElementById('mainbox');
let count=0;

arrowdown.addEventListener('click',()=>{
    count++;
    if(count%2!=0){

    
    bankname.style.marginBottom='';
    mainblock.style.minHeight='150vh';
    bigman.style.height='52vh';
    line.style.height='19vh';
    line.style.width='89.7vw';
    line.style.border= '1px solid #343434';
    line.style.backgroundColor=' #1F1F20';
    line.style.alignItems='center';
    downslide.style.visibility='visible';

    }else{
        bankname.style.marginBottom='0vh';
    mainblock.style.minHeight='100vh';
    bigman.style.height='33vh';
    line.style.height='0.5px';
    
    line.style.alignItems='center';
    downslide.style.visibility='hidden';

   


    }
    

    

    })







