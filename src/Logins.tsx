import { Link } from "react-router-dom";
import { accountDetails, login, verificationLink } from "./config/app.service";

export default function Login() {
   const handleEvent = (e:any) => {
     e.preventDefault()
     const formData = new FormData(e.target);
     const data:any = {
       email: formData.get('email'),
       password: formData.get('password')
     };
     console.log('Form data:', data);
     login(data.email, data.password).then(async (res)=>{
      console.log('Login successful', res);
      let account:any=await accountDetails();
      console.log(account,'<<<acco')
      if(!account.emailVerification){
       let emailRes= await verificationLink();
       console.log(emailRes)
      }
     });
   }
  return (
    <div className="page">
      <h1>Login</h1>
      <form onSubmit={(e) => handleEvent(e)}>
       <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  )
}