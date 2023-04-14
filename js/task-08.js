const form = document.querySelector(".login-form");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const {
    elements: { email, password },
  } = evt.currentTarget;
 

  if (email.value === "" || password.value === "") {
    alert("Будь ласка, заповніть всі поля");
  };

  console.log(`Email: ${email.value} Password: ${password.value}`);

  form.reset();
});
