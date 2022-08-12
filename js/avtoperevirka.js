function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";

  if (password === ADMIN_PASSWORD) {
    console.log("Welcome!");
    return;
  }
  console.log("Access denied, wrong password!");
  return;
}
