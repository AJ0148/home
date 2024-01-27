var elems = document.getElementsByClassName("testb3");
for (var i = 0; i < elems.length; i++) {
  elems[i].onclick = function() {
    var color = window.getComputedStyle(this, null)
                .getPropertyValue("background-color");
    this.style.backgroundColor = color === "rgb(255, 255, 0)" 
                                 ? "rgb(255, 165, 0)" : "rgb(255, 255, 0)";
  };
};