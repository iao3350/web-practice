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
