function loadFile() {
    document.querySelector("#avatar-preview").src = `url(${URL.createObjectURL(event.target.files[0)})`
}
