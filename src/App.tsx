import { useState } from "react";
import Layout from "./components/layout";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import MyRecordPage from "./pages/my-record";
import ColumnPage from "./pages/column";

const LIST_ROUTE = [
  { path: "/", page: <HomePage />, layout: Layout },
  { path: "/my-record", page: <MyRecordPage />, layout: Layout },
  { path: "/column-list", page: <ColumnPage />, layout: Layout },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {LIST_ROUTE.map(({ path, page, layout: Layout }) => (
          <Route key={path} path={path} element={<Layout>{page}</Layout>} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
