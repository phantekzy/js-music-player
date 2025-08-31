// ===============================
// Variables
// ===============================
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");


// ===============================
// Song Metadata (set progress bar limits when audio loads)
// ===============================
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};


// ===============================
// Functions
// ===============================

// Toggle play / pause
function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}


// ===============================
// Progress Bar (update while playing)
// ===============================
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500); // update every half second
}


// ===============================
// User Input (seek in song)
// ===============================
progress.oninput = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
};


// ===============================
// Events
// ===============================

// Click play/pause button
ctrlIcon.addEventListener("click", () => {
    playPause();
});
