import React from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { data } from "../data/data.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleList from "./ArticleList.js";


import axios from "axios";
const api = axios.create({
  baseURL: `http://localhost:5000/api/categorys/`//api/category/
})

const CategoryList = () => {
  const [categorys, setCategorys] = useState(data);
  //const categorys = data
  useEffect(() => {
    console.log('first load cats: ' + categorys);
    getCategorys()
  }, []);




  const getCategorys = () => {
    api.get('/default')
      //.then(console.log("after get CL"))
      .then(res => {
        //console.log(res.data[0].list)
        setCategorys(res.data[0].list)

        setCategorys(categorys => ["home", ...categorys])
        //const ace = res.data[0].list;
        //console.log("ace: ")
        //console.log(ace)
      })
      .then(console.log('forth load cats: ' + categorys))
  }

  const getCategorys2 = () => {
    setCategorys(["1", "ccp", "3"])

  }

  const postCategory = () => {

  }







  function goTo(category) {
    //console.log('banana')
    navigate(category)
  }
  let navigate = useNavigate();
  return (
    <div>
      <Navbar bg="info" expand="lg" >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {categorys.map((category) => {
                return (
                  <div>
                    <NavDropdown.Item href='#' onClick={() => goTo(category)}>
                      {" "}
                      {category}
                    </NavDropdown.Item>
                  </div>
                );
              })}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Routes>
          {
            categorys.map((category) => {
              return (
                <Route path={category} element={<ArticleList />} />
              )
            })
          }
        </Routes>
      </div>
    </div>
  );
};

export default CategoryList;
/*



href='#'useNavigate({category})

    <div>
      <Navbar bg="info" expand="lg" >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {categorys.map((category) => {
                return (
                  <div>
                    <NavDropdown.Item href={category}>
                      {" "}
                      {category}
                    </NavDropdown.Item>
                  </div>
                );
              })}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>



    <div>
    <p>test</p>
    <Routes>
      {
        categorys.map((category) => {
          return(
              <Route path={category} element={<ArticleList />}/>
          )
        })
      }
    </Routes>
    </div>




*/