
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { useState, useEffect } from "react";
import { data } from "./data/data.js";




import { Routes, Route, Router } from "react-router-dom";
import ArticleList from './components/ArticleList';
import Article from './components/Article';

function App() {
  const [categorys, setData] = useState(data);

  return (
    <div>
    <Header/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/articlelist' element={<ArticleList/>}/>
      {
        categorys.map((category) => {
          return (
      <Route exact path={'/'+ category} element={<ArticleList category={category}/>}/>
          )
      })
      }
      {
        categorys.map((category) => {
          return (
      <Route path={'/'+ category +'/:title'} element={<Article />}/>
          )
      })
      }
      
    </Routes>

    
    </div>

  );
}

export default App;


/*
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/ccp' element={<CCP/>}/>
      <Route path='/home' element={<LandingPage/>}/>
      <Route path='/ccp/:id' element={<Article/>}/>
      <Route path ='/login' element={<LogIn/>}/>


    </Routes>
    </BrowserRouter>


      <Route  path={'/'+ category + '/:title'} element={<Article title={"yo"}/>}/>


    {
        categorys.map((category) => {
          return (
            
      <Route exact path={'/'+ category +'/:title'} element={<Article title={title}/>}/>
          )
      })
      }




*/

