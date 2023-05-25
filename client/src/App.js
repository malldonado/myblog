/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import IndexPage from "./pages/indexPage";
import RegisterPage from "./pages/registerPage";

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path={'/login'} element={<LoginPage/>} />
        <Route path={'/register'} element={<RegisterPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
