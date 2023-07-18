var difference = 0
function countDown(){
        var countDownTime = 30000 - difference
        difference = difference + 1000
        // var hours = Math.floor(countDownTime/1000/60/60)
        var minutes = Math.floor(countDownTime/1000/60)%60
        var seconds = Math.floor(countDownTime/1000)%60
        // document.write(hours+":"+minutes+":"+seconds)
        document.getElementById("minutes").innerHTML = minutes
        document.getElementById("seconds").innerHTML = seconds
        // console.log(countDownTime)
    }
    function start(){
    setInterval(countDown,1000)
}