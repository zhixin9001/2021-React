import {Link} from 'react-router'
const view =()=>(
  <div>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
);
export {view};