import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({aoEnviar, validarCPF}) {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}});
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobreNome, cpf, promocoes, novidades});
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
        fullWidth
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
        fullWidth
        margin="dense"
      />
      <TextField
        onBlur={(event)=>{
          const ehValido = validarCPF(event.target.value);
          setErros({cpf:ehValido});
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        id="cpf"
        label="cpf"
        variant="outlined"
        fullWidth
        margin="dense"
      />

      <FormControlLabel
        control={<Switch 
                    onChange={(event) => {
                      setPromocoes(event.target.checked);
                    }} 
                    checked={promocoes} 
                    name="Promoções" 
                    color="primary" />}
        label="Promoções"
      />

      <FormControlLabel
        control={<Switch 
                    onChange={(event) => {
                      setNovidades(event.target.checked);
                    }} 
                    checked={novidades} 

                    name="Novidades" 
                    color="primary" />}
        label="Novidades"
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
