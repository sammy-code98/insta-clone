import React, { useEffect } from "react";
import Header from "../components/Header";
import Timeline from "../components/Timeline";
import Sidebar from "../components/Sidebar";
function Dashboard() {
  useEffect(() => {
    document.title = "insta-clone";
  });
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid grid-cols-3  gap-4 justify-between mx-auto max-w-screen-lg">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}

export default Dashboard;
