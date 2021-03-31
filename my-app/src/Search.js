import React from "react";
import SearchForm from "./SearchForm";
import GeoTagButton from "./GeoTagButton";

export default function Search() {
  return (
    <div className="Search">
      <div className="col-sm-12">
        <SearchForm />
        <GeoTagButton />
      </div>
    </div>
  );
}
