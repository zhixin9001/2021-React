import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Link, NavLink, Prompt, Redirect, Switch, Route } from 'react-router-dom';
const About = ({ match }) => (<div>About {match.params.id}-{match.params.subid}</div>);
const Home = () => (<div>Home</div>);
const Product = () => (<div>Product</div>);

const SubCategory = ({ match }) => (
  <div>
    <Link to={`/category/${match.params.id}/sub/1`}>sub category 1</Link>
    <Link to={`/category/${match.params.id}/sub/2`}>sub category 2</Link>
    <hr />

    <Route path="/category/:id/sub/:subid" component={About}></Route>
  </div>
)

function App() {
  // return (
  //   <Router>
  //     <div className="App">
  //       <Link to="/">Home</Link>
  //       <Link to="/About">About</Link>
  //       <Link to="/Product">Product</Link>
  //       <NavLink to="/Product" activeClassName="selected">FAQ</NavLink>
  //       <hr />

  //       {/* <Prompt message="Are you sure" /> */}
  //       {/* <switch> */}

  //         <Route path="/a" exact render={() => (true ? (<Redirect to="/Product" />) : (<About />))} />
  //         {/* <Route path="/" exact component={Home}></Route> */}
  //         <Route exact path="/" component={About}></Route>
  //         <Route path="/about" component={About}></Route>
  //         <Route path="/product" component={Product}></Route>
  //       {/* </switch> */}
  //     </div>
  //   </Router>
  // );

  // return (
  //   <Router>
  //     <div className="App">
  //       <Link to="/">Home</Link>
  //       <Link to="/About/tteesstt">About</Link>
  //       <Link to="/Product">Product</Link>
  //       <NavLink to="/Product" activeClassName="selected">FAQ</NavLink>
  //       <hr />

  //       <Route exact path="/" component={Home}></Route>
  //       <Route path="/about/:id" component={About}></Route>
  //       <Route path="/product" component={Product}></Route>
  //     </div>
  //   </Router>
  // );

  return (
    <Router>
      <div className="App">
        <Link to="/category/1">category 1</Link>
        <Link to="/category/2">category 2</Link>
        <hr />

        <Route path="/category/:id" component={SubCategory}></Route>
      </div>
    </Router>
  );
}

export default App;
