import { connect } from "react-redux";
import Chart from "../Chart/Chart";
import GoogleMap from "../GoogleMap/GoogleMap";
import "./WeatherList.css";

const WeatherList = (props) => {
  const renderList = ({ weather }) => {
    return weather.map((cityData) => {
      const name = cityData.city.name;
      const temps = cityData.list.map((weather) => weather.main.temp);
      const pressures = cityData.list.map((weather) => weather.main.pressure);
      const humidities = cityData.list.map((weather) => weather.main.humidity);
      const lon = cityData.city.coord.lon;
      const lat = cityData.city.coord.lat;
      return (
        <tr key={name}>
          <td>
            <GoogleMap lat={lat} lon={lon} />
            <span style={{ fontWeight: "700" }}>{name}</span>
          </td>
          <td>
            <Chart data={temps} color="orange" />
            <p style={{ fontWeight: "700" }}>{parseInt(+cityData.list[0].main.temp - 273)} <span>&#176;</span>C</p>
          </td>
          <td>
            <Chart data={pressures} color="green" />
            <p style={{ fontWeight: "700" }}>{cityData.list[0].main.pressure} hPa</p>
          </td>
          <td>
            <Chart data={humidities} color="black" />
            <p style={{ fontWeight: "700" }}>{cityData.list[0].main.humidity} %</p>
          </td>
        </tr>
      );
    });
  };
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>{renderList(props)}</tbody>
    </table>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { weather: state.weather };
};

export default connect(mapStateToProps)(WeatherList);
