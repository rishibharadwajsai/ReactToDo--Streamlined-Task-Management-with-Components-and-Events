import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { usePDF } from "react-to-pdf";

function App() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  return (
    <div ref={targetRef}>
      <Navbar></Navbar>
      <Form></Form>
      <center>
        <button className="btn btn-dark" onClick={() => toPDF()}>
          {" "}
          Download PDF
        </button>
      </center>
    </div>
  );
}

export default App;
