import { useState } from "react";
import "./App.css";
import MainContent from "./MainContent";
import NavigationBar from "./NavigationBar";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div>
      <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <MainContent activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
