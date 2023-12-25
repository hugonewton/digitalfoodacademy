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

