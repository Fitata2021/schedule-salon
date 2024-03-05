import "./App.css";
import {
  Home,
  Header,
  Appoinments,
  Stylists,
  Services,
  Report,
  CreateStylist,
  CreateService,
} from "./components";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appoinments" element={<Appoinments />} />
          <Route path="/stylists" element={<Stylists />} />
          <Route path="/services" element={<Services />} />
          <Route path="/report" element={<Report />} />
          <Route path="/create-stylist" element={<CreateStylist />} />
          <Route path="/create-service" element={<CreateService />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
