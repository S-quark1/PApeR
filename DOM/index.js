// if(window.addEventListener){
//   window.addEventListener('scroll',scroll)
// }else if(window.attachEvent){
//   window.attachEvent('onscroll',scroll);
// }
//
// function scroll(ev){
//   var st = Math.max(document.documentElement.scrollTop,document.body.scrollTop);
//   if((st+document.documentElement.clientHeight+1)>=document.documentElement.scrollHeight){
//     alert("Check out the calculator!");
//   }
// }

function weightConverter(valNum) {
  document.getElementById("outputReams").innerHTML=Math.floor(valNum*20);
  document.getElementById("outputSheets").innerHTML=Math.floor(valNum*10000);
}
