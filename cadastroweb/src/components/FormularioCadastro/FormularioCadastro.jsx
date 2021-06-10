import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [cpf, setCpf] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobreNome, cpf);
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth="true"
        margin="dense"
      />
      <TextField
        value={sobreNome}
        onChange={(event) => {
          setSobreNome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth="true"
        margin="dense"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        id="cpf"
        label="cpf"
        variant="outlined"
        fullWidth="true"
        margin="dense"
      />

      <FormControlLabel
        control={<Switch defaultChecked name="Promoções" color="primary" />}
        label="Promoções"
      />

      <FormControlLabel
        control={<Switch defaultChecked name="Novidades" color="primary" />}
        label="Novidades"
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
