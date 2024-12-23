import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Find The Job That Fits Your Life</h1>
        <p className="home-description">
          Millions of people are searching for a jobs, salary information,
          company reviews. Find the job that fits your abilities and potentials
        </p>
        <Link to="/jobs">
          <button className="find-jobs-button">Find Jobs</button>
        </Link>
      </div>
    </div>
  </>
)

export default Home
