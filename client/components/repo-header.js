import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const RepoHeader = (props) => (
  <div>
    <div id='repository-name'>{props.title}</div>
    <Link to="/" id="go-back">
      Home
    </Link>
    <br />
  </div>
)

RepoHeader.propTypes = {
  title: PropTypes.string
}

RepoHeader.defaultProps = {
  title: 'skillcrucial.com'
}

export default RepoHeader
