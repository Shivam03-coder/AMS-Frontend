import React, { Suspense, lazy } from "react";
import "./app.css";
const Approutes = lazy(() => import("./routes/Approutes"));
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor } from "./app/Store";
import Loading from "./components/shared/loading/Apploading";

function App() {
  return (
    <div className="myApp ">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <PersistGate persistor={persistor}>
            <Approutes />
          </PersistGate>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
