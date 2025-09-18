const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let count = setInterval(blurring, 30)

function blurring() {
  load++
  if(load > 99){
    clearInterval(count)
  }
  loadText.innerHTML = `${load}%`
  loadText.style.opacity = scale(load, 100, 0, 0, 1)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
