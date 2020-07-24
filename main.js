if(!window.location.pathname.includes("/product.html")) {
  console.log('pathname != product');
  window.onload = () => {
    let imgs = [...document.querySelectorAll(".product-img-div")],
        path = window.location.pathname;

    if(path == "/" || path == "/index.html") {
      console.log('path == / or /index.html');
      imgs.push(document.querySelector(".hot-ads-img-div"))
    }

    imgs.forEach( img => {
      let backgroundImg = window.getComputedStyle(img).backgroundImage;
      img.addEventListener("click", function() {
        sessionStorage.setItem("url", backgroundImg)
      });
    });
  } 
} else {
  console.log("something went wrong");
  window.onload = () => {
    let imgContainer = document.querySelector(".product-img-div"),
        img = sessionStorage.getItem("url");
    console.log("loaded page");
    console.log(img);
    imgContainer.style.backgroundImage = img;
    img.includes('rings') ? imgContainer.style.backgroundSize = 'cover' : null
  }
}
