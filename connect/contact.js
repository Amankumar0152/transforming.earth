(function () {
  emailjs.init("i0xQTXgeDg1EOYhB3"); // Replace with your EmailJS public key
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const status = document.getElementById("form-status");
  status.textContent = "Sending...";

  emailjs.sendForm("service_vpknuv3", "template_b97mknq", this)
    .then(() => {
      status.textContent = "Message sent successfully!";
      this.reset();
    })
    .catch((err) => {
      console.error(err);
      status.textContent = "Failed to send message. Please try again.";
    });
});
