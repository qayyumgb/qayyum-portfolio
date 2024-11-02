/* -------------------------------------------

Name: 		Arter
Version:  1.0
Author:		Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). mail: miller.themes@gmail.com

------------------------------------------- */
$(function () {
  "use strict";

  // const options = {
  //   containers: ["#swup", "#swupMenu"],
  //   animateHistoryBrowsing: true,
  //   linkSelector: "a:not([data-no-swup])",
  // };
  // const swup = new Swup(options);

  // scrollbar
  Scrollbar.use(OverscrollPlugin);
  Scrollbar.init(document.querySelector("#scrollbar"), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });
  Scrollbar.init(document.querySelector("#scrollbar2"), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });

  // page loading
  $(document).ready(function () {
    anime({
      targets: ".art-preloader .art-preloader-content",
      opacity: [0, 1],
      delay: 200,
      duration: 600,
      easing: "linear",
      complete: function (anim) {},
    });
    anime({
      targets: ".art-preloader",
      opacity: [1, 0],
      delay: 2200,
      duration: 400,
      easing: "linear",
      complete: function (anim) {
        $(".art-preloader").css("display", "none");
      },
    });
  });

  var bar = new ProgressBar.Line(preloader, {
    strokeWidth: 1.7,
    easing: "easeInOut",
    duration: 1400,
    delay: 750,
    trailWidth: 1.7,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });

  bar.animate(1);

  // counters
  anime({
    targets: ".art-counter-frame",
    opacity: [0, 1],
    duration: 800,
    delay: 2300,
    easing: "linear",
  });

  anime({
    targets: ".art-counter",
    delay: 1300,
    opacity: [1, 1],
    complete: function (anim) {
      $(".art-counter").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 2000,
              easing: "linear",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
    },
  });

  // progressbars
  var bar = new ProgressBar.Circle(circleprog1, {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1400,
    delay: 2500,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });

  bar.animate(0.95);

  var bar = new ProgressBar.Circle(circleprog2, {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1400,
    delay: 2600,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });

  bar.animate(0.91);

  var bar = new ProgressBar.Circle(circleprog3, {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1400,
    delay: 2700,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });

  bar.animate(0.95);

  var bar = new ProgressBar.Circle(circleprog4, {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1400,
    delay: 2800,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });

  bar.animate(0.93);

  var bar = new ProgressBar.Circle(circleprog5, {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1400,
    delay: 2900,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });

  bar.animate(0.95);

  var bar = new ProgressBar.Circle(circleprog6, {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1400,
    delay: 3000,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });

  bar.animate(0.8);


  var bar = new ProgressBar.Line(lineprog1, {
    strokeWidth: 1.72,
    easing: "easeInOut",
    duration: 1400,
    delay: 2800,
    trailWidth: 1.72,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });

  bar.animate(0.95);

  var bar = new ProgressBar.Line(lineprog2, {
    strokeWidth: 1.72,
    easing: "easeInOut",
    duration: 1400,
    delay: 2900,
    trailWidth: 1.72,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });

  bar.animate(0.93);

  var bar = new ProgressBar.Line(lineprog3, {
    strokeWidth: 1.72,
    easing: "easeInOut",
    duration: 1400,
    delay: 3000,
    trailWidth: 1.72,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });

  bar.animate(0.93);

  var bar = new ProgressBar.Line(lineprog4, {
    strokeWidth: 1.72,
    easing: "easeInOut",
    duration: 1400,
    delay: 3100,
    trailWidth: 1.72,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });

  bar.animate(0.94);

  var bar = new ProgressBar.Line(lineprog5, {
    strokeWidth: 1.72,
    easing: "easeInOut",
    duration: 1400,
    delay: 3200,
    trailWidth: 1.72,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });

  bar.animate(0.9);

  // Contact form
  $(".art-input").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("art-active");
    } else {
      $(this).removeClass("art-active");
    }
  });

  $("#form").submit(function () {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize(),
    }).done(function () {
      var tl = anime.timeline({
        easing: "easeOutExpo",
      });

      tl.add({
        targets: ".art-submit",
        opacity: 0,
        scale: 0.5,
      }).add({
        targets: ".art-success",
        scale: 1,
        height: "45px",
      });
    });
    return false;
  });

  // portfolio filter
  $(".art-filter a").on("click", function () {
    $(".art-filter .art-current").removeClass("art-current");
    $(this).addClass("art-current");

    var selector = $(this).data("filter");
    $(".art-grid").isotope({
      filter: selector,
    });
    return false;
  });

  // masonry Grid
  $(".art-grid").isotope({
    filter: "*",
    itemSelector: ".art-grid-item",
    transitionDuration: ".6s",
  });

  // slider testimonials
  var swiper = new Swiper(".art-testimonial-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: false,
    autoplaySpeed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-testi-swiper-next",
      prevEl: ".art-testi-swiper-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  // slider works
  var swiper = new Swiper(".art-works-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-works-swiper-next",
      prevEl: ".art-works-swiper-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  // slider blog
  var swiper = new Swiper(".art-blog-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-blog-swiper-next",
      prevEl: ".art-blog-swiper-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "share", "slideShow", "thumbs", "close"],
  });

  $('[data-fancybox="diplome"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "slideShow", "thumbs", "close"],
  });

  $('[data-fancybox="avatar"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "close"],
  });

  $('[data-fancybox="recommendation"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "slideShow", "thumbs", "close"],
  });

  $.fancybox.defaults.hash = false;

  // $(".current-menu-item a").clone().appendTo(".art-current-page");

  $(".art-map-overlay").on("click", function () {
    $(this).addClass("art-active");
  });

  $(".art-info-bar-btn").on("click", function () {
    $(".art-info-bar").toggleClass("art-active");
    $(".art-menu-bar-btn").toggleClass("art-disabled");
  });

  $(".art-menu-bar-btn").on("click", function () {
    $(".art-menu-bar-btn , .art-menu-bar").toggleClass("art-active");
    $(".art-info-bar-btn").toggleClass("art-disabled");
  });

  $(".art-info-bar-btn , .art-menu-bar-btn").on("click", function () {
    $(".art-content").toggleClass("art-active");
  });

  $(".art-curtain , .art-mobile-top-bar").on("click", function () {
    $(
      ".art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn"
    ).removeClass("art-active , art-disabled");
  });

  $(".menu-item").on("click", function () {
    if ($(this).hasClass("menu-item-has-children")) {
      $(this).children(".sub-menu").toggleClass("art-active");
    } else {
      $(
        ".art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn"
      ).removeClass("art-active , art-disabled");
    }
  });

  //redirect
  


  // reinit
  document.addEventListener("swup:contentReplaced", function () {
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.querySelector("#scrollbar"), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });
    Scrollbar.init(document.querySelector("#scrollbar2"), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });

    $("#form").submit(function () {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize(),
      }).done(function () {
        var tl = anime.timeline({
          easing: "easeOutExpo",
        });

        tl.add({
          targets: ".art-submit",
          opacity: 0,
          scale: 0.5,
        }).add({
          targets: ".art-success",
          scale: 1,
          height: "45px",
        });
      });
      return false;
    });

    // Masonry Grid
    $(".art-grid").isotope({
      filter: "*",
      itemSelector: ".art-grid-item",
      transitionDuration: ".6s",
    });

    $(".art-filter a").on("click", function () {
      $(".art-filter .art-current").removeClass("art-current");
      $(this).addClass("art-current");

      var selector = $(this).data("filter");
      $(".art-grid").isotope({
        filter: selector,
      });
      return false;
    });

    anime({
      targets: ".art-counter-frame",
      opacity: [0, 1],
      duration: 800,
      delay: 300,
      easing: "linear",
    });

    $(".art-counter").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2000,
            easing: "linear",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });

    // slider testimonials
    var swiper = new Swiper(".art-testimonial-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: false,
      autoplaySpeed: 5000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".art-testi-swiper-next",
        prevEl: ".art-testi-swiper-prev",
      },
      breakpoints: {
        1500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
      },
    });

    // slider works
    var swiper = new Swiper(".art-works-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: {
        delay: 4000,
      },
      autoplaySpeed: 5000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".art-works-swiper-next",
        prevEl: ".art-works-swiper-prev",
      },
      breakpoints: {
        1500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1,
        },
      },
    });

    // slider blog
    var swiper = new Swiper(".art-blog-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: {
        delay: 4000,
      },
      autoplaySpeed: 5000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".art-blog-swiper-next",
        prevEl: ".art-blog-swiper-prev",
      },
      breakpoints: {
        1500: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 1,
        },
      },
    });

    $('[data-fancybox="gallery"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: ["zoom", "slideShow", "thumbs", "close"],
    });

    $('[data-fancybox="diplome"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: ["zoom", "slideShow", "thumbs", "close"],
    });

    $('[data-fancybox="recommendation"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: ["zoom", "slideShow", "thumbs", "close"],
    });

    $.fancybox.defaults.hash = false;

    // $(".current-menu-item a").clone().prependTo(".art-current-page");

    $(".menu-item").on("click", function () {
      if ($(this).hasClass("menu-item-has-children")) {
        $(this).children(".sub-menu").toggleClass("art-active");
      } else {
        $(
          ".art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn"
        ).removeClass("art-active , art-disabled");
      }
    });
  });
});

function openpage(link) {
  console.log("clicked")

  window.open(link , '_blank');
};





// project detail popup with animation code (not using right now. its for future) regard Abdul Qayyum
var cards, nCards, cover, openContent, pageIsOpen = false,
    openContentImage, closeContent, windowWidth, windowHeight, currentCard;

// initiate the process
init();

function init() {
  resize();
  selectElements();
  attachListeners();
}

// select all the elements in the DOM that are going to be used
function selectElements() {
  cards = document.getElementsByClassName('card-click'),
  nCards = cards.length,
  cover = document.getElementById('cover'),
  openContent = document.getElementById('open-content'),
  openContentImage = document.getElementById('open-content-image')
  closeContent = document.getElementById('close-content');
}

/* Attaching three event listeners here:
  - a click event listener for each card
  - a click event listener to the close button
  - a resize event listener on the window
*/
function attachListeners() {
  for (var i = 0; i < nCards; i++) {
    attachListenerToCard(i);
  }
  closeContent.addEventListener('click', onCloseClick);
  window.addEventListener('resize', resize);
}

function attachListenerToCard(i) {
  cards[i].addEventListener('click', function(e) {
    var card = getCardElement(e.target);
    onCardClick(card, i);
  })
}

/* When a card is clicked */
function onCardClick(card, i) {
  // set the current card
  currentCard = card;
  currentCard.className += ' clicked';
  setTimeout(function() {animateCoverUp(currentCard)}, 500);
  animateOtherCards(currentCard, true);
  openContent.className += ' open';
}

function animateCoverUp(card) {
  // get the position of the clicked card
  var cardPosition = card.getBoundingClientRect();
  // get the style of the clicked card
  var cardStyle = getComputedStyle(card);
  setCoverPosition(cardPosition);
  setCoverColor(cardStyle);
  scaleCoverToFillWindow(cardPosition);
  // update the content of the opened page
  setTimeout(function() {
    window.scroll(0, 0);
    pageIsOpen = true;
  }, 300);
}

function animateCoverBack(card) {
  var cardPosition = card.getBoundingClientRect();
  // the original card may be in a different position, because of scrolling, so the cover position needs to be reset before scaling back down
  setCoverPosition(cardPosition);
  scaleCoverToFillWindow(cardPosition);
  // animate scale back to the card size and position
  cover.style.transform = 'scaleX('+1+') scaleY('+1+') translate3d('+(0)+'px, '+(0)+'px, 0px)';
  setTimeout(function() {
    // set content back to empty
    // style the cover to 0x0 so it is hidden
    cover.style.width = '0px';
    cover.style.height = '0px';
    pageIsOpen = false;
    // remove the clicked class so the card animates back in
    currentCard.className = currentCard.className.replace(' clicked', '');
  }, 301);
}

function setCoverPosition(cardPosition) {
  // style the cover so it is in exactly the same position as the card
  cover.style.left = cardPosition.left + 'px';
  cover.style.top = cardPosition.top + 'px';
  cover.style.width = cardPosition.width + 'px';
  cover.style.height = cardPosition.height + 'px';
}

function setCoverColor(cardStyle) {
  // style the cover to be the same color as the card
  cover.style.backgroundColor = cardStyle.backgroundColor;
}

function scaleCoverToFillWindow(cardPosition) {
  // calculate the scale and position for the card to fill the page,
  var scaleX = windowWidth / cardPosition.width;
  var scaleY = windowHeight / cardPosition.height;
  var offsetX = (windowWidth / 2 - cardPosition.width / 2 - cardPosition.left) / scaleX;
  var offsetY = (windowHeight / 2 - cardPosition.height / 2 - cardPosition.top) / scaleY;
  // set the transform on the cover - it will animate because of the transition set on it in the CSS
  cover.style.transform = 'scaleX('+scaleX+') scaleY('+scaleY+') translate3d('+(offsetX)+'px, '+(offsetY)+'px, 0px)';
}

/* When the close is clicked */
function onCloseClick() {
  // remove the open class so the page content animates out
  openContent.className = openContent.className.replace(' open', '');
  // animate the cover back to the original position card and size
  animateCoverBack(currentCard);
  // animate in other cards
  animateOtherCards(currentCard, false);
}

function animateOtherCards(card, out) {
  var delay = 100;
  for (var i = 0; i < nCards; i++) {
    // animate cards on a stagger, 1 each 100ms
    if (cards[i] === card) continue;
    if (out) animateOutCard(cards[i], delay);
    else animateInCard(cards[i], delay);
    delay += 100;
  }
}

// animations on individual cards (by adding/removing card names)
function animateOutCard(card, delay) {
  setTimeout(function() {
    card.className += ' out';
   }, delay);
}

function animateInCard(card, delay) {
  setTimeout(function() {
    card.className = card.className.replace(' out', '');
  }, delay);
}

// this function searches up the DOM tree until it reaches the card element that has been clicked
function getCardElement(el) {
  if (el.className.indexOf('card-click') > -1) return el;
  else return getCardElement(el.parentElement);
}

// resize function - records the window width and height
function resize() {
  if (pageIsOpen) {
    // update position of cover
    var cardPosition = currentCard.getBoundingClientRect();
    setCoverPosition(cardPosition);
    scaleCoverToFillWindow(cardPosition);
  }
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
}