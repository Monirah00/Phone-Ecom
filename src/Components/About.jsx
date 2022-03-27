import React from 'react'
import { NavLink } from 'react-router-dom'
import AboutPic from '../Images/About.jpg'

const About = () => {
  return (
    <>
    <div className="container py-5 px-5">
      <div className="row text-center">
        <div className="col-12">
          <h2>ABOUT</h2>
          <hr />
        </div>

      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <p className='lead'>
            Lorem ipsum dolor sit amet, Atque minus, quae culpa natus ipsam, praesentium, debitis est ullam quas aliquid voluptatibus! Cumque animi quam mollitia molestias sapiente provident sit consequuntur praesentium? Magni at esse voluptatem ex quia autem voluptatibus voluptatum. Vero vel mollitia ipsam tempore dolores! Laudantium corporis, doloribus asperiores aut vitae vero sapiente esse non distinctio. Impedit doloremque ad id ab, quisquam reprehenderit quia ex iure qui consequatur cupiditate consequuntur dignissimos asperiores placeat voluptas tenetur sapiente est nobis ratione doloribus cumque laboriosam facilis! Fuga distinctio odio beatae tenetur obcaecati molestias quasi fugiat vitae, doloremque recusandae repudiandae necessitatibus praesentium rerum veritatis odit. Facilis fugit voluptas unde animi nostrum error nobis quidem quisquam amet molestias eius suscipit iure consequuntur non, sunt rem dignissimos nulla quas quos at possimus laborum a tenetur numquam? Ipsa placeat at est sint fuga quas, sed quidem earum reprehenderit reiciendis voluptatibus nisi eos dolores vero ex libero. Eaque nobis autem vel laudantium aut architecto magni quos earum ducimus accusantium, ea alias repellendus quaerat quia sequi aperiam, nesciunt consequatur hic dolores officia, voluptas omnis ratione quae suscipit! Tenetur deleniti officiis veniam saepe.
          </p>
          <NavLink to='/Contact' className='btn btn-outline-primary'>Contact Us</NavLink>
        </div>
        <div className="col-lg-6 col-sm-12">
          <img className='About-pic' src={AboutPic} alt='About Pic' />
        </div>
      </div>
    </div>
    </>
  )
}

export default About