
document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector("#submit-btn");

    button.addEventListener("click", () => {
        var param = {
            name : document.querySelector("#userName").value,
            email: document.querySelector("#userEmail").value,
            subject: document.querySelector("#subject").value,
            message: document.querySelector("#userMessage").value,
        }

        emailjs.send("service_v5bfj1h", "template_hityf25", param);
    });

})

