import logo from "./logo.svg";

function Footer() {
  return (
    <div className="Footer">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Welcome to Idemnify Insurance</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          QuikClaim
        </a>
      </header>
    </div>
  );
}

export default Footer;
