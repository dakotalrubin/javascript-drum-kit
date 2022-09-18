// This function plays an audio element for an associated "keydown" event.
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // Exits function if key outside expected range is pressed.
    if (!audio) {
        return;
    }

    audio.currentTime = 0; // Plays sound clip again immediately if re-pressed.
    audio.play();
    // ".toggle" instead of ".add" fixes permanent transition state if holding key
    key.classList.toggle("playing");
}

function removeTransition(e) {
    // Skips all non-transform event properties.
    if (e.propertyName !== "transform") {
        return;
    }

    // "this" operates on key.addEventListener("transitionend", removeTransition));
    this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".key"); // Creates Nodelist of all keys.
keys.forEach(key => key.addEventListener("transitionend", removeTransition));