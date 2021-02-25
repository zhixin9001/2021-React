import { setAll, setCompleted, setNotCompleted } from './actions';
import { connect } from 'react-redux';
import Link from './link';
import { ALL, COMPLETED, NOT_COMPLETED } from './actionTypes.js';


const Filter = ({ setAll, setCompleted, setNotCompleted }) => (<div>
  <Link onClick={setAll}>{ALL}</Link>
  <Link onClick={setCompleted}>{COMPLETED}</Link>
  <Link onClick={setNotCompleted}>{NOT_COMPLETED}</Link>
</div>);

const mapDispatchToProps = (dispatch) => ({
  setAll: () => dispatch(setAll()),
  setCompleted: () => dispatch(setCompleted()),
  setNotCompleted: () => dispatch(setNotCompleted()),
});

export default connect(null, mapDispatchToProps)(Filter);
