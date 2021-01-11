import React, { Component } from "react";
import Menu from "./Menu";
import ResultsTable from "./ResultsTable";
const axios = require("axios");

export class App extends Component {
  state = {
    data: [],
    headers: [],
    loading: false,
  };

  getNamesOrderedBy = (orderBy) => {
    this.setState(
      {
        loading: true,
      },
      () => {
        axios
          .get(`/api/names?orderBy=${orderBy}`)
          .then((res) => {
            this.setState({
              data: res.data,
              headers: ["Name", "Amount"],
              loading: false,
            });
          })
          .catch((err) => {
            console.log(err);
            this.setState({
              loading: false,
            });
          });
      }
    );
  };

  getName = (name) => {
    this.setState(
      {
        loading: true,
      },
      () => {
        axios
          .get(`/api/names?name=${name}`)
          .then((res) => {
            this.setState({
              data: res.data,
              headers: ["Name", "Amount"],
              loading: false,
            });
          })
          .catch((err) => {
            console.log(err);
            this.setState({
              loading: false,
            });
          });
      }
    );
  };

  getTotalAmount = () => {
    this.setState(
      {
        loading: true,
      },
      () => {
        axios
          .get("/api/names/total")
          .then((res) => {
            this.setState({
              data: res.data,
              headers: ["Total"],
              loading: false,
            });
          })
          .catch((err) => {
            console.log(err);
            this.setState({
              loading: false,
            });
          });
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <div id="contents">
          <header>
            <h1 id="title">Solita Name Application</h1>
            <a
              id="github-link"
              href="https://github.com/ninopenttinen/Solita-Name-Application"
            >
              Github: ninopenttinen
            </a>
          </header>
          <Menu
            getTotalAmount={this.getTotalAmount}
            getNamesOrderedBy={this.getNamesOrderedBy}
            getName={this.getName}
          />
          {this.state.data.length !== 0 ? (
            <ResultsTable data={this.state.data} headers={this.state.headers} />
          ) : (
            <p style={{ margin: "5%" }}>No results</p>
          )}
        </div>
        {this.state.loading ? <div id="wait-layer"></div> : null}
      </React.Fragment>
    );
  }
}

export default App;
