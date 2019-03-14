import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  testData = {
    name: "James",
    friends: "Harris",
    skill: [3, 6, 7],
    goals: ["Japan", "Canada", "England"]
  };

  //                 {
  //   Object.keys(this.testData).map(item =>
  //     <div>
  //       {this.testData[item]}
  //     </div>
  //   )
  // }

  makeHeaders = object => {
    let tableKeys = Object.keys(object).map(item => <th>{item}</th>);
    return tableKeys;
  };

  componentDidMount() {
    let table = document.querySelector(".table");
    let tbody = document.querySelector("tbody");
    let tableRows = table.rows;

    const firstRowData = object => {
      let tableKeys = Object.keys(object).map((item, index) => {
        if (typeof object[item] === "string") {
          let row = tableRows[1];
          let cell = row.insertCell(index);
          cell.innerHTML = object[item];
        } else {
          for (let i = 0; i < object[item].length; i++) {
            if (tableRows[i + 1]) {
              let cell = tableRows[i + 1].insertCell(index);
              cell.innerHTML = object[item][i];
            }
          }
        }
      });
    };
    firstRowData(this.testData);
    const secondRowData = object => {
      const arrayOfData = [];
      const obj = this.testData;
      for (let keys in obj) {
        if (typeof obj[keys] !== "string") {
          arrayOfData.push(keys);
        }
      }
      // console.log(arrayOfData)
      for (let i = 0; i < arrayOfData.length; i++) {
        for (let j = 1; j < this.testData[arrayOfData[i]].length; j++) {
          let data = this.testData[arrayOfData[i]][j];
          console.log(data);
          if (tableRows[j + 1]) {
            let cell = tableRows[j + 1].insertCell();
            cell.innerHTML = data;
            // console.log(tableRows[j+1].insertCell(0))
          } else {
            let row = table.insertRow();
            let cell;
            for (let k = 0; k < this.testData[arrayOfData[i]].length; k++) {
              cell = row.insertCell();
            }
            cell.innerHTML = data;
          }
        }
      }
    };
    secondRowData(this.testData);
  }

  tableData = object => {
    let table = document.querySelector(".table");
    let tableKeys = Object.keys(object).map((item, index) => {
      if (typeof object[item] === "string") {
        return <td>{object[item]}</td>;
      } else {
        for (let i = 0; i < object[item].length; i++) {
          return <td>{object[item][i]}</td>;
        }
      }
    });
    return tableKeys;
  };

  addNewRow = () => {
    let table = document.querySelector(".table");
    let row = table.insertRow(-1);
    return row;
  };

  render() {
    return (
      <div className="App">
        <h1>Table App</h1>
        <div className="outside-wrapper">
          <table className="table" ref={ref => (this.table = ref)}>
            <thead>
              <tr>{this.makeHeaders(this.testData)}</tr>
            </thead>
            <tbody>
              <tr />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// <tr>{this.tableData(this.testData)}</tr>
