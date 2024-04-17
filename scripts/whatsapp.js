document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-button").addEventListener("click", function() {
        var phoneNumber = "5541991793386";
        var message = "Olá! Gostaria de conversar sobre Reparo/Cristalização/Polimento.";
        var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
        window.open(whatsappLink, '_blank');
    });
});