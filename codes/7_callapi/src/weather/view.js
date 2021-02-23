import * as Status from './status.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Weather = ({ status, cityName, weather, lowestTemp, highestTemo }) => {
    switch (status) {
        case Status.LOADING: {
            return <div>Loading</div>;
        }
        case Status.SUCCESS: {
            return (<div>
                {cityName} {weather} 最低气温 {lowestTemp} 最高气温 {highestTemo}
            </div>
            )
        }
        case Status.FAILURE: {
            return <div>Failed</div>;
        }
        default: {
            throw new Error(`unexpected status ` + status)
        }
    }
}

const mapStateToProps = (state) => {
    const weatherData = state.weather;
    return {
        status: weatherData.status,
        cityName: weatherData.city,
        weather: weatherData.weather,
        lowestTemp: weatherData.temp1,
        highestTemo: weatherData.temp2
    }
}

Weather.propTypes = {
    status: PropTypes.string.isRequired,
    cityName: PropTypes.string,
    weather: PropTypes.string,
    lowestTemp: PropTypes.string,
    highestTemp: PropTypes.string
};


export default connect(mapStateToProps)(Weather);