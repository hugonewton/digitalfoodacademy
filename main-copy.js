    // Get all the buttons
    var buttons = document.querySelectorAll('.pricing-btn');
    var startNowBtn = document.getElementById('start-now-btn');
    var promoCodeSubmitBtn = document.getElementById('promo-code-submit-btn');

    // Promo codes and their corresponding prices
    var promoCodePrices = {
      'CODE1': '900,00 €',
      'CODE2': '750,00 €',
      // Add more promo codes and prices as needed
    };


      // Add event listeners to all buttons
      buttons.forEach(function (button) {
          button.addEventListener('click', function () {
            updatePriceAndLink(button);
          });
      });

    // Add event listener to promo code submit button
     promoCodeSubmitBtn.addEventListener('click', function (event) {
         event.preventDefault(); // Prevent the form from submitting (since it's a link)
         applyPromoCode();
     });

 function updatePriceAndLink(button) {
     // Remove "active" class from all buttons
     buttons.forEach(function (btn) {
         btn.classList.remove('active');
     });

     // Add "active" class to the clicked button
     button.classList.add('active');

     // Get the price from the data attribute
     var newPrice = button.getAttribute('data-price');
     var newUrl = button.getAttribute('data-url');


     // Update the price in the paragraph
     var priceParagraph = document.querySelector('.pricing-price-p');
     priceParagraph.textContent = newPrice;

     // Update the link in the "start-now-btn"
     startNowBtn.setAttribute('href', newUrl);
 }



 function applyPromoCode() {
  // Get the promo code input value
  var promoCodeInput = document.getElementById('promo-code-input');
  var promoCode = promoCodeInput.value;

  // Look up the price for the entered promo code
  var promoCodePrice = promoCodePrices[promoCode];

  // Display a success or failure message
  var promoCodeFormFail = document.getElementById('promo-code-fail-message');
  var promoCodeAuLieuDe = document.getElementById('price-au-lieu-de');

  if (promoCodePrice) {
      // Promo code is valid, update the price directly in the paragraph
      var priceParagraph = document.querySelector('.pricing-price-p');
      if (priceParagraph) {
          priceParagraph.textContent = promoCodePrice;
      }

      promoCodeFormFail.style.display = 'none'; // Hide the error message
      promoCodeAuLieuDe.style.display = 'block' // Show the "Au lieu de"

  } else {
      // Promo code is invalid, display error message
      promoCodeFormFail.style.display = 'block'; // Show the error message
      promoCodeAuLieuDe.style.display = 'none' // Hide the "Au lieu de"
  }
}



var player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'BG3Dvceq1pA',
      playerVars: {
        'autoplay': 0,
        'controls': 1,
        'rel': 0,
        'showinfo': 0
      }
    });

    // Add click event listener to the play button
    var playButton = document.querySelector('.custom-video-thumb-wrappper');
    playButton.addEventListener('click', function() {
      playVideo();
      playButton.style.display = 'none';
    });
  }

  function playVideo() {
    if (player) {
      player.playVideo();
    }
  }





  document.addEventListener("DOMContentLoaded", function () {
    var collectionItems = document.querySelectorAll('.inspi-collection-item');

    if (collectionItems.length > 0) {
      collectionItems.forEach(function (item, index) {
        var numberP = item.querySelector('.number-p');
        if (numberP) {
          numberP.textContent = index + 1;
        }
      });
    }
  });
