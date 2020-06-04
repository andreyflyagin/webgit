import React, {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from "axios";
import RepoHeader from './repo-header'


// import wave from '../assets/images/wave.jpg'

const Detail = () => {
    const [content, setContent] = useState(0)
    const {userName, repositoryName} =  useParams()
    const url = `/${repositoryName}`

    useEffect(() => {
        // axios.get(`/api/v1/repos`).then(it => {
        axios.get(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`).then(it => {
            setContent(it.data)
        })
    }, [])

    return (
        <div>
            <div>
                <RepoHeader title={userName} />
                <Link to={url}>список</Link>
            </div>
            <div id='description'>
                {content}
            </div>
        </div>
    )
}

Detail.propTypes = {}

export default Detail
