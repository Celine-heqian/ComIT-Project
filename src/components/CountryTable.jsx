import React, { Component } from "react";

class CountryTable extends Component {
  render() {
    const {
      countries,
      onSortByCountryName,
      onSortByConfirmed,
      onSortByDeath,
      onSortByRecovered,
      onSortByActive,
      onRowSelected,
      numberWithCommas,
    } = this.props;
    return (
      <table className="table table-striped table-dark table-bordered ">
        <thead>
          <tr>
            <th>
              <button
                className="btn btn-primary btn-sm"
                onClick={onSortByCountryName}
                title="Sort by ascending/descending order"
              >
                Country
              </button>
            </th>
            <th>
              <button
                className="btn btn-info btn-sm"
                onClick={onSortByConfirmed}
                title="Sort by ascending/descending order"
              >
                Confirmed
              </button>
            </th>
            <th>
              <button
                className="btn btn-secondary btn-sm"
                onClick={onSortByDeath}
                title="Sort by ascending/descending order"
              >
                Death
              </button>
            </th>
            <th>
              <button
                className="btn btn-success btn-sm"
                onClick={onSortByRecovered}
                title="Sort by ascending/descending order"
              >
                Recovered
              </button>
            </th>
            <th>
              <button
                className="btn btn-danger  btn-sm"
                onClick={onSortByActive}
                title="Sort by ascending/descending order"
              >
                Active
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => {
            const style = {
              backgroundColor: "slateBlue",
            };
            return (
              <tr
                key={country.countryName}
                style={country.selected ? style : null}
                onClick={() => onRowSelected(country)}
              >
                <td>{country.countryName}</td>
                <td className="text-right ">
                  {numberWithCommas(country.confirmed)}
                </td>
                <td className="text-right">
                  {numberWithCommas(country.death)}
                </td>
                <td className="text-right">
                  {numberWithCommas(country.recovered)}
                </td>
                <td className="text-right">
                  {numberWithCommas(country.active)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default CountryTable;
