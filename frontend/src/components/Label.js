import React from 'react'
import {Link, Route, BrowserRouter, Routes} from 'react-router-dom'
import Article from './Article'

const Label = ({address, title}) => {


    return (
        <div>
        <h2>label: </h2>
        <Link to={title}>{title}</Link>

        </div>
    )
}

export default Label



/*


<BrowserRouter>
    <Routes><Route path="/" component={<Article title={title}/>} />
        <Route path={ "/carnitas"} component={<Article title={title}/>} />

</Routes>
</BrowserRouter>

*/