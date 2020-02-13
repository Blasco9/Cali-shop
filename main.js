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
        sessionStorage.setItem("url", backgroundImg)
      });
    });
  } 
} else {
  window.onload = () => {
    let img = document.querySelector(".product-img-div");
    img.style.backgroundImage = sessionStorage.getItem("url") || "https://calisthenicseastafrica.org/wp-content/uploads/2019/06/1.jpeg";
  }
}
