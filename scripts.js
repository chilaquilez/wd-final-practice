const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Message sent. Thanks for reaching out!");
    form.reset();
  });
}