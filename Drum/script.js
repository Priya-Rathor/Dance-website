document.addEventListener("DOMContentLoaded", function() {
  // Function to play a sound
  function playSound(audioElement, button) {
      audioElement.currentTime = 0; // Rewind to the start
      audioElement.play();
      button.classList.add('active'); // Add 'active' class to the button
      setTimeout(function() {
          button.classList.remove('active'); // Remove 'active' class after a short delay
      }, 300);
  }

  
  // Get all button and sound elements
  var kickButton = document.getElementById("kick-button");
  var kickSound = document.getElementById("kick-sound");

  var snareButton = document.getElementById("snare-button");
  var snareSound = document.getElementById("snare-sound");

  var tomButton = document.getElementById("tom-button");
  var tomSound = document.getElementById("tom-sound");

  var hihatButton = document.getElementById("hihat-button");
  var hihatSound = document.getElementById("hihat-sound");

  var rideButton = document.getElementById("ride-button");
  var rideSound = document.getElementById("ride-sound");

  var boomButton = document.getElementById("boom-button");
  var boomSound = document.getElementById("boom-sound");

  var clapButton = document.getElementById("clap-button");
  var clapSound = document.getElementById("clap-sound");

  var openhatButton = document.getElementById("openhat-button");
  var openhatSound = document.getElementById("openhat-sound");

  var tinkButton = document.getElementById("tink-button");
  var tinkSound = document.getElementById("tink-sound");

  // Function to handle hover effect
  function handleHover(button) {
      button.classList.add('hovered');
      button.addEventListener('transitionend', function() {
          button.classList.remove('hovered');
      }, { once: true });
  }

  // Add click event listeners to each button
  kickButton.addEventListener("click", function() {
      playSound(kickSound, kickButton);
      handleHover(kickButton); // Add hover effect
  });

  snareButton.addEventListener("click", function() {
      playSound(snareSound, snareButton);
      handleHover(snareButton); // Add hover effect
  });

  tomButton.addEventListener("click", function() {
      playSound(tomSound, tomButton);
      handleHover(tomButton); // Add hover effect
  });

  hihatButton.addEventListener("click", function() {
      playSound(hihatSound, hihatButton);
      handleHover(hihatButton); // Add hover effect
  });

  rideButton.addEventListener("click", function() {
      playSound(rideSound, rideButton);
      handleHover(rideButton); // Add hover effect
  });

  boomButton.addEventListener("click", function() {
      playSound(boomSound, boomButton);
      handleHover(boomButton); // Add hover effect
  });

  clapButton.addEventListener("click", function() {
      playSound(clapSound, clapButton);
      handleHover(clapButton); // Add hover effect
  });

  openhatButton.addEventListener("click", function() {
      playSound(openhatSound, openhatButton);
      handleHover(openhatButton); // Add hover effect
  });

  tinkButton.addEventListener("click", function() {
      playSound(tinkSound, tinkButton);
      handleHover(tinkButton); // Add hover effect
  });

  // Add event listener for keydown event
  document.addEventListener("keydown", function(event) {
      switch (event.key.toLowerCase()) {
          case 'a':
              playSound(kickSound, kickButton);
              handleHover(kickButton); // Add hover effect
              break;
          case 's':
              playSound(snareSound, snareButton);
              handleHover(snareButton); // Add hover effect
              break;
          case 'd':
              playSound(tomSound, tomButton);
              handleHover(tomButton); // Add hover effect
              break;
          case 'f':
              playSound(hihatSound, hihatButton);
              handleHover(hihatButton); // Add hover effect
              break;
          case 'g':
              playSound(rideSound, rideButton);
              handleHover(rideButton); // Add hover effect
              break;
          case 'h':
              playSound(boomSound, boomButton);
              handleHover(boomButton); // Add hover effect
              break;
          case 'j':
              playSound(clapSound, clapButton);
              handleHover(clapButton); // Add hover effect
              break;
          case 'k':
              playSound(openhatSound, openhatButton);
              handleHover(openhatButton); // Add hover effect
              break;
          case 'l':
              playSound(tinkSound, tinkButton);
              handleHover(tinkButton); // Add hover effect
              break;
      }
  });
});
