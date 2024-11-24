import './App.css';
import { DataContextProvider } from './Components/Context';
import { DataContextProvider1 } from './Components/Context1';
import Dashboard from "./Components/Dashboard.jsx";
import Layout from "./Components/Layout.jsx";

function App() {


  return (
    <div className="App">
      <DataContextProvider>
        <DataContextProvider1>
          <Layout>
            <Dashboard />
          </Layout>
        </DataContextProvider1>
      </DataContextProvider>
    </div>
  );
}

export default App;
