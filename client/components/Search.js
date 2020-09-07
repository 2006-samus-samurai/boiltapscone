import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'

// import dummyData2 from './dummyData2'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: []
    }
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  async componentDidMount() {
    try {
      const {data} = await axios.get(`/api/jobs`)
      this.setState({
        ///axios.get(`/api/:userId`
        jobs: data
      })
    } catch (err) {
      console.log(err)
    }
  }

  handleUpdate(keyword) {
    let filteredJobs = []
    this.state.jobs.filter(o => {
      if (
        o.company.toLowerCase().includes(keyword.toLowerCase()) ||
        o.title.toLowerCase().includes(keyword.toLowerCase()) ||
        o.location.toLowerCase().includes(keyword.toLowerCase())
      ) {
        filteredJobs.push(o)
      }

      return filteredJobs
    })
    console.log('FILTREDJOBS ARRAY', filteredJobs)
    //console.log("THIS.state.jobs BEFORE", this.state.jobs)
    this.setState({jobs: filteredJobs})
    console.log(' jobs AFTER', this.state.jobs)
  }

  render() {
    const {jobs} = this.state
    return (
      <div className="main">
        <SearchBar jobs={jobs} handleUpdate={this.handleUpdate} />
        <div className=" d-flex p-2 flex-wrap">
          {jobs.map(job => (
            <div key={job.id} className="card border col-sm-6 ">
              {/* <img
                src={job.company_logo}
                alt="company logo"
                className="img-thumbnail"
              /> */}
              <a href={`/jobs/${job.id}`}>
                <p className="card-title">{job.title}</p>
                <p className="card-text">@ {job.company}</p>
                <p className="card-text">in {job.location}</p>
              </a>
            </div>
          ))}
        </div>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Search
