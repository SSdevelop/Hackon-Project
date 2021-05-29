import React from 'react'
import Footer from '../../components/Footer/Footer'
//import Footer from '../../footer/Footer';
// import home from '../../assets/home.jpeg';
import './Home.css'

const Home = () => {
    return (
      <>
      <div>
        <div className='hero-container'>
          <img src='https://avondhupress.ie/wp-content/uploads/2020/10/Coronavirus-Covid-19-Web-Stock@23-09-2020-165410.jpg' alt='Home'/>
          {/* <img src={home} alt='Home'/> */}
          <h1>RESOURCE  LOCATOR</h1>
          
       </div>
       <Footer />
      </div> 
       
    </>
    );
}

export default Home