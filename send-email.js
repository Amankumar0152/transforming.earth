function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    
    emailjs.send("service_o0ngeon", "template_cxysy97", parms).then(alert("Email send Successful"))
}