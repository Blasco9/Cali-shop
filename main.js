if(!window.location.pathname.includes("/product.html")) {
  window.onload = () => {
    let imgs = [...document.querySelectorAll(".product-img-div")],
    mainImg = document.querySelector(".hot-ads-img-div");

    mainImg ? imgs.push(mainImg) : null;

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
        img = sessionStorage.getItem("url");

    imgContainer.style.backgroundImage = img;
    img.includes('rings') ? imgContainer.style.backgroundSize = 'cover' : null
  }
}
