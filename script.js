console.log("JavaScriptが読み込まれました！");

const daySelect = document.getElementById("day");

console.log(daySelect);

const timeSelect = document.getElementById("time");

const lessonTimes = {
    monday: ["19:00", "19:30", "20:00", "20:30"],
    tuesday: ["18:30", "19:00", "19:30", "20:00", "20:30"],
    wednesday: ["20:00","20:30"],
    thursday: ["19:00", "19:30", "20:00", "20:30"],
    friday: ["18:00", "18:30", "20:00", "20:30"],
    saturday: ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"],
};

daySelect.addEventListener("change", function(event) {

    const times = lessonTimes[event.target.value];

    console.log(lessonTimes[event.target.value]);

    timeSelect.innerHTML = "";

    times.forEach(function(time) {
        const option = document.createElement("option");
        option.textContent = time;
        timeSelect.appendChild(option);
    });
});

const form = document.getElementById("trial-form");

const result = document.getElementById("result");

const trialCard = document.querySelector(".trial-card");

const resultCard = document.querySelector(".result-card");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    fetch(form.action, {
        method: "POST",
        headers: {
            "accept": "application/json"
        },
        body: formData
    })
    .then(function(response){
        console.log("response");
        console.log("フォームが送信されました！");
        console.log(daySelect.value);
        console.log(timeSelect.value);
        trialCard.style.display = "none";
        resultCard.style.display = "flex";
        result.innerHTML = "申し込みが完了しました！";
    })
    
});




