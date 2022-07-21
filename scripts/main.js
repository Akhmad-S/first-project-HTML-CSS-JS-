setInterval(function (){
    var date = new Date()
    var currentTime = "Time: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    akhmad.innerHTML = currentTime
}, 1000)

var first_num = document.getElementById("firstNumber")
var second_num = document.getElementById("secondNumber")

var calculateButton = document.getElementById("calculate")
var res = document.getElementById("result")

calculateButton.addEventListener("click", function name(){
    res.innerHTML = parseInt(first_num.value) + parseInt(second_num.value)
})