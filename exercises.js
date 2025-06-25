// Create a JavaScript program that simulates a traffic light. Use a variable named currentLight to represent the current state of the traffic light. The program should have the following conditions below. Change the value of currentLight and observe the different messages logged to the console. Rewrite using switch-case.
// If currentLight is "red", log "Stop."
// If currentLight is "yellow", log "Proceed with caution."
// If currentLight is "green", log "Go."
const currentLight = "red";
switch (currentLight) {
  case "red":
    console.log("Stop.");
    break;
  case "yellow":
    console.log("Proceed with caution.");
    break;
  case "green":
    console.log("Go.");
    break;
  default:
    console.log("Invalid traffic light state.");
}

// Create a JavaScript program that simulates a login system. Use variables username and password to represent the user's credentials. The program should have the following conditions below. Change the values of username and password to test different login scenarios. Rewrite using ternary.
// If username is "admin" and password is "secret", log "Login successful. Welcome, Admin!".
// If username is not "admin" or password is not "secret", log "Login failed. Incorrect credentials.".
const username = "admin";
if (username === "admin" && password === "secret") {
  console.log("Login successful. Welcome, Admin!");
} else {
  console.log("Login failed. Incorrect credentials.");
}

// Create a JavaScript program that checks the role of a user and grants access accordingly. Use a variable named userRole to represent the user's role. The program should have the following conditions below. Change the value of userRole to test different user scenarios. Rewrite using switch-case.
// If userRole is "admin", log "Full access granted. Welcome, Admin!".
// If userRole is "user", log "Limited access granted. Welcome, User!".
// If userRole is neither "admin" nor "user", log "Access denied. Unknown user role."

const userRole = "admin"
  ? "Full access granted. Welcome, Admin!"
  : userRole === "user"
  ? "Limited access granted. Welcome, User!"
  : "Access denied. Unknown user role.";
