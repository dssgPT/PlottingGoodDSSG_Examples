import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Dropdown(props) {
  const uniqueInfraestrutura = [
    ...new Set(props.data.map((infra) => infra.nome_infraestrutura)),
  ];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel>
          {props.selectedInfra.toUpperCase() === props.selectedInfra
            ? "Bacia"
            : "Albufeira"}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.selectedInfra}
          label={
            props.selectedInfra.toUpperCase() === props.selectedInfra
              ? "Bacia"
              : "Albufeira"
          }
          onChange={props.handleChangeInfra}
        >
          {uniqueInfraestrutura.map((el) => (
            <MenuItem value={el}>{el}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
