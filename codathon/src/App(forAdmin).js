import ActivitySelectionPage from "./ActivitySelectionPage";
import App1 from "./App1";
import EmployeeTable from "./EmployeeTable";
import LineGraph from "./LineGraph";
import LoginPage from "./LoginPage";
import RadialChart from "./RadialChart";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <ActivitySelectionPage /> */}
      <LineGraph />
      {/* {<RadialChart />} */}
      {/* <LoginPage /> */}
      {/* <EmployeeTable /> */}
      <App1 />
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
