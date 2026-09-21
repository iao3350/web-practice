const phoneLink = document.getElementById("phone-link");

phoneLink.addEventListener("click", function(event) {
    event.preventDefault();

    const result = confirm("電話をかけますか？");

    if (result) {
    window.location.href = "tel:09036390136";
}

});
