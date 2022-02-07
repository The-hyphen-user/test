import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Label from './Label'


const api = axios.create({
    baseURL: `http://localhost:5000/api/category/`//api/category/
})

const ArticleList = ({ category }) => {
  const [titles, setTitles] = useState([]);

  /*
  useEffect(() => {
      console.log("get that api " + category)
        api.get("/" + category).then((res) => {
            console.log("categorgy: " + res.data);
          setTitles(res.data);
          //const t = res.data
        });
  }, []);

*/
///*
  useEffect(() => {
    getList();
  },[category])
//*/


const getList = () => {
  //console.log("getlist" + category)
  api.get('/' + category)
  //.then(console.log("after get" ))
        .then(res => {
          //console.log("after get2" )
            setTitles(res.data)
            //console.log("data from backend: ", res.data)
            //const t = res.data
        })
}



  return (
    <div>
    <p>hello</p>
        <p>{category} </p>
        <div>
            {titles.map((e) => {
                return <Label key={e._id} address={e._id} title = {e.title}></Label>
        })}
        </div>
        
    </div>
)
};

export default ArticleList;
