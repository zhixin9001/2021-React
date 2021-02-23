import { view as TopMenu } from './TopMenu/index';

const App = ({ children }) => (
  <div>
    <TopMenu />
    <div>{children}</div>
  </div>
);
export default App;
