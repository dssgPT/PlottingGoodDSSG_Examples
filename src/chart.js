import { AxisLeft, AxisBottom } from "@visx/axis";
import { scaleTime, scaleLinear, scaleOrdinal } from "@visx/scale";
import { LinePath, Area } from "@visx/shape";
import { Group } from "@visx/group";
import { Grid, GridRows } from "@visx/grid";
import {
  Annotation,
  Label,
  Connector,
  CircleSubject,
  LineSubject,
} from "@visx/annotation";
import { min, max } from "d3-array";
import * as _ from "lodash";
import { tidy, filter } from "@tidyjs/tidy";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

export default function Chart(props) {
  const filteredData = _.filter(props.data, function (o) {
    return (
      o.nome_infraestrutura === props.selectedInfra &&
      o.medida === "percentagem" &&
      o.data !== "2022-03-01"
    );
  });
  filteredData.map((el) => (el["date_object"] = new Date(el.data)));
  filteredData.sort(function (a, b) {
    return a.date_object - b.date_object;
  });

  const width = window.screen.width;
  const height = 500;
  var margin = { top: 20, right: 60, bottom: 40, left: 30 };
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  let time = [];
  filteredData.map((el) => time.push(el["date_object"]));
  let resumoArray = [];
  filteredData.map((el) => resumoArray.push(Number(el.resumo_infraestrutura)));

  const timeScale = scaleTime({
    domain: [min(time), max(time)],
    range: [0, xMax],
  });
  const linearScale = scaleLinear({
    domain: [0, 100],
    range: [yMax, 0],
  });

  let selectedColor;
  let maxRange;
  let minRange;
  if (props.selectedRange === "very low") {
    selectedColor = "#AE2012";
    minRange = 0;
    maxRange = 20;
  } else if (props.selectedRange === "low") {
    selectedColor = "#BB3E03";
    minRange = 20;
    maxRange = 40;
  } else if (props.selectedRange === "medium") {
    selectedColor = "#EE9B00";
    minRange = 40;
    maxRange = 60;
  } else if (props.selectedRange === "high") {
    selectedColor = "#94D2BD";
    minRange = 60;
    maxRange = 80;
  } else if (props.selectedRange === "very high") {
    selectedColor = "#005F73";
    minRange = 80;
    maxRange = 100;
  }

  const numMonthsInRange = tidy(
    filteredData,
    filter(
      (d) =>
        d.resumo_infraestrutura > minRange && d.resumo_infraestrutura < maxRange
    )
  );

  return (
    <div>
      {props.selectedRange !== "" ? (
        <p>
          A quantidade de água armazenada em {props.selectedInfra} esteve entre
          os {minRange}% e os {maxRange}% em {numMonthsInRange.length}{" "}
          {numMonthsInRange.length !== 1 ? "meses" : "mês"}
        </p>
      ) : null}

      <svg width={width} height={height}>
        <Group left={margin.left} top={margin.top}>
          {props.selectedRange !== "" ? (
            <rect
              width={xMax}
              height={linearScale(0) - linearScale(20)}
              x={timeScale(min(time))}
              y={linearScale(maxRange)}
              fill={selectedColor}
              className={"area"}
              opacity={0.3}
            ></rect>
          ) : null}
          {filteredData.map((el) => {
            console.log(el.resumo_infraestrutura);
            return (
              <>
                <Tippy
                  content={
                    <>
                      <div>{el.data}</div>
                      <div>{el.resumo_infraestrutura}</div>
                    </>
                  }
                >
                  <circle
                    // key={Math.random()}
                    cx={timeScale(el.date_object)}
                    cy={
                      el.resumo_infraestrutura === "n/d"
                        ? linearScale(0)
                        : linearScale(el.resumo_infraestrutura)
                    }
                    r={8}
                    fill="transparent"
                  ></circle>
                </Tippy>
                {/* {Number(el.resumo_infraestrutura) === min(resumoArray) ||
                Number(el.resumo_infraestrutura) === max(resumoArray) ? (
                  <Annotation
                    x={timeScale(el.date_object)}
                    y={linearScale(el.resumo_infraestrutura)}
                  >
                    <Connector> </Connector>
                    <Label
                      horizontalAnchor={"auto"}
                      title={
                        Number(el.resumo_infraestrutura) === min(resumoArray)
                          ? "Valor mais baixo"
                          : "Valor mais elevado"
                      }
                    />

                    {/* <CircleSubject /> */}
                {/* </Annotation>
                ) : null} */}
              </>
            );
          })}
          <LinePath
            //   strokeWidth={3}
            data={filteredData}
            x={(el) => timeScale(el.date_object)}
            y={(el) =>
              el.resumo_infraestrutura === "n/d"
                ? linearScale(0)
                : linearScale(el.resumo_infraestrutura)
            }
            stroke={"#012a4a"}
            strokeWidth={"1px"}
          />
          <AxisLeft scale={linearScale} numTicks={6}></AxisLeft>
          <AxisBottom scale={timeScale} top={yMax} numTicks={10}></AxisBottom>
          <Grid
            xScale={timeScale}
            yScale={linearScale}
            width={xMax}
            height={yMax}
            stroke="black"
            strokeOpacity={0.1}
            numTicksRows={6}
            strokeDasharray="5,4"
          />
        </Group>
      </svg>
    </div>
  );
}
