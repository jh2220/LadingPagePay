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
};

scrollLock = false;
circleWheelFunction = () => {
  if (scrollLock == false) {
    scrollLock = true;
  } else {
    return false;
  }

  var circleData = {
    color: "#aaa",
    strokeWidth: 4,
    trailWidth: 2,
    easing: "easeInOut",
    duration: 1400,
    text: {
      autoStyleContainer: false,
    },
    from: { color: "#000", width: 4 },
    to: { color: "#000", width: 4 },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      circle.path.setAttribute("stroke-width", state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(
          `<div class="circleWheelInsideText">${value}<span class="circlePercent">%</span><div>`
        );
      }
    },
  };

  var circle01 = new ProgressBar.Circle(circleWheel01, circleData);
  var circle02 = new ProgressBar.Circle(circleWheel02, circleData);
  var circle03 = new ProgressBar.Circle(circleWheel03, circleData);

  circle01.animate(0.35);
  circle02.animate(0.75);
  circle03.animate(0.63);
};

clickScrollFunction = () => {
  var clicksScrools = [
    { from: "menuItemHome", to: "showcase" },
    { from: "menuItemClients", to: "users" },
    { from: "menuItemVariant", to: "variation" },
    { from: "menuItemContact", to: "footer" },
  ];

  for (let i = 0; i < clicksScrools.length; i++) {
    $(`#${clicksScrools[i].from}`).click(function () {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $(`#${clicksScrools[i].to}`).offset().top,
        },
        2000
      );
    });
  }
};

window.addEventListener("scroll", function () {
  var elementShowcase = document.querySelector("#showcaseSection");
  var elementUser = document.querySelector("#usersSection");
  var elementVariation = document.querySelector("#variationSection");
  var elementFooter = document.querySelector("#footer");
  var elementCircles = document.querySelector("#usersCircleRow");

  var positionShowcase = elementShowcase.getBoundingClientRect();
  var positionUser = elementUser.getBoundingClientRect();
  var positionVariation = elementVariation.getBoundingClientRect();
  var positionFooter = elementFooter.getBoundingClientRect();
  var positionCircles = elementCircles.getBoundingClientRect();

  if (positionShowcase.bottom >= 58) {
    selectMenuColor("menuItemHome");
  } else if ((positionUser.bottom >= 58 && positionUser.top <= 57.9) || false) {
    selectMenuColor("menuItemClients");
  } else if (positionVariation.bottom >= 0 && positionVariation.top <= 57.9) {
    selectMenuColor("menuItemVariant");
  } else if (positionFooter.bottom >= 0 && positionFooter.top <= 0) {
    selectMenuColor("menuItemContact");
  }

  if (positionShowcase.top <= 10) {
    this.document.getElementById("mainHeader").style.height = "56px";
  } else {
    this.document.getElementById("mainHeader").style.height = "100px";
  }

  if (
    positionCircles.top <= window.innerHeight &&
    positionCircles.bottom >= 0
  ) {
    circleWheelFunction();
  }
});

selectMenuColor = (itemSelection) => {
  itemHome = this.document.getElementById("menuItemHome");
  itemClients = this.document.getElementById("menuItemClients");
  itemVariant = this.document.getElementById("menuItemVariant");
  itemContact = this.document.getElementById("menuItemContact");

  itemSelection == "menuItemHome"
    ? (itemHome.style.color = "#000000")
    : (itemHome.style.color = "#cccccc");
  itemSelection == "menuItemClients"
    ? (itemClients.style.color = "#000000")
    : (itemClients.style.color = "#cccccc");
  itemSelection == "menuItemVariant"
    ? (itemVariant.style.color = "#000000")
    : (itemVariant.style.color = "#cccccc");
  itemSelection == "menuItemContact"
    ? (itemContact.style.color = "#000000")
    : (itemContact.style.color = "#cccccc");
};

$(document).ready(function () {
  owlCaroseulFunction();
  clickScrollFunction();
});
