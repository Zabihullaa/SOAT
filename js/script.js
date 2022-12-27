const hour = document.querySelector(".h"),
  min = document.querySelector(".m"),
  sec = document.querySelector(".s"),
  hourNumber = document.querySelector(".hours"),
  minNumber = document.querySelector(".minutes"),
  tabsItem = document.querySelectorAll('.tabsItem'),
  tabsContentItem = document.querySelectorAll('.tabsContentItem')


function clock() {
  const time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();

  hour.style.transform = `rotate(${hours * 30}deg)`
  min.style.transform = `rotate(${minutes * 6}deg)`
  sec.style.transform = `rotate(${seconds * 6}deg)`

  hourNumber.innerHTML = hours < 10 ? '0' + hours : hours
  minNumber.innerHTML = minutes < 10 ? '0' + minutes : minutes

  setTimeout(() => {
    clock();
  }, 1000);
}
clock();


tabsItem.forEach((el, index) => {
  el.addEventListener('click', function () {
    tabsItem.forEach((el, i) => {
      el.classList.remove('active')
      tabsContentItem[i].classList.remove('active')
    })
    this.classList.add('active')
    tabsContentItem[index].classList.add('active')

  })
})











// ----------------secundomer-------------------

const watchBtn = document.querySelector('.stopwatch__btn'),
  secondWatch = document.querySelector('.stopwatch__seconds'),
  minutesWatch = document.querySelector('.stopwatch__minutes'),
  hoursWatch = document.querySelector('.stopwatch__hours'),
  secondInfo = document.querySelector('.tabsLink__span ');

watchBtn.addEventListener('click', function () {
  if (this.innerHTML == 'start') {
    secondInfo.classList.add('active')
    this.innerHTML = 'stop'
    let i = 0
    setTimeout(() => stopWatch(this, i), 1000);
  } else if (this.innerHTML == 'stop') {
    secondInfo.classList.remove('active')
    secondInfo.classList.add('active_clear')
    this.innerHTML = 'clear'
  } else {
    secondInfo.classList.remove('active_clear')
    this.innerHTML = 'start'
    hoursWatch.innerHTML = 0
    minutesWatch.innerHTML = 0
    secondWatch.innerHTML = 0
  }
})

function stopWatch(el, i) {
  if (el.innerHTML == 'stop') {
    if (i == 60) {
      i = 0
      secondWatch.innerHTML = i
      if (minutesWatch.innerHTML == 59) {
        minutesWatch.innerHTML = 0
        hoursWatch.innerHTML++
      } else {
        minutesWatch.innerHTML++
      }
    } else {
      secondWatch.innerHTML = i
      i++
    }
    setTimeout(() => {
      stopWatch(el, i)
    }, 1000);
  }
}