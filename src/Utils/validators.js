function isEmailValid(email) {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test if the email matches the pattern
  return emailPattern.test(email);
}

function isNameValid(name) {
  // Regular expression pattern for name validation
  const namePattern = /^[a-zA-Z\s]*$/;

  // Test if the name matches the pattern
  return namePattern.test(name);
}
export { isEmailValid, isNameValid };
