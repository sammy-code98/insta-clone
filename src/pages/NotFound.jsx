import { useEffect } from "react";
import Header from "../components/Header"
function NotFound() {
    useEffect(() => {
        document.title = "404 || Not Found";
    },[])
  return (
    <div className="bg-gray-background">
      <Header/>
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-3xl font-mono italic text-gray-base font-bold">Not Found!</p>
      </div>
    </div>
  );
}

export default NotFound;
