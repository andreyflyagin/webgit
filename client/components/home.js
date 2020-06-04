import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import RepoHeader from './repo-header'

const Home = () => {
  // const [counter, setCounterNew] = useState(0)
  const { userName } = useParams()

  const [repoList, repoListChange] = useState([])

  useEffect(() => {
    // axios.get(`/api/v1/repos`).then(it => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then((it) => {
      repoListChange(it.data)
    })
  }, [])

  return (
    <div>
      <RepoHeader title={userName} />
      <ul>
        {repoList.map((value) => {
          const link = `/${userName}/${value.name}`
          return (
            <li key={link}>
              <Link to={link}>{value.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

Home.propTypes = {}

export default Home
