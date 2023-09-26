
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('Ups! Toate, dar absolut toate câmpurile trebuie completate. Altfel nu treci mai departe.');
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value
    };

    console.log('Datele introduse:', formData);

    emailInput.value = '';
    passwordInput.value = '';
  }
});

