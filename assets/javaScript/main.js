owlCaroseulFunction = () => {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        center: false,
        nav: false,
        loop: false,
      },
      650: {
        items: 2,
        center: false,
        nav: false,
        margin: 40,
        loop: false,
      },
      1000: {
        items: 3,
        center: false,
        nav: false,
        margin: 40,
        loop: false,
      },
      1300: {
        items: 4,
        center: false,
        nav: false,
        margin: 40,
        loop: false,
      },
    },
  });
}

circleWheelFunction = () => {

  var circleData = {
    color: '#aaa',
    strokeWidth: 4,
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#000', width: 4 },
    to: { color: '#000', width: 4 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(`<div class="circleWheelInsideText">${value}<span class="circlePercent">%</span><div>`);
      }
  
    }
  }

  var circle01 = new ProgressBar.Circle(circleWheel01, circleData);
  var circle02 = new ProgressBar.Circle(circleWheel02, circleData);
  var circle03 = new ProgressBar.Circle(circleWheel03, circleData);
  
  circle01.animate(0.35);
  circle02.animate(0.75);
  circle03.animate(0.63);

}

$(document).ready(function () {
  owlCaroseulFunction();
  circleWheelFunction();
});