import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import { IPokemon } from "../../types/IPokemon";

interface TableProps {
  rows: IPokemon[];
}

const PokemonTable: React.FC<TableProps> = ({ rows }) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Nome", width: 130 },
    {
      field: "sprite",
      headerName: "Sprite",
      width: 130,
      renderCell: (params) => <img src={params.value} />,
    },
  ];
  return (
    <Container maxWidth="lg">
      <div style={{ height: 600, marginTop: "50px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          rowHeight={80}
          sx={{
            textTransform: "capitalize",
            "& .MuiDataGrid-cell > img": {
              width: "80px",
            },
            "& .MuiDataGrid-footerContainer": {
              textTransform: "lowercase",
            }
          }}
        />
      </div>
    </Container>
  );
};

export default PokemonTable;
