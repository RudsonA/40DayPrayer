
function countingDown(countDownDate) {

    let x = setInterval(() => {

        const now = new Date().getTime;

        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector("#timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`

        if (distance < 0) {
            clearInterval(x);
            document.querySelector("#timer").innerHTML = "I completed my 40 Day Prayer or forgot to restart it!"
        }
    }, 1000);
}

export default countingDown; 