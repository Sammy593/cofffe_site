const checkpoint = 150;
const checkpoint2 = 1000;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll <= checkpoint) {
    document.querySelector("#hr_1").style.width = 10 + '%'
  } else {
    document.querySelector("#hr_1").style.width = 90 + '%'
    document.querySelector("#hr_1").style.transition = 'all 2s'
  }

  if(currentScroll <= checkpoint2){
    document.querySelector("#hr_2").style.width = 10 + '%'
  }else{
    document.querySelector("#hr_2").style.width = 90 + '%'
  document.querySelector("#hr_2").style.transition = 'all 2s'
  }
  
});