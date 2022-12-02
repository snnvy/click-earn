let timesClicked = 0;

 function btnClick(){
	if (timesClicked < 9999){
		timesClicked ++;
	} else{
		window.location.reload()
	}
  document.getElementById('timesClicked').innerHTML = timesClicked;	
  return true 
}
setInterval(() => {btnClick();}, 5000);


const infos = document.querySelectorAll("[data-info]");

infos.forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
    event.preventDefault();
    const info = document.getElementById(trigger.dataset.info);
    info.classList.add("open");
    const exits = info.querySelectorAll(".info-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();
        info.classList.remove("open");
      });
    });
  });
});
