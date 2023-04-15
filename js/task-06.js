const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const length = input.getAttribute("data-length");
  const value = input.value.trim().length;

  function toggleClass(remove, add) {
    input.classList.remove(remove);
    input.classList.add(add);
  }

  if (value === Number(length)) {
    toggleClass("invalid", "valid");
  } else {
    toggleClass("valid", "invalid");
  }
});
