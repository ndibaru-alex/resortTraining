import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
export class Services extends Component {

    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktail for all",
                info:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
                icon:<FaHiking/>,
                title:"free Hiking for all",
                info:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
                icon:<FaShuttleVan/>,
                title:"free Shuttle van for all",
                info:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
                icon:<FaBeer/>,
                title:"Stongest Beer",
                info:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            }
        ]
    }

    render() {
        return (
            <section className="services">
               <Title title='services'></Title>
            <div className='services-center'>
            {this.state.services.map((item,index)=>{
              return<article key={index} className='services'>
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
              </article>  
            })}
            </div>
            </section>  
        )
    }
}

export default Services
