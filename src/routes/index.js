import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Servicos from "../pages/Servicos";
import Clientes from "../pages/Clientes";
import Contato from "../pages/Contato";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/servicos" component={Servicos} />
      <Route path="/clientes" component={Clientes} />
      <Route path="/contato" component={Contato} />
    </Switch>
  );
};

export default Routes;
