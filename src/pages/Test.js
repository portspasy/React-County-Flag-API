import React from "react";

import axios from "axios";

class Test extends React.Component {
  state = {
    cities: [],
    crypto: [],
  };

  componentDidMount() {
    // HTTP requst to get all cities flag from REST Countries API
    // https://restcountries.eu/rest/v2/all
    axios
      .get(
        `https://restcountries.eu/rest/v2/all?fields=name;region;population;flag`
      )
      .then((res) => {
        const cities = res.data;
        this.setState({ cities });
      });
    // Search by region: Africa, Americas, Asia, Europe, Oceania
    // axios.get(`https://restcountries.eu/rest/v2/region/europe`).then((res) => {
    //     const cities = res.data;
    //     this.setState({ cities });
    // });

    axios
      .get(
        `   https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h%2C24%2C7d%2C14d%2C30d%2C200d%2C1y`
      )
      .then((res) => {
        const crypto = res.data;
        this.setState({ crypto });
        console.log(this.state.crypto);
      });
  }
  render() {
    return (
      <ul>
        {this.state.cities.map((cities) => (
          <li key={cities.name}>
            <span>
              <img src={cities.flag} alt={cities.name} />
            </span>
            <span>
              <h2>{cities.name}</h2>
            </span>
            <span>
              <p>Population: {cities.population}</p>
            </span>
            <span>
              <p>Region: {cities.region}</p>
            </span>
            <span>
              <p>Capital: {cities.name}</p>
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

export default Test;
