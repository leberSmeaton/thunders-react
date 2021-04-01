import React from "react";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <form id="search-form">
        <input
          type="search"
          className="form-control"
          placeholder="Search new city"
          aria-label="Username"
          aria-describedby="basic-addon1"
          id="search-text-input"
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon1">
          🔍
        </button>
      </form>
    </div>
  );
}