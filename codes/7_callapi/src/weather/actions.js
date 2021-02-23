import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes.js';

let nextSeqId = 0;
export const fetchWeatherStarted = () => ({
    type: FETCH_STARTED
});

export const fetchWeatherSuccess = (result) => ({
    type: FETCH_SUCCESS,
    result
});

export const fetchWeatherFailure = (error) => ({
    type: FETCH_FAILURE,
    error
});

export const fetchData = () => {
    return dispatch => {
        return fetch('/users.json') // Some async action with promise
            .then(() => dispatch(fetchWeatherStarted()))
    };
}

export const fetchWeather = (cityCode) => {
    return (dispatch) => {
        const seqId = ++nextSeqId;

        const dispatchIfValid = (action) => {
            if (seqId === nextSeqId) {
                return dispatch(action);
            }
        }

        dispatchIfValid(fetchWeatherStarted());

        const apiUrl = `/data/cityinfo/${cityCode}.html`;

        // dispatch(fetchWeatherStarted());

        return fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response)
            }
            response.json().then((response) => {
                dispatchIfValid(fetchWeatherSuccess(response.weatherinfo));
            }).catch((error) => {
                throw new Error('Invalid js on response: ' + error);
            });
        }).catch((error) => {
            dispatchIfValid(fetchWeatherFailure(error));
        });
    }
};

