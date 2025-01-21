"use client" // Apparently we have to add this otherwise Next.js doesn't know to accept the User's form inputs

export default function RegisterPage() {
  function handleFormSubmit(event) {
    event.preventDefault();
    const userData = new FormData(event.target);
    const data = Object.fromEntries(userData.entries());  // Turns the User's input data into an object where the key == the form name and the value == the User's input

    if (data.password !== data.passwordConfirmation) {
      alert("Passwords must match!");
      return;
    }

    console.log("Form submitted:", data);
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="text" 
            id="email" 
            name="email" 
            required 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="text" 
            id="password" 
            name="password" 
            required 
          />
        </div>
        <div>
          <label htmlFor="passwordConfirmation">Password Confirmation:</label>
          <input 
            type="text" 
            id="passwordConfirmation" 
            name="passwordConfirmation" 
            required 
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}