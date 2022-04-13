import "./App.css";
import data from "./assets/snirh_clean.json";
import Dropdown from "./dropdown";
import Chart from "./chart";
import { useState } from "react";
import Legend from "./levels";

function App() {
  const [selectedInfra, setSelectedInfra] = useState("ARADE");

  const handleChangeInfra = (event) => {
    setSelectedInfra(event.target.value);
  };

  const [selectedRange, setSelectedRange] = useState("");
  return (
    <div style={{ margin: "10px" }}>
      <div style={{ display: "flex", textAlign: "center" }}>
        <h2 style={{ paddingRight: "6px" }}>Como evoluiu em </h2>
        <Dropdown
          data={data}
          selectedInfra={selectedInfra}
          setSelectedInfra={setSelectedInfra}
          handleChangeInfra={handleChangeInfra}
        ></Dropdown>
        <h2 style={{ paddingLeft: "6px" }}>
          {" "}
          a quantidade de água armazenada?
        </h2>
      </div>
      <Legend
        selectedRange={selectedRange}
        setSelectedRange={setSelectedRange}
      ></Legend>
      <Chart
        data={data}
        selectedInfra={selectedInfra}
        selectedRange={selectedRange}
      ></Chart>
      <p style={{ fontSize: "12px" }}>
        {" "}
        Fonte:{" "}
        <a href="https://snirh.apambiente.pt/" target="_blank">
          SNIRH
        </a>{" "}
        (dados tratados pela DSSG)
      </p>
    </div>
  );
}

export default App;
