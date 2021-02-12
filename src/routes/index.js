import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Servicos from "../pages/Servicos";
import Clientes from "../pages/Clientes";
import Contato from "../pages/Contato";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/sobre" component={Sobre} />
      <Route exact path="/servicos" component={Servicos} />
      <Route exact path="/clientes" component={Clientes} />
      <Route exact path="/contato" component={Contato} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
