$(document).ready(function () {

    $("#copyLinkButton").on("click", function () { navigator.clipboard.writeText($("#linkText").val()); })

    $("#generateLinkForm").on("submit", function (e) {
        e.preventDefault();

        const phoneNumber = $("#phoneNumberText").val();
        const message = $("#messageText").val();

        let link = (!!message)
            ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
            : `https://api.whatsapp.com/send?phone=${phoneNumber}`;

        $("#linkText").val(link);
    });
});