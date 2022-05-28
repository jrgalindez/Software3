
function changeClass(previous, next) {
    if(previous != next) {
      var htmlElement = document.querySelector('html')
      htmlElement.classList.remove(classes[previous]);
      htmlElement.classList.add(classes[next]);
    }
}