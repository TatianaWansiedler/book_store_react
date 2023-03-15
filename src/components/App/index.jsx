import { Route, Routes } from "react-router-dom";
import ArticlesPage from "../../pages/ArticlesPage";
import AuthorPage from "../../pages/AuthorPage";
import CompaniesPage from "../../pages/CompaniesPage";
import MainPage from "../../pages/MainPage";
import NotFoundPage from "../../pages/NotFoundPage";
import Footer from "../Footer";
import Header from "../Header";
import './style.css'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/author" element={<AuthorPage/>}/>
        <Route path="/companies" element={<CompaniesPage/>}/>
        <Route path="/articles" element={<ArticlesPage/>}/>
        <Route path="/*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
