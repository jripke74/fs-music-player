# fs-music-player

In this workshop, you'll code a basic MP3 player using HTML, CSS, and JavaScript.

The project covers fundamental concepts such as handling audio playback, managing a playlist, implementing play, pause, next, and previous functionalities and dynamically update your user interface based on the current song.

Step 1
In this workshop you will create a music player app capable of playing, pausing, and skipping songs from a playlist.

The HTML and CSS of this project have been provided for you, so you can focus on the JavaScript.

Start by accessing the #playlist-songs, #play, and #pause elements and assign them to the variables playlistSongs, playButton and pauseButton, respectively.

Step 2
Access the #next and #previous elements from the HTML file.

Assign them to variables named nextButton, and previousButton, respectively.

Step 3
Next, create an empty array named allSongs to store all the songs.

Step 4
Inside the allSongs array, create an object with the following properties and values:

Example Code
id: 0,
title: "Scratching The Surface",
artist: "Quincy Larson",
duration: "4:25",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",

Step 5
Add a second object with the following keys and values:

Example Code
id: 1,
title: "Can't Stay Down",
artist: "Quincy Larson",
duration: "4:15",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",

Step 6
Add a third object with the following properties and values:

Example Code
id: 2,
title: "Still Learning",
artist: "Quincy Larson",
duration: "3:51",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",

Step 7
The rest of the songs has been added to the allSongs array for you.

In the previous lecture video, you learned about the Web Audio API and how to use it to play songs. All modern browsers support the Web Audio API, which lets you generate and process audio in web applications.

Create a variable named audio and set it equal to new Audio(). This will create a new HTML5 audio element.

Step 8
Your music player should keep track of the songs, the current song playing, and the time of the current song. To do this, you will need to create an object to store this information.

Start by declaring a new variable called userData and assign it an empty object.

Step 9
In your userData object, create a songs property and set its value to the allSongs array.

Then, to handle the current song's information and track its playback time, create a currentSong and songCurrentTime properties. Set the values to null and 0, respectively.

Step 10
It's time to begin implementing the functionality for playing the displayed songs.

Define a playSong function that takes an single parameter which will represent the unique identifier of the song you want to play.

Step 11
The find() method retrieves the first element within an array that fulfills the conditions specified in the provided callback function. If no element satisfies the condition, the method returns undefined.

In the example below, the find() method is used to find the first number greater than 25:

Example Code
const numbers = [10, 20, 30, 40, 50];

// Find the first number greater than 25
const foundNumber = numbers.find((number) => number > 25);
console.log(foundNumber); // Output: 30
Within your playSong function, use the find() method on the userData.songs array to search for a song which has an id strictly equal to the id passed into the playSong function. Assign the find call to a variable named song.

Step 12
Still inside the playSong function, set the audio.src property equal to song.src. This tells the audio element where to find the audio data for the selected song.

Also, set the audio.title property equal to song.title. This tells the audio element what to display as the title of the song.

Step 13
Before playing the song, you need to make sure it starts from the beginning. This can be achieved by the use of the currentTime property on the audio object.

Add an if statement to check if no current song is playing by verifying that userData.currentSong is falsy. Inside if block, set the currentTime property of the audio object to 0.

Step 14
Add an else block to handle the song's current playback time. This allows you to resume the current song at the point where it was paused.

Within the else block, set the currentTime property of the audio object to the value stored in userData.songCurrentTime.

Step 15
Next, use the classList property and the add() method to add the playing class to the playButton element. This will look for the class playing in the CSS file and add it to the playButton element.

Then, set userData.currentSong to song, and to finally play the song, use the play() method on the audio variable. play() is a method from the web audio API for playing an mp3 file.

Step 16
In previous steps you built out the functionality for playing a song. Now you need to add the functionality to the play button.

Use the addEventListener() method on playButton and pass in a "click" event for the first argument. For now, use a callback that calls playSong(0) as the second argument.

Then, test it by clicking the play button.

Step 17
Anytime you click the play button, the first song of your playlist will always play. To fix this, within the arrow function of the event listener, replace playSong(0) with an if statement that checks if userData.currentSong is null.

Inside the if block, call the playSong function with the id of the first song in the userData.songs array.

Step 18
Add an else block. Inside the else block, call the playSong function with the id of the currently playing song as an argument.

This ensures that the currently playing song will continue to play when the play button is clicked.

Step 19
Now, use the querySelectorAll method to target the .playlist-song elements and store them in a variable named songs.

Then, call the forEach method on songs. Pass in a callback function that uses song as the parameter to the method. Leave the curly braces empty for now.

Step 20
When you click a song of your playlist you want to play that song. For that you'll need to add an event listener for the click event on each button element which is a child of a song element.

Complete the callback of your forEach to do that. Inside the addEventListener callback, call playSong(n), where n is the song id that you can get from the id attribute of song.

Note that each song has an id attribute of song-n: you'll need to get the n part and convert it into a number before passing it to playSong().

Step 21
Now you need to work on pausing the currently playing song.

Define a pauseSong function that takes no parameters. Within your new function, to store the current time of the song when it is paused, set the songCurrentTime of the userData object to the currentTime of the audio variable.

Step 22
Use classList and remove() method to remove the playing class from the playButton, since the song will be paused at this point.

To finally pause the song, use the pause() method on the audio variable. pause() is a method of the Web Audio API for pausing music files.

Step 23
Now it is time to test out the pause button.

Add a "click" event listener to the pauseButton element, then pass in pauseSong as the second argument of the event listener. This is the function the event listener will run.

Test out your app by first clicking on the play button followed by the pause button. You should see that everything is working as expected.

Step 24
Before you start working on playing the next and previous song, you need to get the index of each song in the songs property of userData. To do that you can use the indexOf() array method, which returns the first index at which a given element can be found in the array, or -1 if the element is not present.

Example Code
const animals = ["dog", "cat", "horse"];
animals.indexOf("cat") // 1
Create a function named getCurrentSongIndex that returns the index at which userData.currentSong can be found in userData.songs and -1 when the current song is null.

Step 25
Now, create a function named getNextSong. Make it return the song that can be found at getCurrentSongIndex() plus one in userData.songs, or undefined if the current song is the last one in the playlist.

Step 26
Now that you know how to find the next song to play, create a function named playNextSong. Inside the playNextSong function, create an if statement to check if the currentSong of userData is strictly equal to null. This will check if there's no current song playing in the userData object.

If the condition is true, call the playSong function with the id of the first song in the userData.songs array as an argument.

Step 27
If userData.currentSong is not null you need to find the next song to play. Remember that you can use getNextSong for that.

Complete your playNextSong function so that it plays the next song in the playlist. If the current song is the last one, set userData.currentSong to null, userData.songCurrentTime to zero and call the pauseSong function.

Step 28
Now it is time to test out the playNextSong function.

Add a "click" event listener to the nextButton element, then pass in playNextSong as the second argument of your event listener. This is the function the event listener will run.

Test out your app by first clicking on the play button followed by the next button. You should see that everything is working as expected.

Step 29
Now, create a function named getPreviousSong. Make it return the song that can be found at getCurrentSongIndex() minus one in userData.songs, or undefined if the current song is the first one in the playlist.

Step 30
Create a function named playPreviousSong. Inside your new function, use the value returned by the getPreviousSong function to find the song to play. When getPreviousSong() is undefined, play the first song in your playlist. Otherwise, play the song before the current song playing.

Step 31
Add a "click" event listener to the previousButton element, then pass in playPreviousSong as the second argument.

Step 32
If you play a bit with your player you'll notice a few bugs. First, when you play a song, pause it and then press either the previous button or next button, the song won't start from the beginning.

To start fixing that, add second parameter named start to your playSong function. Give it the default value of true.

Step 33
Now, use the OR operator to add the start parameter as a second condition to the if statement after userData.currentSong === null.

Step 34
Finally, pass false as the second argument to the playSong(userData.currentSong.id) function call. Then, test that everything works as expected by playing a song, pausing it and then pressing either the previous button or the next button.

Step 35
If you press the previous button when no song is playing, the first song will play. To fix this, add an if statement at the beginning of the playPreviousSong function. Check if the current song is null and stop the function execution with a return statement.

Step 36
If you check closely, you'd see the currently playing song is not highlighted in the playlist, so you don't really know which song is playing. You can fix this by creating a function to highlight any song that is being played.

Create a function named highlightCurrentSong. Inside the function, check that a .playlist-song element with aria-current="true" exists. If so, use the removeAttribute method to remove the aria-current attribute from it.

Step 37
You need to get the id of the currently playing song. For this, you can use userData.currentSong?.id.

Use getElementById() to select the currently playing song: pass a template literal to prefix the id with song-. Assign it to a variable named songToHighlight.

Step 38
Now, you need to add the aria-current attribute to the currently playing song.

Check if songToHighlight exists. If so, use the setAttribute method on songToHighlight and pass in "aria-current" and "true" as the first and second arguments.

Step 39
Inside the playSong function, call the highlightCurrentSong function.

After that, play around with the control buttons to see how the highlightCurrentSong function works.

Step 40
Next, you need to display the current song title and artist in the player display.

As a first step, access the #player-song-title and #player-song-artist elements, responsible for displaying the song title and artist, and store them into the variables playingSong and songArtist, respectively.

Step 41
Create a function named setPlayerDisplay. Inside the function, set the textContent of playingSong to the current song's title, if defined. Otherwise, set it to an empty string.

Below that, set the textContent of songArtist to the current song's artist, if defined. Otherwise, set it to empty string.

Step 42
To ensure the player's display updates whenever a new song begins playing, call the setPlayerDisplay() function within the playSong() function.

Now you should see the song title and the artist show up in the display

Step 43
To make the application more accessible, it is important that the play button describes the current song or the first song in the playlist.

Create a function named setPlayButtonAccessibleText. Inside the function, set the aria-label attribute of the play button to Play followed by a space and the current song's title. If userData.currentSong is null, set it to Play.

Step 44
Now, call the setPlayButtonAccessibleText function inside the playSong function.

Step 45
Inside the playNextSong function, call the setPlayerDisplay, highlightCurrentSong, and setPlayButtonAccessibleText functions to correctly update the player when the playlist ends.

Step 46
Notice that the album art in the HTML and songs in the userData.songs array have changed. We've swapped out the original songs for shorter ones that you can use to test your app.

All the core functionalities are now in place. The only issue now is that the next song does not automatically play when the currently playing song ends.

To fix that, you can set up an event listener which will detect when the currently playing song ends. The "ended" event listener is appropriate for this. It is fired when the playback of a media reaches the end.

Add an event listener to the audio element which listens for the "ended" event and pass in a reference to the playNextSong function. With that the music player project is complete!