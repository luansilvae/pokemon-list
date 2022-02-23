import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

import { IPokemon } from "../../types/IPokemon";

interface TableProps {
  rows: IPokemon[];
}

const PokemonTable: React.FC<TableProps> = ({ rows }) => {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Nº",
      width: 80,
      renderCell: (params) => (
        <strong>#{String(params.id).padStart(3, "0")}</strong>
      ),
    },
    { field: "name", headerName: "Nome", width: 130 },
    {
      field: "sprite",
      headerName: "Sprite",
      width: 130,
      renderCell: (params) => <img src={params.value} />,
    },
    {
      field: "details",
      headerName: "Detalhes",
      width: 130,
      renderCell: (params) => (
        <Link
          to={`/pokemon/${params.id}`}
          style={{ textTransform: "capitalize", textDecoration: "none" }}
        >
          <Button variant="contained" size="small" color="primary">
            Ver detalhes
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", alignItems: 'center'}}>
      <div style={{ height: "600px", marginTop: "50px", width: '700px'}}>
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
            },
          }}
        />
      </div>
    </Container>
  );
};

export default PokemonTable;
