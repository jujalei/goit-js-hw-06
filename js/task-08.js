const form = document.querySelector(".login-form");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const {
    elements: { email, password },
  } = evt.currentTarget;
 

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Будь ласка, заповніть всі поля");
  };

  const formObj = {
    email: email.value,
    password: password.value
    };

  console.log(formObj);

  evt.target.reset();
});
