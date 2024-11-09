import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
    
    <Hero></Hero>
    <HomeCards/>
    <JobListings isHome={true}/>
    <ViewAllJobs/>
    </>
  )
}

export default HomePage;