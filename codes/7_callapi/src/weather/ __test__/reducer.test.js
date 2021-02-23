import reducer from '../reducer';
import * as actions from '../actions';
import * as Status from '../status';

describe('reducer', () => {
  it('should return loading status', () => {
    const action = actions.fetchWeatherStarted();
    const newState=reducer({},action);
    expect(newState.status).toBe(Status.LOADING);
  })

  it('should return success status', () => {
    const action = actions.fetchWeatherSuccess({res:'success response'});
    const newState=reducer({},action);
    expect(newState.status).toBe(Status.SUCCESS);
    expect(newState.res).toBe('success response');
  })

  it('should return failure status', () => {
    const action = actions.fetchWeatherFailure({error:'error response'});
    const newState=reducer({},action);
    expect(newState.status).toBe(Status.FAILURE);
    expect(newState.error).toBe('error response');
  })
});