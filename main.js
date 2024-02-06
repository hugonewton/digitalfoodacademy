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

// Add event listeners to buttons if they exist
if (buttons.length > 0) {
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      updatePriceAndLink(button);
    });
  });
}

// Add event listener to promo code submit button if it exists
if (promoCodeSubmitBtn) {
  promoCodeSubmitBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting (since it's a link)
    applyPromoCode();
  });
}

function updatePriceAndLink(button) {
  // Remove "active" class from all buttons
  buttons.forEach(function (btn) {
    btn.classList.remove('active');
  });

  // Add "active" class to the clicked button
  button.classList.add('active');

  // Get the price, utl, ht price from the data attribute
  var newPrice = button.getAttribute('data-price');
  var newUrl = button.getAttribute('data-url');
  var newHt = button.getAttribute('data-ht');

  // Update the price in the paragraph
  var priceParagraph = document.querySelector('.pricing-price-p');
  if (priceParagraph) {
    priceParagraph.textContent = newPrice;
  }

  // Update the ht-price in the paragraph
  var htText = document.getElementById('ht-pricing');
  if (htText) {
    htText.textContent = newHt;
  }


  // Update the link in the "start-now-btn"
  // if (startNowBtn) {
  //   startNowBtn.setAttribute('href', newUrl);
  // }
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
      htText.style.display = 'none'; // Hide the HT price
      promoCodeAuLieuDe.style.display = 'block' // Show the "Au lieu de"

  } else {
      // Promo code is invalid, display error message
      promoCodeFormFail.style.display = 'block'; // Show the error message
      htText.style.display = 'block'; // Show the HT price
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



// Add placeholders to input fields that have the data-placeholder attribute
$(document).ready(function () {
  $('input[data-placeholder]').each(function (index) {
    $(this).attr("placeholder", $(this).attr("data-placeholder"));
  });
});



// Wait for the document to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Set a timeout to wait for two seconds
  setTimeout(function () {
    // Get the elements with the necessary IDs
    var totalPriceElement = document.getElementById("total-price");
    var taxAmountElement = document.getElementById("tax-amount");

    // Check if the elements exist
    if (totalPriceElement && taxAmountElement) {
      // Extract the total price value
      var totalPriceText = totalPriceElement.textContent.replace(/[\u00A0€ ,]/g, ''); // Remove non-numeric characters and spaces
      console.log("Total Price Text:", totalPriceText); // Debugging: Log the extracted total price text

      // Remove the space between "1" and "2"
      totalPriceText = totalPriceText.replace(/\s/g, '');

      // Remove the last two zeros
      totalPriceText = totalPriceText.slice(0, -2);

      var totalPrice = parseFloat(totalPriceText);

      console.log("Parsed Total Price:", totalPrice); // Debugging: Log the parsed total price

      // Check if totalPrice is a valid number
      if (!isNaN(totalPrice)) {
        // Calculate the tax amount (assuming 20% tax)
        var taxAmount = totalPrice / 120 * 20;

        // Update the content of the tax amount element with space and € symbol
        taxAmountElement.textContent = taxAmount.toFixed(2) + ' €'; // Adjust decimal places as needed
      } else {
        console.error("Failed to parse total price as a number."); // Debugging: Log an error if parsing fails
      }
    }
  }, 10000); // 2000 milliseconds = 2 seconds
});



