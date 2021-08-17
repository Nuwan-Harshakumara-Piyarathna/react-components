import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditableTable from "./components/Table/EditableTable";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/table" exact component={EditableTable} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
