import { Router, Link } from "@reach/router";
import { useAuth } from "./auth-context";
import PrivateRoute from "./PrivateRoute";

const Nav = () => (
  <nav>
    <Link to="/">Homepage</Link> | <Link to="about">About Me</Link>
  </nav>
);
const HomePage = () => {
  const { authenticated } = useAuth();
  return (
    <div>
      <Nav />
      <h1>You are {authenticated ? "logged in" : "logged out"}.</h1>
    </div>
  );
};

const AboutPage = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Nav />
      <h1>About Me</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const LoginPage = () => {
  const { login } = useAuth();
  return (
    <div>
      <Nav />
      <h1>Login Page</h1>
      <button onClick={login}>Login</button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <LoginPage path="login" />
      <PrivateRoute component={AboutPage} path="about" />
    </Router>
  );
}

export default App;
