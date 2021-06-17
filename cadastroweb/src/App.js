//import React, { Component } from "react";
import "./App.css";
import {Container, Typography} from "@material-ui/core"
import 'fontsource-roboto';
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h5" align="center" >Formulario de Cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length !== 11 && cpf.length > 0)   {
    return {valido:false, texto:"CPF deve ter 11 dígitos"}
  } else {
    return {valido:true, texto:""}
  }
}

export default App;
