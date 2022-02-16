$(document).ready(function () {
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

      $(name).fadeOut(function () {
          $(name).text("paper").fadeIn();
      })
    }
});
