if(!window.location.pathname.includes("/product.html")) {
  console.log('pathname != product');
  window.onload = () => {
    let imgs = [...document.querySelectorAll(".product-img-div")];

    imgs.forEach( img => {
      let backgroundImg = window.getComputedStyle(img).backgroundImage;
      img.addEventListener("click", function() {
        sessionStorage.setItem("url", backgroundImg)
      });
    });
  } 
} else {
  window.onload = () => {
    let imgContainer = document.querySelector(".product-img-div"),
        img = sessionStorage.getItem("url") || "url('../images/rings.jpg')";
    console.log(img);
    imgContainer.style.backgroundImage = img;
    img.includes('rings') ? imgContainer.style.backgroundSize = 'cover' : null
  }
}
