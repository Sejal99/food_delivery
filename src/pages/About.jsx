import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <section className='mb-[200px] mt-12 mx-5 flex items-center justify-center'>
      <div className='mx-auto max-w-7xl px-2 lg:px-0'>
        <div className='mx-auto  max-w-3xl md:text-center'>
          <h2 className='text-3xl font-bold leading-tight text-black dark:text-brand-beige sm:text-4xl lg:text-5xl lg:leading-tight'>
            YOU ARE , WHAT YOU EAT
          </h2>
          <p className='mx-auto p-4 rounded-lg mt-4 max-w-2xl text-left border-2 border-brand-red text-xl text-blue-400'>
            "Welcome to BiteRush! Immerse yourself in the realm of irresistible cravings through our innovative food ordering app.
             Born as an academic project, we've meticulously woven together the finest traits from your beloved platforms. 
             Embark on a journey to uncover culinary treasures from nearby eateries, reminiscent of the experiences you cherish with Zomato and Swiggy. 
            Although not tailored for practical application, we serve as your gateway to savor the digital spectrum of gastronomic technology and innovation!
          </p>
        </div>

        <div className='mt-8 md:ml-[150px] grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-16 lg:gap-x-12'></div>
        <div className='mt-8 text-center md:mt-16'>
          <a href='https://gyandeeparyan-dev.netlify.app/#projects' target="_blank">
           
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
