  // YouTube Video ID
  var videoId = 'SO8lBVWF2Y8';

  // YouTube Player Object
  var player;

  // Function to initialize the YouTube player
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: videoId,
      playerVars: {
        'autoplay': 0, // Set to 1 if you want autoplay
        'controls': 1,
        'showinfo': 0,
        'rel': 0,
        'modestbranding': 1
      },
      events: {
        'onReady': onPlayerReady
      }
    });
  }

  // Function called when the YouTube player is ready
  function onPlayerReady(event) {
    // Add a click event listener to the play button
    document.getElementById('play-button').addEventListener('click', function () {
      // Hide the poster and play button
      document.getElementById('poster').style.display = 'none';
      document.getElementById('play-button').style.display = 'none';

      // Play the video
      player.playVideo();
    });
  }


 // Get all the buttons
 var buttons = document.querySelectorAll('.pricing-btn');
 var startNowBtn = document.getElementById('start-now-btn');
 var promoCodeSubmitBtn = document.getElementById('promo-code-submit-btn');


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

  // Perform actions with the promo code, e.g., validate and apply discounts
  

  // Display a success or failure message
  var promoCodeFormDone = document.querySelector('.w-form-done');
  var promoCodeFormFail = document.querySelector('.w-form-fail');

  if (promoCode === 'EXAMPLE123') {
      promoCodeFormDone.style.display = 'block';
      promoCodeFormFail.style.display = 'none';
  } else {
      promoCodeFormDone.style.display = 'none';
      promoCodeFormFail.style.display = 'block';
  }
}