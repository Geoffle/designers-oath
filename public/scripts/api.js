var sign = document.querySelector("#sign");

// GET data and push to #signature-counter
function getCounter() {
    $.get("https://api-thedesignersoath.herokuapp.com/api/count", function(data) {
        $("#signature-counter").html("(" + data.count + ")");
    });
}

function refresh() {
    getCounter();

    setTimeout(function() {
        refresh();
    }, 600000);
}

refresh();

// POST data to the api when the element with #sign is clicked
sign.addEventListener("click", function() {
    $("#sign").attr("disabled", "disabled");
    $("#download").removeAttr("disabled");

    $.post("https://api-thedesignersoath.herokuapp.com/api/sign", { email: "signed with no e-mail address" }).done(
        function() {
            getCounter();
        }
    );
});
