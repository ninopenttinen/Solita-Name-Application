import React, { Component } from "react";

export class Menu extends Component {
  state = {
    searchFieldValue: "",
  };

  handleValueChange = (e) => {
    this.setState({ searchFieldValue: e.target.value });
  };

  render() {
    return (
      <div id="menu">
        <button
          className="menu-button"
          onClick={() => this.props.getNamesOrderedBy("-amount")}
        >
          Popularity
        </button>
        <button
          className="menu-button"
          onClick={() => this.props.getNamesOrderedBy("name")}
        >
          Alphabetical order
        </button>
        <button
          className="menu-button"
          onClick={() => this.props.getTotalAmount()}
        >
          Total amount
        </button>
        <span id="search-field">
          <label
            id="search-field-label"
            htmlFor="search-field"
            onClick={() => this.props.getName(this.state.searchFieldValue)}
          >
            Search&nbsp;
          </label>
          <input
            id="search-field-input"
            type="text"
            autoComplete="off"
            spellCheck="false"
            placeholder="Name"
            value={this.state.searchFieldValue}
            onChange={this.handleValueChange}
          ></input>
        </span>
      </div>
    );
  }
}

export default Menu;
