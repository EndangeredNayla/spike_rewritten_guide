$(document).ready(function() {
    $("#submit").click(function() {
        var tname = $("#tname").val();
        var toontype = $("#toontype").val();
        var returnaddr = $("#returnaddr").val();
        var message = $("#message").val();
        $("#returnmessage").empty();
        if(tname == '' || returnaddr == '' || message == '') {
            alert("Please fill in all the fields!");
        } else {
            $.post("contact_form.php", {
                tname1: tname,
                toontype1: toontype,
                returnaddr1: returnaddr,
                message1: message
            }, function(data) {
                $("#returnmessage").append(data);
                if(data == "Your message has been recieved! I will reach back very soon!") {
                    $("#contactform")[0].reset();
                }
            });
        }
    });
});