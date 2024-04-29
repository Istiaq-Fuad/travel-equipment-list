import "./index.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Layout>
      <Header />

      <div className="middle-section">
        <ItemList />
        <Sidebar />
      </div>
    </Layout>
  );
}

export default App;
