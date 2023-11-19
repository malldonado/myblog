/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
// import Post from './Post';
// import Header from './Header';
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/createPost";
import PostPage from './pages/PostPage';
import IndexPage from "./pages/indexPage";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={'/login'} element={<LoginPage/>} />
          <Route path={'/register'} element={<RegisterPage/>} />
          <Route path={'/create'} element={<CreatePost />} />
          <Route path={'/post/:id'} element={<PostPage/>} />
          <Route path={'/edit/:id'} element={<EditPost/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
