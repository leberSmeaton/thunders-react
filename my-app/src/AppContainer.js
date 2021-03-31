import React from "react";
import Search from "./Search";
import MainRow from "./MainRow";
import FunDescription from "./FunDescription";

export default function AppContainer() {
  return (
    <div>
      <div className="AppContainer">
      {/*Search Row*/}
      <Search />

      {/*Main Row - with Empty and Temperature Card*/}
      <MainRow />

      {/*Fun Description Row*/}
      <FunDescription />
      </div>
    </div>
  );
}
