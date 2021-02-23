import { configure, shallow } from 'enzyme';
import Filter from './filter.js';
import Link from './link.js';
import { FilterTypes } from '../../constants.js';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('filters', () => {
  it('should render three link', () => {
    const wrapper = shallow(<Filter />);
    console.log(wrapper)
    expect(wrapper.contains(<Link filter={FilterTypes.ALL}> {FilterTypes.ALL} </Link>)).toBe(true);
    // expect(wrapper.contains(<Link filter={FilterTypes.COMPLETED}> {FilterTypes.COMPLETED} </Link>)).toBe(true);
    // expect(wrapper.contains(<Link/>)).toBe(true);
  });
});