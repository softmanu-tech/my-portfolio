let menus = document.querrySelector("nav");
let menuBtn = document.querySelector(".menu-btn");
let CloseBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click",function(){
    menus.classlist.add("active");
})
CloseBtn.addEventListener("click",function(){
    menus.classlist.remove("active");
})

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    if(this.document.documentElement.scrollTop>20){
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
})
function download() {
    // Get the file URLresponsive
    const fileUrl = './img/CV.pdf';
  
    // Create a link element
    const link = document.createElement('a');
  
    // Set the link's href and download attributes
    link.href = fileUrl;
    link.download = 'filename.pdf';
  
    // Simulate a click on the link to trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  