const textInput = document.getElementById("textInput");
const imageInput = document.getElementById("imageInput");
const videoInput = document.getElementById("videoInput");
const addButton = document.getElementById("addButton");
const output = document.getElementById("output");

addButton.addEventListener("click", function() {
    const text = textInput.value;
    const imageFile = imageInput.files[0];
    const videoFile = videoInput.files[0];

    if (text.trim() !== "") {
        const textParagraph = document.createElement("p");
        textParagraph.textContent = text;
        output.appendChild(textParagraph);
        textInput.value = "";
    }

    if (imageFile) {
        const image = document.createElement("img");
        image.classList.add("uploaded-media");
        image.src = URL.createObjectURL(imageFile);
        output.appendChild(image);
        imageInput.value = "";
    }

    if (videoFile) {
        const video = document.createElement("video");
        video.classList.add("uploaded-media");
        video.src = URL.createObjectURL(videoFile);
        video.controls = true;
        output.appendChild(video);
        videoInput.value = "";
    }
});

// Handle drag-and-drop events for images and videos
output.addEventListener("dragover", function(e) {
    e.preventDefault();
    output.classList.add("dragover");
});

output.addEventListener("dragleave", function() {
    output.classList.remove("dragover");
});

output.addEventListener("drop", function(e) {
    e.preventDefault();
    output.classList.remove("dragover");

    const mediaFile = e.dataTransfer.files[0];
    if (mediaFile) {
        if (mediaFile.type.startsWith("image/")) {
            const image = document.createElement("img");
            image.classList.add("uploaded-media");
            image.src = URL.createObjectURL(mediaFile);
            output.appendChild(image);
        } else if (mediaFile.type.startsWith("video/")) {
            const video = document.createElement("video");
            video.classList.add("uploaded-media");
            video.src = URL.createObjectURL(mediaFile);
            video.controls = true;
            output.appendChild(video);
        }
    }
});
