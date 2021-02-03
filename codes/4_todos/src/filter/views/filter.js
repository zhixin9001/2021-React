import { FilterTypes } from '../../constants';
import Link from './link.js';
import './style.css';

export default () => {
  return (
    <p className="filters">
      <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
      <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
      <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
    </p>
  );
}