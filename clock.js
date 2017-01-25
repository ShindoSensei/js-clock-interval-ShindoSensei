document.addEventListener('DOMContentLoaded', function () {
  function clockWork () {
    // Defining each html element
    var hour = document.getElementById('hour')
    var minute = document.getElementById('minute')
    var second = document.getElementById('second')

    // Functions to convert sec,min,hr to degrees!
    function secondRotation (sec) {
      return (sec / 60) * 360
    }

    function minuteRotation (min) {
      return (min / 60) * 360
    }

    function hourRotation (hr) {
      return ((hr / 12) * 360) + (minDegree / 6) * 0.5
    // For every 1 min,hour hand moves 0.5deg. (minDegree/6) gets minutes now.
    // Multiply no. of minutes now by 0.5deg/min and we get additional degree to add.
    }

  // Initialising minute,second & hr degree positions to current time and rotating hands accordingly
    var now = new Date()
    var secDegree = secondRotation(now.getSeconds())
    var minDegree = minuteRotation(now.getMinutes())
    var hourDegree = hourRotation(now.getHours())

    second.style.transform = 'rotate(' + secDegree + 'deg)'
    minute.style.transform = 'rotate(' + minDegree + 'deg)'
    hour.style.transform = 'rotate(' + hourDegree + 'deg)'

  // Making the second hand tick
    function secondMove () {
      console.log('secondMove()')
      secDegree += 6
      second.style.transform = 'rotate(' + secDegree + 'deg)'
    }

  // Making the minute hand tick
    function minuteMove () {
      console.log('minuteMove()')
      if (secDegree % 360 === 0) {
        minDegree += 6
        minute.style.transform = 'rotate(' + minDegree + 'deg)'
      }
    }

  // Making the hour tick
    function hourMove () {
      console.log('hourMove()')
      if (secDegree % 360 === 0) {
        hourDegree += 0.5
        hour.style.transform = 'rotate(' + hourDegree + 'deg)'
      }
    }

    return {
      secondRotation: secondRotation,
      minuteRotation: minuteRotation,
      hourRotation: hourRotation,
      secondMove: secondMove,
      minuteMove: minuteMove,
      hourMove: hourMove
    }
  }

  var myClock = clockWork()

  setInterval(myClock.secondMove, 1000)
  setInterval(myClock.minuteMove, 1000)
  setInterval(myClock.hourMove, 1000)
})
