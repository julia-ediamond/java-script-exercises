function getImage() {
    // //Getting the imge url value
    // let imageURL = document.getElementById("image-url").value;
    // console.log(imageURL);
    // //create image element
    // let imageElement = document.createElement("img");
    // //get the div with the id  mem-image-wrapper
    // let imageWrapper = getElementById("meme-image-wrapper");
    // //put the image inside it
    // imageWrapper.appendChild(imageElement)
    let imageURL = document.getElementById('image-url').value;
    let imageBox = document.createElement('img');
    imageBox.id = 'meme-image';
    imageBox.src = imageURL;
    let wrapper = document.getElementById('meme-image-wrapper');
    wrapper.appendChild(imageBox);
    document.getElementById("meme-builder").style.display = "block";
}