const formRef = document.querySelector(".login-form");

const handleSubmit = ((event) => {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (email === "" || password === "") {
    alert("Все поля должны быть заполнены");
    return;
}

  const formData = {
    email,
    password,
  };

  console.log(formData);

  form.reset();
});

formRef.addEventListener("submit", handleSubmit);

