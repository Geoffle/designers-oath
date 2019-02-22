var sign = document.querySelector("#sign");

// GET data and push to #signature-counter
function getCounter() {
    $.get("https://designers-oath-signatures.herokuapp.com/api/count", function(data) {
        $("#signature-counter").html("(" + data.count + ")");
    });
}

function refresh() {
    getCounter();

    setTimeout(function() {
        refresh();
    }, 60000);
}

refresh();

// POST data to the api when the element with #sign is clicked
sign.addEventListener("click", function() {
    $("#sign").attr("disabled", "disabled");
    $("#download").removeAttr("disabled");

    $.post("https://designers-oath-signatures.herokuapp.com/api/sign", { email: "signed with no e-mail address" }).done(
        function() {
            getCounter();
        }
    );
});
