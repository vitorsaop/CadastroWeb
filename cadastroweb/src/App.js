import { Fragment } from "react";
import "./App.css";
import {Container, Typography} from "@material-ui/core"
import 'fontsource-roboto';
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h5" align="center" >Formulario de Cadastro</Typography>
      <FormularioCadastro />
    </Container>
  );
}

export default App;
