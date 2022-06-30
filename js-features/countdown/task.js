const timerElement = document.getElementById("timer")
function chengeTimer() {
	let time = timerElement.textContent;
	time--;
	timerElement.textContent = time;
	if (timer.textContent <= 0) {
		alert ("Вы победили в конкурсе!")
        clearInterval(timerId)
	}
}
const clockId = setInterval (chengeTimer, 1000);







