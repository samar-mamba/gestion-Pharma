import { useNavigate } from "react-router-dom";

function Login() {
const navigate = useNavigate();
const handleClick = () => {
    navigate("/home");
}

const driveTodashboard = () => {
    navigate("/all-products");
}
return (
<>
<h1>Login Page</h1>
<button onClick={handleClick}>
    Connexion
</button>
<button onClick={driveTodashboard}>Dashboard</button>

</>

);

}
export default Login;