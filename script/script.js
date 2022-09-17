// This function waits for a "keydown" event, checks whether the pressed key
// has an associated audio element, and plays that sound clip if present.
window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) {
        return; // Exits function if key outside expected range is pressed.
    }

    audio.currentTime = 0; // Plays sound clip again immediately if re-pressed.
    audio.play();
});