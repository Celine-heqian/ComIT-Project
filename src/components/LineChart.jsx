import React, { Component } from "react";
import axios from "axios";
import chart from "../img/chart.png";

import { Line } from "react-chartjs-2";

class LineChart extends Component {
  state = {};
  countryData = new Array();
  finalCountryData = new Array();
  timeLabels = [];
  // selectedCountryIndex = new Array();
  url =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";

  async componentDidMount() {
    const response = await axios.get(this.url);
    const resultN = response.data.trim();
    const rows = resultN.split("\n");
    const head = rows[0].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    const dataLength = rows.length - 1;
    // console.log(head);
    // console.log(rows[0]);
    // console.log(dataLength);
    const dataWidth = head.length - 3;
    this.timeLabels = head.slice(4);
    console.log("timelabels");
    console.log(this.timeLabels);
    for (let i = 0; i < dataLength; i++) {
      this.countryData[i] = new Array(dataWidth);
      // this.finalCountryData[i] = new Array(dataWidth);
      // this.finalCountryData[i] = new Array(dataWidth);
      // for (let j = 1; j < dataWidth; j++) {
      //   this.countryData[i][j] = 0;
      //   // this.finalCountryData[i][j] = 0;
      // }
    }
    let countriesNames = [];
    let findCountryIndex;

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/); //splitting on ,

      const countryName = row[1].replace(/"/g, "");

      // console.log(row[1] + "---" + countryName);
      //   console.log(row[0] + "---" + row[1]);

      const rowdata1 = row.slice(1);
      rowdata1.splice(0, 1, countryName);
      rowdata1.splice(1, 2);
      // console.log("data---" + i + ":");
      // console.log(rowdata1);
      if (countryName !== "" || countryName !== null) {
        for (let j = 1; j < rowdata1.length; j++) {
          const numberOfRowData = Number(rowdata1[j]);
          rowdata1[j] = numberOfRowData;
        }
        this.countryData[i - 1].push(rowdata1);
        // console.log("country name from row: " + countryName);
      }

      if (countriesNames.indexOf(countryName) < 0) {
        //the country name did not appear in previous data
        this.finalCountryData[countriesNames.length] = new Array(dataWidth);
        for (let j = 0; j < dataWidth; j++) {
          this.finalCountryData[countriesNames.length][j] = rowdata1[j];
        }
        // this.finalCountryData[countriesNames.length][0] = "";
        // this.finalCountryData[countriesNames.length].push(rowdata1);
        // console.log("final country data");
        // console.log(this.finalCountryData[countriesNames.length]);
        countriesNames.push(countryName);

        // console.log(
        //   "i=" +
        //     i +
        //     ",the country name did not appear in previous :" +
        //     countryName
        // );
        // console.log("the country name array:");
        // console.log(countriesNames);
      } else {
        //the country name  appeared in previous data
        // console.log(
        //   "i=" + i + ",the country name appear in previous :  " + countryName
        // );
        // console.log("the country name array:");
        // console.log(countriesNames);
        findCountryIndex = countriesNames.indexOf(countryName); //find the index
        // console.log(
        //   "the index of country name in the name array is: " + findCountryIndex
        // );

        for (let j = 1; j < rowdata1.length; j++) {
          const number1 = this.finalCountryData[findCountryIndex][j];
          // console.log("number1: j:" + j + "----" + number1);
          const number2 = rowdata1[j];
          // console.log("number2:" + number2);
          this.finalCountryData[findCountryIndex][j] = number1 + number2;
        }
      }

      //   console.log("countries[" + i + "]");
      //   console.log(this.countryData[i][0]);
      //   console.log(this.countryData[i]);
    }
    // console.log("processed data:");
    // console.log(this.finalCountryData);
    // console.log(this.countryData);
  }
  render() {
    let colors = [
      "#63b598",
      "#ce7d78",
      "#ea9e70",
      "#a48a9e",
      "#c6e1e8",
      "#648177",
      "#0d5ac1",
      "#f205e6",
      "#1c0365",
      "#14a9ad",
      "#4ca2f9",
      "#a4e43f",
      "#d298e2",
      "#6119d0",
      "#d2737d",
      "#c0a43c",
      "#f2510e",
      "#651be6",
      "#79806e",
      "#61da5e",
      "#cd2f00",
      "#9348af",
      "#01ac53",
      "#c5a4fb",
      "#996635",
      "#b11573",
      "#4bb473",
      "#75d89e",
      "#2f3f94",
      "#2f7b99",
      "#da967d",
      "#34891f",
      "#b0d87b",
      "#ca4751",
      "#7e50a8",
      "#c4d647",
      "#e0eeb8",
      "#11dec1",
      "#289812",
      "#566ca0",
      "#ffdbe1",
      "#2f1179",
      "#935b6d",
      "#916988",
      "#513d98",
      "#aead3a",
      "#9e6d71",
      "#4b5bdc",
      "#0cd36d",
      "#250662",
      "#cb5bea",
      "#228916",
      "#ac3e1b",
      "#df514a",
      "#539397",
      "#880977",
      "#f697c1",
      "#ba96ce",
      "#679c9d",
      "#c6c42c",
      "#5d2c52",
      "#48b41b",
      "#e1cf3b",
      "#5be4f0",
      "#57c4d8",
      "#a4d17a",
      "#225b8",
      "#be608b",
      "#96b00c",
      "#088baf",
      "#f158bf",
      "#e145ba",
      "#ee91e3",
      "#05d371",
      "#5426e0",
      "#4834d0",
      "#802234",
      "#6749e8",
      "#0971f0",
      "#8fb413",
      "#b2b4f0",
      "#c3c89d",
      "#c9a941",
      "#41d158",
      "#fb21a3",
      "#51aed9",
      "#5bb32d",
      "#807fb",
      "#21538e",
      "#89d534",
      "#d36647",
      "#7fb411",
      "#0023b8",
      "#3b8c2a",
      "#986b53",
      "#f50422",
      "#983f7a",
      "#ea24a3",
      "#79352c",
      "#521250",
      "#c79ed2",
      "#d6dd92",
      "#e33e52",
      "#b2be57",
      "#fa06ec",
      "#1bb699",
      "#6b2e5f",
      "#64820f",
      "#1c271",
      "#21538e",
      "#89d534",
      "#d36647",
      "#7fb411",
      "#0023b8",
      "#3b8c2a",
      "#986b53",
      "#f50422",
      "#983f7a",
      "#ea24a3",
      "#79352c",
      "#521250",
      "#c79ed2",
      "#d6dd92",
      "#e33e52",
      "#b2be57",
      "#fa06ec",
      "#1bb699",
      "#6b2e5f",
      "#64820f",
      "#1c271",
      "#9cb64a",
      "#996c48",
      "#9ab9b7",
      "#06e052",
      "#e3a481",
      "#0eb621",
      "#fc458e",
      "#b2db15",
      "#aa226d",
      "#792ed8",
      "#73872a",
      "#520d3a",
      "#cefcb8",
      "#a5b3d9",
      "#7d1d85",
      "#c4fd57",
      "#f1ae16",
      "#8fe22a",
      "#ef6e3c",
      "#243eeb",
      "#1dc18",
      "#dd93fd",
      "#3f8473",
      "#e7dbce",
      "#421f79",
      "#7a3d93",
      "#635f6d",
      "#93f2d7",
      "#9b5c2a",
      "#15b9ee",
      "#0f5997",
      "#409188",
      "#911e20",
      "#1350ce",
      "#10e5b1",
      "#fff4d7",
      "#cb2582",
      "#ce00be",
      "#32d5d6",
      "#17232",
      "#608572",
      "#c79bc2",
      "#00f87c",
      "#77772a",
      "#6995ba",
      "#fc6b57",
      "#f07815",
      "#8fd883",
      "#060e27",
      "#96e591",
      "#21d52e",
      "#d00043",
      "#b47162",
      "#1ec227",
      "#4f0f6f",
      "#1d1d58",
      "#947002",
      "#bde052",
      "#e08c56",
      "#28fcfd",
      "#bb09b",
      "#36486a",
      "#d02e29",
      "#1ae6db",
      "#3e464c",
      "#a84a8f",
      "#911e7e",
      "#3f16d9",
      "#0f525f",
      "#ac7c0a",
      "#b4c086",
      "#c9d730",
      "#30cc49",
      "#3d6751",
      "#fb4c03",
      "#640fc1",
      "#62c03e",
      "#d3493a",
      "#88aa0b",
      "#406df9",
      "#615af0",
      "#4be47",
      "#2a3434",
      "#4a543f",
      "#79bca0",
      "#a8b8d4",
      "#00efd4",
      "#7ad236",
      "#7260d8",
      "#1deaa7",
      "#06f43a",
      "#823c59",
      "#e3d94c",
      "#dc1c06",
      "#f53b2a",
      "#b46238",
      "#2dfff6",
      "#a82b89",
      "#1a8011",
      "#436a9f",
      "#1a806a",
      "#4cf09d",
      "#c188a2",
      "#67eb4b",
      "#b308d3",
      "#fc7e41",
      "#af3101",
      "#ff065",
      "#71b1f4",
      "#a2f8a5",
      "#e23dd0",
      "#d3486d",
      "#00f7f9",
      "#474893",
      "#3cec35",
      "#1c65cb",
      "#5d1d0c",
      "#2d7d2a",
      "#ff3420",
      "#5cdd87",
      "#a259a4",
      "#e4ac44",
      "#1bede6",
      "#8798a4",
      "#d7790f",
      "#b2c24f",
      "#de73c2",
      "#d70a9c",
      "#25b67",
      "#88e9b8",
      "#c2b0e2",
      "#86e98f",
      "#ae90e2",
      "#1a806b",
      "#436a9e",
      "#0ec0ff",
      "#f812b3",
      "#b17fc9",
      "#8d6c2f",
      "#d3277a",
      "#2ca1ae",
      "#9685eb",
      "#8a96c6",
      "#dba2e6",
      "#76fc1b",
      "#608fa4",
      "#20f6ba",
      "#07d7f6",
      "#dce77a",
      "#77ecca",
    ];
    const { countries } = this.props;
    // console.log("==================");
    // console.log(countries);

    if (countries.length === 0) {
      return (
        <div className="d-flex flex-column align-items-center ">
          <div className="text-center btn-primary">
            Note*:To review the daily data of selected coutry, click the coutry
            record in the left table.
          </div>
          <div>
            <img src={chart} class="img-thumbna" alt={"chart Pic"} />
          </div>
        </div>
      );
    }

    // const indexOfSelected = [];
    const data = {
      labels: "",
      datasets: [
        {
          label: "",
          fill: false,
          backgroundColor: "",
          borderColor: "",
          pointBorderColor: "",
          pointBackgroundColor: "",
          data: [],
        },
      ],
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              fontSize: 12,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontSize: 10,
              stepSize: 2,
              fontColor: "#000",
            },
          },
        ],
      },
      responsive: false,
      maintainAspectRatio: false,
    };

    data.datasets.pop();
    for (let i = 0; i < countries.length; i++) {
      for (let j = 0; j < this.finalCountryData.length; j++) {
        if (countries[i].countryName === this.finalCountryData[j][0]) {
          data.datasets.push({
            label: countries[i].countryName,
            fill: false,
            backgroundColor: colors[i],
            borderColor: colors[i],
            pointBorderColor: colors[i],
            pointBackgroundColor: colors[i],

            data: [...this.finalCountryData[j]].slice(1),
          });
          data.labels = this.timeLabels;

          // console.log("j" + j);
          // console.log(this.finalCountryData[j]);
        }
      }
    }
    // console.log(indexOfSelected);
    // console.log(data);

    return (
      <div className="mh-70 p-0 m-0" style={{ overflowX: "auto" }}>
        <Line
          ref="chart"
          data={data}
          options={options}
          width={1700}
          height={650}
        />
      </div>
    );
  }
}

export default LineChart;
