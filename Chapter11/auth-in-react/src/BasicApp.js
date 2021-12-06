import { Router, Link } from "@reach/router";

const Nav = () => (
  <nav>
    <Link to="/">Homepage</Link> | <Link to="about">About Me</Link>
  </nav>
);
const Homepage = () => (
  <div>
    <Nav />
    <h1>Homepage</h1>
  </div>
);

const Aboutpage = () => (
  <div>
    <Nav />
    <h1>About Me</h1>
  </div>
);

function App() {
  return (
    <Router>
      <Homepage path="/" />
      <Aboutpage path="about" />
    </Router>
  );
}

export default App;
