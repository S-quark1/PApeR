$(document).ready(function () {
  $("#egg").click(function () {
    var eggs = prompt("Please, enter the amount of 'paper' you found");
    if (eggs!=16 && eggs!=null){
      do {
        var eggs = prompt("Nope)");
      } while(eggs!=16 && eggs!=null);
    }
    if (eggs==16){
      if (window.confirm('Hooray! You are right... Click "ok" to get your prize and "cancel" if you dare not'))
      {
        window.location.href='https://youtu.be/xvFZjo5PgG0';
      };
    }
  })
  // $("#egg").hover(function () {
  //   $(this).css("font-size", "24pt");
  //   }, function(){
  //   $(this).css("font-size", "22pt");
  // })
    $("#incorrect").click(function () {
      if ($("#incorrect").text()!="paper"){
        change("#incorrect");
      }
    })
    $("#incor").click(function () {
      if ($("#incor").text()!="paper"){
        change("#incor");
      }
    })
    $("#wrong").click(function () {
      if ($("#wrong").text()!="paper"){
        change("#wrong");
      }
    })
    $("#wrongee").click(function () {
      if ($("#wrongee").text()!="paper"){
        change("#wrongee");
      }
    })
    $("#rid").click(function () {
      if ($("#rid").text()!="paper"){
        change("#rid");
      }
    })

    function change(name) {
      function random(max){
        return Math.random() * (max - 0) + 0;
      }

      var c = document.createDocumentFragment();
      for (var i=0; i<100; i++) {
        var styles = 'transform: translate3d(' + (random(500) - 250) + 'px, ' + (random(200) - 150) + 'px, 0) rotate(' + random(360) + 'deg);\
                background: hsla('+random(360)+',100%,50%,1);\
                animation: bang 700ms ease-out forwards;\
                opacity: 0';

        var e = document.createElement("i");
        e.style.cssText = styles.toString();
        c.appendChild(e);
      }
      $(name).append(c);
      var audio = new Audio('DOM/confetti.mp3');
      audio.play();
      $(name).fadeOut(function () {
          $(name).text("paper").fadeIn();
      })
    }
});
