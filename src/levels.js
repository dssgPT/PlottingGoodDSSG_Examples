export default function Legend(props) {
  return (
    <>
      <p style={{ fontSize: "14px" }}>
        Escolhe uma das{" "}
        <span
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "lightgray",
            padding: "2px",
          }}
        >
          categorias
        </span>{" "}
        para descobrires durante quantos meses a percentagem de água armazenada
        ficou entre esses valores
      </p>
      <div style={{ display: "flex" }}>
        <div
          onClick={() => props.setSelectedRange("very low")}
          style={{
            backgroundColor:
              props.selectedRange === "very low" ? "#AE2012" : "white",
            fontWeight: props.selectedRange === "very low" ? 700 : 400,
            color: props.selectedRange === "very low" ? "white" : "#001219",
            cursor: "pointer",
            marginRight: "10px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor:
              props.selectedRange !== "very low" ? "lightgray" : "white",
            padding: "2px",
          }}
        >
          0 - 20
        </div>
        <div
          onClick={() => props.setSelectedRange("low")}
          style={{
            backgroundColor:
              props.selectedRange === "low" ? "#BB3E03" : "white",
            fontWeight: props.selectedRange === "low" ? 700 : 400,
            color: props.selectedRange === "low" ? "white" : "#001219",
            cursor: "pointer",
            marginRight: "10px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: props.selectedRange !== "low" ? "lightgray" : "white",
            padding: "2px",
          }}
        >
          20 - 40{" "}
        </div>
        <div
          onClick={() => props.setSelectedRange("medium")}
          style={{
            backgroundColor:
              props.selectedRange === "medium" ? "#EE9B00" : "white",
            fontWeight: props.selectedRange === "medium" ? 700 : 400,
            color: props.selectedRange === "medium" ? "white" : "#001219",
            cursor: "pointer",
            marginRight: "10px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor:
              props.selectedRange !== "medium" ? "lightgray" : "white",
            padding: "2px",
          }}
        >
          40 - 60{" "}
        </div>
        <div
          onClick={() => props.setSelectedRange("high")}
          style={{
            backgroundColor:
              props.selectedRange === "high" ? "#94D2BD" : "white",
            fontWeight: props.selectedRange === "high" ? 700 : 400,
            color: props.selectedRange === "high" ? "white" : "#001219",
            cursor: "pointer",
            marginRight: "10px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: props.selectedRange !== "high" ? "lightgray" : "white",
            padding: "2px",
          }}
        >
          60 - 80
        </div>
        <div
          onClick={() => props.setSelectedRange("very high")}
          style={{
            backgroundColor:
              props.selectedRange === "very high" ? "#005F73" : "white",
            fontWeight: props.selectedRange === "very high" ? 700 : 400,
            color: props.selectedRange === "very high" ? "white" : "#001219",

            cursor: "pointer",
            marginRight: "10px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor:
              props.selectedRange !== "very high" ? "lightgray" : "white",
            padding: "2px",
          }}
        >
          80 - 100
        </div>
        <div
          onClick={() => props.setSelectedRange("")}
          style={{
            cursor: "pointer",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "lightgray",
            padding: "2px",
          }}
        >
          Reset
        </div>
      </div>
    </>
  );
}
