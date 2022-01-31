import React from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { data } from "../data/data.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleList from "./ArticleList.js";

const CategoryList = () => {
  //const [categorys, setData] = useState(data);
  const categorys = data
  useEffect(() => {
    //not needed while categorys are static
    console.log(categorys);
  });

  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];

  function goTo(category) {
    console.log('banana')
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
          return(
              <Route path={category} element={<ArticleList />}/>
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