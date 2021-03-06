import React, { Component } from 'react'
import {RoomContext} from '../context'
import Room from './Room'
import Title from './Title'

export class FeaturedRooms extends Component {

   static contextType= RoomContext

    render() {
        let { loading, featuredRooms: rooms} = this.context;
       rooms =rooms.map(room =>{
           return <Room key={room.id} room={room}></Room>
       })
        
        return (
            <section className='featured-rooms'>
                <Title title='Featured rooms'></Title>
                <div className='featured-rooms-center'>
                 { rooms}
                </div>
                
            </section>  
        )
    }
}
      
export default FeaturedRooms
