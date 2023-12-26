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

 // Add event listeners to all buttons
 buttons.forEach(function (button) {
     button.addEventListener('click', function () {
         updatePrice(button);
     });
 });

 function updatePrice(button) {
     // Remove "active" class from all buttons
     buttons.forEach(function (btn) {
         btn.classList.remove('active');
     });

     // Add "active" class to the clicked button
     button.classList.add('active');

     // Get the price from the data attribute
     var newPrice = button.getAttribute('data-price');

     // Update the price in the paragraph
     var priceParagraph = document.querySelector('.pricing-price-p');
     priceParagraph.textContent = newPrice;
 }