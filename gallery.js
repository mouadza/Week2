function upDate(previewPic) {
    var preview = document.getElementById("image");
    var Image = previewPic.src;
    var Text = previewPic.alt;
    preview.style.backgroundImage = "url(" + Image + ")";
    preview.innerHTML = Text;
  }
  
  function unDo() {
    var preview = document.getElementById("image");
    preview.style.backgroundImage = "url('')";
    preview.innerHTML = "Hover over an image below to display here.";
  }
  
