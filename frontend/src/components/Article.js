import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

import './component.css';


const api = axios.create({
    baseURL: `http://localhost:5000/api/article/`//api/article//title
})

const Article = () => {

    const [titleText, setTitleText] = useState('');
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    const [id, setID] = useState('');

    const {title} = useParams();
    //axios get from /api/article/<article title>

    useEffect( () => {
        updateArticle()
        //console.log(titles)
        })

        const updateArticle = () => {
            api.get(`/${title}`).then(res => {
                api.get(`/${title}`)
                    .then(res => {
                        //setTitles(res.data)
                        //console.log("data from backend: ", res.data)
                        //const t = res.data
                        setAuthor(res.data[0].author)
                        setText(res.data[0].text)
                        setTitleText(res.data[0].title)
    
                    })
    
            })
    
        }



    return (
        <div className='article-container'>
            <p className='article-title'>
                article about {titleText}
            </p>
            <p className='article-author'>author:
            {author}
            </p>
            <p className='article-text'>
                text:
                {text}
            </p>
        </div>
    )
}

export default Article


/*
{title}

            <p>{title}</p>







        <div>
        <h3>article</h3>
        <p>URL = {title}</p>
        </div>




*/