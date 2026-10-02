const passwordInput = document.querySelector('#password');
const passwordToggle = document.querySelector('#password-toggle');
const loginForm = document.querySelector('#login-form');
const formMessage = document.querySelector('#form-message');
const googleButton = document.querySelector('#google-button');

passwordToggle.addEventListener('click', () => {
  const showingPassword = passwordInput.type === 'password';
  passwordInput.type = showingPassword ? 'text' : 'password';
  passwordToggle.textContent = showingPassword ? 'Hide' : 'Show';
  passwordToggle.setAttribute('aria-label', `${showingPassword ? 'Hide' : 'Show'} password`);
  passwordToggle.setAttribute('aria-pressed', String(showingPassword));
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.classList.remove('error');
  formMessage.textContent = 'Sign-in is ready to connect to your authentication service.';
});

googleButton.addEventListener('click', () => {
  formMessage.classList.remove('error');
  formMessage.textContent = 'Google sign-in can be enabled when authentication is connected.';
});
