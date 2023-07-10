import React, { useEffect, useState } from "react";

import Dashboard from "./views/Dashboard";
import Form from "./views/Form";

import { fetchCatalogs, selectCatalogStatus } from "./state/catalogoSlice";
import { useAppSelector, useAppDispatch } from "./state/hooks";

function App() {
  const dispatch = useAppDispatch();
  const catalogsStatus = useAppSelector(selectCatalogStatus);
  const [switchView, setView] = useState(false);

  useEffect(() => {
    if (catalogsStatus === 'idle'){
      console.log('aaa');
      dispatch(fetchCatalogs())
    }
  }, []);

  return (
    <div className="flex flex-column h-full max-w-full justify-content-center  align-items-center">
      {switchView ? <Form /> : <Dashboard />}
    </div>
  );
}

export default App;
