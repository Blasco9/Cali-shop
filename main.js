if(window.location.pathname != "/product.html") {
  window.onload = () => {
    let imgs = [...document.querySelectorAll(".product-img-div")],
        path = window.location.pathname;

    if(path == "/" || path == "/index.html") {
      imgs.push(document.querySelector(".hot-ads-img-div"))
    }

    imgs.forEach( img => {
      let backgroundImg = window.getComputedStyle(img).backgroundImage;
      img.addEventListener("click", function() {
        localStorage.setItem("url", backgroundImg)
      });
    });
  } 
} else {
  window.onload = () => {
    let img = document.querySelector(".product-img-div");
    img.style.backgroundImage = localStorage.getItem("url");
  }
}
