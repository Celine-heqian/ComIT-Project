import React, { Component } from "react";
import axios from "axios";
import { Search } from "react-bootstrap-icons";
import CountryTable from "./CountryTable";
import LineChart from "./LineChart";
import Loading from "./Loading";

class Covid extends Component {
  state = {
    countries: [],
    filterText: "",
    allCountryTotal: 0,
    countryNameAsc: true,
    confirmedAsc: false,
    deathAsc: false,
    recoveredAsc: false,
    activeAsc: false,
    selectedCountries: [],
  };

  url =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";

  // countryNameAscending = false;
  selectCon = [];
  async componentDidMount() {
    const response = await axios.get(this.url);
    const resultN = response.data.trim();

    const rows = resultN.split("\n");

    const countries = [];
    let allCountryTotal = 0;

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/); //splitting on ,
      const countryName = row[0].replace(/"/g, "");
      const countryTotal = Number(row[4]);
      const countryDeath = Number(row[5]);
      const countryRecovered = Number(row[6]);
      const countryActive = Number(row[7]);

      if (countryName.trim() !== "" || countryName !== null) {
        countries.push({
          countryName: countryName,
          confirmed: countryTotal,
          death: countryDeath,
          recovered: countryRecovered,
          active: countryActive,
          selected: false,
        });
        allCountryTotal += countryTotal;
      }
    }
    this.setState({ countries, allCountryTotal });
  }

  handleOnRowSelect = (countryToUpdate) => {
    const country = {
      countryName: countryToUpdate.countryName,
      confirmed: countryToUpdate.confirmed,
      death: countryToUpdate.death,
      recovered: countryToUpdate.recovered,
      active: countryToUpdate.active,
      selected: !countryToUpdate.selected,
    };
    const countries = [...this.state.countries];

    const indexOfCountry = this.state.countries.findIndex(
      (c) => c.countryName === countryToUpdate.countryName
    );
    countries[indexOfCountry] = country;
    this.selectCon = [...this.state.selectedCountries];
    console.log("111");
    console.log(this.selectCon);
    if (countryToUpdate.selected === false) {
      this.selectCon.push(country);
      this.setState({ selectedCountries: this.selectCon });

      // this.state.countries[indexOfCountry].selected = true;
      this.setState({ countries: countries });
      // console.log("222");
      // console.log(this.selectCon);
      // console.log(this.state.selectedCountries);
    } else {
      const indexOfSelectedCountry = this.selectCon.findIndex(
        (c) => c.countryName === countryToUpdate.countryName
      );

      this.selectCon.splice(indexOfSelectedCountry, 1);
      // console.log(selectCon);

      this.setState({ selectedCountries: this.selectCon });
      // this.state.countries[indexOfCountry].selected = false;
      this.setState({ countries: countries });

      // console.log("333");
      // console.log(this.selectCon);
      // console.log(this.state.selectedCountries);
    }
  };
  sortByConfirmed = (countryA, countryB) => {
    // 0 equal
    // 1 greater
    // -1 less
    if (this.state.confirmedAsc) {
      return countryA.confirmed - countryB.confirmed;
    } else {
      return countryB.confirmed - countryA.confirmed;
    }
    // if (Number(countryB.confirmed) > Number(countryA.confirmed)) return 1;
    // else if (Number(countryB.confirmed) < Number(countryA.confirmed)) return -1;
    // else return 0;
  };
  sortByDeath = (countryA, countryB) => {
    // 0 equal
    // 1 greater
    // -1 less
    if (this.state.deathAsc) {
      return countryA.death - countryB.death;
    } else {
      return countryB.death - countryA.death;
    }
  };

  sortByRecovered = (countryA, countryB) => {
    // 0 equal
    // 1 greater
    // -1 less
    if (this.state.recoveredAsc) {
      return countryA.recovered - countryB.recovered;
    } else {
      return countryB.recovered - countryA.recovered;
    }
  };
  sortByActive = (countryA, countryB) => {
    if (this.state.activeAsc) {
      return countryA.active - countryB.active;
    } else {
      return countryB.active - countryA.active;
    }
  };
  sortByCountryName = (countryA, countryB) => {
    // 0 equal
    // 1 greater
    // -1 less
    if (!this.state.countryNameAsc) {
      if (countryB.countryName > countryA.countryName) return 1;
      else if (countryB.countryName < countryA.countryName) return -1;
      else return 0;
    } else {
      if (countryB.countryName > countryA.countryName) return -1;
      else if (countryB.countryName < countryA.countryName) return 1;
      else return 0;
    }
  };
  handleOnSortByCountryName = (event) => {
    const asc = !this.state.countryNameAsc;
    this.handleOnSortBy(event, this.sortByCountryName);
    console.log(asc);
    console.log(this.state.countryNameAsc);
    this.setState({ countryNameAsc: asc });
  };
  handleOnSortByConfirmed = (event) => {
    const asc = !this.state.confirmedAsc;
    this.handleOnSortBy(event, this.sortByConfirmed);
    this.setState({ confirmedAsc: asc });
  };

  handleOnSortByDeath = (event) => {
    const asc = !this.state.deathAsc;
    this.handleOnSortBy(event, this.sortByDeath);
    this.setState({ deathAsc: asc });
  };
  handleOnSortByRecovered = (event) => {
    const asc = !this.state.recoveredAsc;
    this.handleOnSortBy(event, this.sortByRecovered);
    this.setState({ recoveredAsc: asc });
  };
  handleOnSortByActive = (event) => {
    const asc = !this.state.activeAsc;
    this.handleOnSortBy(event, this.sortByActive);
    this.setState({ activeAsc: asc });
  };
  handleOnSortBy = (event, sortOperation) => {
    event.preventDefault();
    const countries = [...this.state.countries];
    countries.sort(sortOperation);
    this.setState({ countries });
  };
  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  handleFilterTextChange = (event) => {
    const filterText = event.target.value;
    this.setState({ filterText: filterText });
  };
  render() {
    const {
      countries,
      allCountryTotal,
      // selectedCountries,
      filterText,
    } = this.state;
    return (
      <div>
        {allCountryTotal === 0 ? (
          <Loading />
        ) : (
          <div>
            <div className="text-center">
              <h3>
                COVID-19 World Total: {this.numberWithCommas(allCountryTotal)}
              </h3>

              <span className="lead small">
                Data Source: 1.
                https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv
                2.
                https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv
              </span>
            </div>
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                <Search />
              </span>
              <input
                type="text"
                value={filterText}
                onChange={this.handleFilterTextChange}
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Search"
              />
            </div>

            <div className="d-flex" style={{ height: "75vh" }}>
              <div
                className="mh-75 col-sm-4 p-0 bg-dark"
                style={{ overflowY: "scroll", width: "500px" }}
              >
                <CountryTable
                  countries={countries.filter((country) => {
                    if (filterText === "") {
                      return country;
                    }
                    return (
                      country.countryName
                        .toLowerCase()
                        .indexOf(filterText.toLowerCase()) >= 0
                    );
                  })}
                  // onSortByConfirmed={this.handleOnSortByConfirmed}
                  onSortByCountryName={this.handleOnSortByCountryName}
                  onSortByConfirmed={this.handleOnSortByConfirmed}
                  onSortByDeath={this.handleOnSortByDeath}
                  onSortByRecovered={this.handleOnSortByRecovered}
                  onSortByActive={this.handleOnSortByActive}
                  onRowSelected={this.handleOnRowSelect}
                  numberWithCommas={this.numberWithCommas}
                />
              </div>
              <div
                className="d-flex flex-column p-0 w-95 m-0 h-80 "
                style={{ overflowX: "auto" }}
              >
                <div>
                  <h4 className="text-center">Daily Data</h4>
                </div>

                <LineChart countries={this.selectCon} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Covid;
