import React, { useEffect } from "react";

import Dashboard from "./views/Dashboard";
import Form from "./views/Form";

import { getCelulares } from "./web/getService";
import { loadCelulares } from "./state/celularSlice";

function App() {
  useEffect(() => {
    getCelulares()
      .then((res) => loadCelulares(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-column h-full max-w-full justify-content-center  align-items-center">
      <Form />
    </div>
  );
}

export default App;
