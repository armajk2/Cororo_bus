$(function () {
    var range = 100; // 화면밖 범위
    $("#container").mousemove(function (e) {
      positionChange(e);
    });
    function positionChange(e) {
      var centerX = e.pageX - $("#container").width() / 2;
      var centerY = e.pageY - $("#container").height() / 2;
      var percentX = (centerX / $("#container").width()) * range;
      var percentY = (centerY / $("#container").height()) * range;
      gsap.to(".box", {
        left: -percentX + "%",
        top: -percentY + "%",
        duration: 2
      });
    }
  });

 
