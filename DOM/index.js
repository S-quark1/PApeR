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
  $("#outputReams").text(Math.floor(valNum*17));
  $("#outputSheets").text(Math.floor(valNum*8400));
  $("#outputKgs").text(Math.floor(valNum*42));
}
