var sign = document.querySelector("#sign");

function refresh() {
    // GET data and push to #signature-counter
    $.get("https://designers-oath-signatures.herokuapp.com/api/count", function(data) {
        $("#signature-counter").html(data.count);
    });

    setTimeout(function () {
        refresh();
    }, 60000);
}

refresh();

// POST data to the api when the element with #sign is clicked
sign.addEventListener("click", function() {
    $("#sign").attr("disabled", "disabled");

    $.post("https://designers-oath-signatures.herokuapp.com/api/sign", { email: "signed with no e-mail address" })
        .done(function() {
            $.get("https://designers-oath-signatures.herokuapp.com/api/count", function(data) {
                $("#signature-counter").html(data.count);
            });
        });
});
