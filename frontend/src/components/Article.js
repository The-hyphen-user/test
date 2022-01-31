import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";


const api = axios.create({
    baseURL: `http://localhost:5000/api/article/`//api/article//title
})

const Article = () => {

    const [titleText, setTitleText] = useState('');
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    const [id, setID] = useState('');

    const {title} = useParams();

    useEffect(() => {
        console.log("title changed to "+ title)
    }, [title])

    //axios get from /api/article/<article title>



    return (
        <div>
        <h3>article</h3>
        <p>URL = {title}</p>
        </div>
    )
}

export default Article


/*
{title}

            <p>{title}</p>

*/