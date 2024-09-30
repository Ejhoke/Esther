import React, {useState} from "react";
function LoginForm() {
    const [email,setEmail] = useState ("estherakpobasa2014@gmaail.com");
    const [password,setPassword] = useState("secret123");
    return (
        <form className="login-form">
            <h1>Login Form</h1>
            <input
            value = {email}
            onChange = {(event)=>setEmail(event.target.value)}
            name="email"
            type="email"
            placeholder="username"
            />
            <input
            value={password}
            onChange = {(event) => setPassword(event.target.value)}
            name = "password" 
            type = "password"
            />
            <button type = "submit">Submit</button>
            </form>
    );
}
export default LoginForm