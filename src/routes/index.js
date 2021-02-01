import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Servicos from "../pages/Servicos";
import Clientes from "../pages/Clientes";
import Contato from "../pages/Contato";
import Motion from "../components/Motion";

const Routes = () => {
  return (
    <Motion>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/clientes" component={Clientes} />
        <Route path="/contato" component={Contato} />
      </Switch>
    </Motion>
  );
};

export default Routes;
