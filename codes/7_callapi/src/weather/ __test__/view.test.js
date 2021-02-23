import { configure, shallow ,mount} from 'enzyme';
import Weather from '../view.js';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import reducer from '../reducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(combineReducers({
  weather: reducer
}), {weather:{status:'loading'}});

configure({ adapter: new Adapter() });

const subject = (
  <Provider store={store}>
    <Weather />
  </Provider>);

describe('filters', () => {
  it('should render three link', () => {
    const wrapper = mount(subject);
    expect(wrapper.contains(<div>Loading</div>)).toBe(true);
    // expect(wrapper.contains(<Link filter={FilterTypes.COMPLETED}> {FilterTypes.COMPLETED} </Link>)).toBe(true);
    // expect(wrapper.find('.value')).toBe(true);
  });
});