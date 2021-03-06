import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {withRoomConsumer} from '../context'

function RoomContainer({context}) {
    const {loading,sortedRooms,rooms}= context;
    return(
        <div>
       
        <RoomFilter rooms={rooms}/>
        <RoomList rooms={sortedRooms}/>
    </div>
     )
}

export default withRoomConsumer(RoomContainer)

/*import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {RoomConsumer} from '../context'
export default function RoomContainer() {
    return (
        <RoomConsumer>

            {
             (value)=>{
                 const {loading ,sortedRooms,rooms}=value
                 return(
                    <div>
                    hello from rooms container 
                    <RoomFilter rooms={rooms}/>
                    <RoomList rooms={sortedRooms}/>
                </div>
                 )
             }   
            }

        </RoomConsumer>
        
        
    )
}*/
