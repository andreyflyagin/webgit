import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import RepoHeader from './repo-header'


// import wave from '../assets/images/wave.jpg'

const Home = () => {
  // const [counter, setCounterNew] = useState(0)
  const {userName} =  useParams()

  const [repoList, repoListChange] = useState([])

    const url = window.location.href
    const arr = url.split("/");
    const myUrl = `${arr[0]}//${arr[2]}`

    console.log(myUrl)

// headers: {"Origin": "http://localhost"}
// headers: {"Access-Control-Allow-Origin": "*"}
//   axios.get(`https://api.github.com/users/${userName}/repos`,{headers: {"Access-Control-Allow-Origin": "*"}}).then(it => {
// {headers: {"Access-Control-Allow-Origin": "*"}}

    useEffect(() => {
        // axios.get(`/api/v1/repos`).then(it => {
        axios.get(`https://api.github.com/users/${userName}/repos`).then(it => {
            repoListChange(it.data)
        })
    }, [])


  return (
    <div>
      <RepoHeader title={userName} />
      <ul>
        {repoList.map((value) => {
          const link = `/${userName}/${value.name}`
          return <li key={link}><Link to={link} >{value.name}</Link></li>
        })}
      </ul>
    </div>
  )
}

Home.propTypes = {}

export default Home
