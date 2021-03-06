import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomContainer from '../components/RoomContainer'

const Rooms = (props) => {
    
    return(
    <>
     <Hero hero='roomsHero'>
        <Banner title='' subtitle=''>
           <Link to='/' className='btn-primary'>return home</Link> 
        </Banner>
    </Hero>
    <RoomContainer></RoomContainer>
    </>
    );
};

export default Rooms
