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

    useEffect( () => {
        updateArticle()
        //console.log(titles)
        })

        const updateArticle = () => {
            api.get(`/${title}`).then(res => {
                api.get(`/${title}`)
                    .then(res => {
                        //setTitles(res.data)
                        console.log("data from backend: ", res.data)
                        //const t = res.data
                        setAuthor(res.data[0].author)
                        setText(res.data[0].text)
                        setTitleText(res.data[0].title)
    
                    })
    
            })
    
        }



    return (
        <div>
            <p>
                article about {titleText}
            </p>
            <p>author:
            {author}
            </p>
            <p>
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