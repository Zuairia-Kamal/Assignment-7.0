import { Suspense } from "react";
import Footer from "./Components/Footer";
import IssuesManagement from "./Components/IssueManagement";
import Navbar from "./Components/Navbar";
import Loading from "./Components/Loading";
const fetchIssues = async () => {
  const result = await fetch("/data.json");
  return result.json();
};

function App() {
  const fetchPromise = fetchIssues();

  return (
    <div>
      <Navbar />

      <Suspense fallback={<Loading />}>
        <IssuesManagement fetchPromise={fetchPromise} />
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;