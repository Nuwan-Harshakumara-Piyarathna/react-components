import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditableTable from "./components/Table/EditableTable";
import Home from "./components/Home/Home";
import ChatBox from "./components/MessangerChat/Test";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={ChatBox} />
          <Route path="/table" exact component={EditableTable} />
          <Route path="/messanger" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
