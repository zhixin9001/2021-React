import thunk from 'redux-thunk';
import { stub } from 'sinon';
import configureStore from 'redux-mock-store';
import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

const middlewares = [thunk];
const createMockStore = configureStore(middlewares);

describe('actions', () => {
  it('fetchWeatherStarted', () => {
    const fetchWeatherStarted = actions.fetchWeatherStarted();
    expect(fetchWeatherStarted.type).toBe(actionTypes.FETCH_STARTED);
  })

  it('fetchWeatherSuccess', () => {
    const fetchWeatherSuccess = actions.fetchWeatherSuccess('fakeResult');
    expect(fetchWeatherSuccess.type).toBe(actionTypes.FETCH_SUCCESS);
    expect(fetchWeatherSuccess.result).toBe('fakeResult');
  })

  it('fetchWeatherFailure', () => {
    const fetchWeatherFailure = actions.fetchWeatherFailure('fakeError');
    expect(fetchWeatherFailure.type).toBe(actionTypes.FETCH_FAILURE);
    expect(fetchWeatherFailure.error).toBe('fakeError');
  })

  describe('fetchWeather', () => {
    let stubbedFetch;
    const store = createMockStore();

    beforeEach(() => {
      stubbedFetch = stub(global, 'fetch');
    });

    afterEach(() => {
      stubbedFetch.restore();
    });

    it('should dispatch fetchWeatherSuccess action type on fetch success', () => {
      const mockResponse = Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          weatherinfo: {}
        })
      });
      stubbedFetch.returns(mockResponse);
      // console.log(store.dispatch(actions.fetchWeather(1)));
      return store.dispatch(actions.fetchWeather(1)).then(() => {
        const dispatchedActions = store.getActions();
        expect(dispatchedActions.length).toBe(2);
        expect(dispatchedActions[0].type).toBe(actionTypes.FETCH_STARTED);
        expect(dispatchedActions[1].type).toBe(actionTypes.FETCH_SUCCESS);
      });
    });
  });
});