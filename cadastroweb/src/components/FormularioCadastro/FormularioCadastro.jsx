import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  return (
    <form>
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth="true"
        margin="dense"
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth="true"
        margin="dense"
      />
      <TextField
        id="cpf"
        label="cpf"
        variant="outlined"
        fullWidth="true"
        margin="dense"
      />

      <FormControlLabel
        control={
          <Switch
            defaultChecked
            name="Promoções"
            color="primary"
          />
        }
        label="Promoções"
      />

      <FormControlLabel
        control={
          <Switch
            defaultChecked
            name="Novidades"
            color="primary"
          />
        }
        label="Novidades"
      />

      <Button variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
