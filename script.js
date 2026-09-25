
const clockContainer = document.getElementById("clock-container");

if (clockContainer) {
    const dayElement = document.createElement("h4");
    dayElement.classList.add("h4", "text-center", "text-success");
    clockContainer.appendChild(dayElement); 

    const timeElement = document.createElement("h4");
    timeElement.classList.add("h4", "text-center", "text-success", "mb-5");
    clockContainer.appendChild(timeElement); 

    function startClock() {
        let myDate = new Date();

        let myDay = myDate.getDay();
        let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        dayElement.textContent = "Today is : " + weekday[myDay];

        let hours = myDate.getHours();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        
        let minutes = myDate.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;

        let seconds = myDate.getSeconds();
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timeElement.textContent = `Current time is : ${hours}:${minutes}:${seconds} ${ampm}`;
    }

    startClock();
    setInterval(startClock, 1000);
}


const demoElement = document.getElementById("demo");

if (demoElement) {
    var countDownDate = new Date("Jan 5, 2027 15:37:25").getTime();

    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        demoElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            demoElement.innerHTML = "EXPIRED";
        }
    }, 1000);
}


const buttonContainer = document.createElement("div");
buttonContainer.classList.add("text-center", "my-4"); 
document.body.appendChild(buttonContainer); 


const welcomeBtn = document.createElement("button");
welcomeBtn.textContent = "Welcome";
welcomeBtn.classList.add("btn", "btn-success", "btn-lg");
buttonContainer.appendChild(welcomeBtn);


welcomeBtn.addEventListener("click", function() {
    alert("Welcome to Boracay!");
});