// Step 1
// In this workshop you will create a music player app capable of
// playing, pausing, and skipping songs from a playlist.

// The HTML and CSS of this project have been provided for you,
// so you can focus on the JavaScript.

// Start by accessing the #playlist-songs, #play, and #pause elements
// and assign them to the variables playlistSongs, playButton and
// pauseButton, respectively.

// Step 2
// Access the #next and #previous elements from the HTML file.

// Assign them to variables named nextButton, and previousButton,
// respectively.

const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("nest");
const previousButton = document.getElementById("previous");

// Step 3
// Next, create an ampty array named allSongs to store all the songs.

// Step 4
// Inside the allSongs array, create an object with the following properties and values:

// Example Code
// id: 0,
// title: "Scratching The Surface",
// artist: "Quincy Larson",
// duration: "4:25",
// src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",

const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
  },
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
  },
];

// Step 7
// The rest of the songs has been added to the allSongs array for you.

// In the previous lecture video, you learned about the Web Audio API
// and how to use it to play songs. All modern browsers support the
// Web Audio API, which lets you generate and process audio in web
// applications.

// Create a variable named audio and set it equal to new Audio(). This
// will create a new HTML5 audio element.

const audio = new Audio();

// Step 8
// Your music player should keep track of the songs, the current song
// playing, and the time of the current song. To do this, you will
// need to create an object to store this information.

// Start by declaring a new variable called userData and assign it an
// empty object.

// Step 9
// In your userData object, create a songs property and set its value to
// the allSongs array.

// Then, to handle the current song's information and track its playback
// time, create a currentSong and songCurrentTime properties. Set the
// values to null and 0, respectively.

const userData = {
  songs: allSongs,
  currentSong: null,
  songCurrentTime: 0,
};

// Step 10
// It's time to begin implementing the functionality for playing the
// displayed songs.

// Define a playSong function that takes an single parameter which will
// represent the unique identifier of the song you want to play.

// Step 11
// The find() method retrieves the first element within an array that
// fulfills the conditions specified in the provided callback function.
// If no element satisfies the condition, the method returns undefined.

// In the example below, the find() method is used to find the first
// number greater than 25:

// Example Code
// const numbers = [10, 20, 30, 40, 50];

// Find the first number greater than 25
// const foundNumber = numbers.find((number) => number > 25);
// console.log(foundNumber); // Output: 30
// Within your playSong function, use the find() method on the userData.songs
// array to search for a song which has an id strictly equal to the id passed
// into the playSong function. Assign the find call to a variable named song.

// Step 12
// Still inside the playSong function, set the audio.src property equal to
// song.src. This tells the audio element where to find the audio data for
// the selected song.

// Also, set the audio.title property equal to song.title. This tells the audio
// element what to display as the title of the song.

// Step 14
// Add an else block to handle the song's current playback time. This
// allows you to resume the current song at the point where it was paused.

// Within the else block, set the currentTime property of the audio
// object to the value stored in userData.songCurrentTime.

// Step 15
// Next, use the classList property and the add() method to add the
// playing class to the playButton element. This will look for the
// class playing in the CSS file and add it to the playButton element.

// Then, set userData.currentSong to song, and to finally play the song,
// use the play() method on the audio variable. play() is a method from
// the web audio API for playing an mp3 file.

function playSong(id) {
  const song = userData.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;
  if (userData.currentSong === null) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData.songCurrentTime;
  }
  userData.currentSong = song;
  playButton.classList.add("playing");
  audio.play();
}

// Step 16
// In previous steps you built out the functionality for playing a
// song. Now you need to add the functionality to the play button.

// Use the addEventListener() method on playButton and pass in a
// "click" event for the first argument. For now, use a callback
// that calls playSong(0) as the second argument.

// Then, test it by clicking the play button.

// Step 17
// Anytime you click the play button, the first song of your playlist
// will always play. To fix this, within the arrow function of the
// event listener, replace playSong(0) with an if statement that checks
// if userData.currentSong is null.

// Inside the if block, call the playSong function with the id of the
// first song in the userData.songs array.

// Step 18
// Add an else block. Inside the else block, call the playSong function
// with the id of the currently playing song as an argument.

// This ensures that the currently playing song will continue to play
// when the play button is clicked.

playButton.addEventListener("click", function () {
  if (userData.currentSong === null) {
    playSong(0);
  } else {
    playSong(userData.currentSong.id);
  }
});

// Step 19
// Now, use the querySelectorAll method to target the .playlist-song
// elements and store them in a variable named songs.

// Then, call the forEach method on songs. Pass in a callback function
// that uses song as the parameter to the method. Leave the curly
// braces empty for now.

// Step 20
// When you click a song of your playlist you want to play that song.
// For that you'll need to add an event listener for the click event
// on each button element which is a child of a song element.

// Complete the callback of your forEach to do that. Inside the
// addEventListener callback, call playSong(n), where n is the song
// id that you can get from the id attribute of song.

// Note that each song has an id attribute of song-n: you'll need to
// get the n part and convert it into a number before passing it to
// playSong().

const songs = document.querySelectorAll(".playlist-song");
songs.forEach((song) => {
  const button = song.querySelector("button");
  button.addEventListener("click", () => {
    const idString = song.id.split("-")[1];
    const id = Number(idString);
    playSong(id);
  });
});

// Step 21
// Now you need to work on pausing the currently playing song.

// Define a pauseSong function that takes no parameters. Within your
// new function, to store the current time of the song when it is
// paused, set the songCurrentTime of the userData object to the
// currentTime of the audio variable.

function pauseSong() {
  userData.songCurrentTime = audio.currentTime;
  // Step 22
  // Use classList and remove() method to remove the playing class from the
  // playButton, since the song will be paused at this point.

  // To finally pause the song, use the pause() method on the audio variable.
  // pause() is a method of the Web Audio API for pausing music files.
  playButton.classList.remove("playing");
  audio.pause();
}

// Step 23
// Now it is time to test out the pause button.

// Add a "click" event listener to the pauseButton element, then pass
// in pauseSong as the second argument of the event listener. This is
// the function the event listener will run.

// Test out your app by first clicking on the play button followed by
// the pause button. You should see that everything is working as
// expected.

// Step 24
// Before you start working on playing the next and previous song, you 
// need to get the index of each song in the songs property of userData. 
// To do that you can use the indexOf() array method, which returns the 
// first index at which a given element can be found in the array, or -1 
// if the element is not present.

// Example Code
// const animals = ["dog", "cat", "horse"];
// animals.indexOf("cat") // 1
// Create a function named getCurrentSongIndex that returns the index at 
// which userData.currentSong can be found in userData.songs and -1 when 
// the current song is null.

function getCurrentSongIndex() {
  return userData.songs.indexOf(userData.currentSong);
}

// Step 25
// Now, create a function named getNextSong. Make it return the song that 
// can be found at getCurrentSongIndex() plus one in userData.songs, or 
// undefined if the current song is the last one in the playlist.

function getNextSong() {
  let song = userData.songs.getCurrentSongIndex();
  return song;
}

pauseButton.addEventListener("click", pauseSong);
