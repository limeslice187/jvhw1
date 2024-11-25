function upDate(previewPic) {
    // Update the background image
    document.getElementById("image").style.backgroundImage = `url('${previewPic.src}')`;

    // Update the text
    document.getElementById("image").innerHTML = previewPic.alt;
}

function undo() {
    // Reset the background image
    document.getElementById("image").style.backgroundImage = "none";

    // Reset the text
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}