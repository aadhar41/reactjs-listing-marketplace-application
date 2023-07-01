import TopBar from "./components/topbar/TopBar";
import React from 'react';
import Home from "./pages/homepage/Home";
import Detail from "./pages/listingdetail/Detail";

function App() {
  return (
    <div>
      <TopBar />
      {/* <Home /> */}
      <Detail />
    </div>
  );
}

export default App;
