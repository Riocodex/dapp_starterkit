
import logo from './logo.png';
import './App.css';
 
function App() {
  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 ms-3"
          href="https://riocodex.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hi there! im Rio
        </a>
      </nav>
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            <div className="content mx-auto mt-5">
              <a
                href="https://riocodex.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo} className="App-logo" alt="logo"/>
              </a>
              <h1 className= "mt-5">RioCodeX's Starter Kit</h1>
              <p>
           This is a template to speed up building process of decentralized applications.<br/> If you'd like to know how its used click the link below dont forget to leave a star!
              </p>
              <a
                className="App-link"
                href="http://www.dappuniversity.com/bootcamp"
                target="_blank"
                rel="noopener noreferrer"
              >
                LEARN BLOCKCHAIN <u><b>NOW! </b></u>
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
