export default function RegisterPage() {
  return (
    <div>
      <h1>Welcome!</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" name="password" required />
        </div>
        <div>
          <label htmlFor="passwordConfirmation">Password Confirmation:</label>
          <input type="text" id="passwordConfirmation" name="passwordConfirmation" required />
        </div>
      </form>
    </div>
  );
}