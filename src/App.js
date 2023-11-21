import React from "react";
import AppRoutes from "./routes";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <AppRoutes />
      <NavBar />
    </div>
  );
}

export default App;
