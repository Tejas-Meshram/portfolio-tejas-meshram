import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from 'swiper/modules';
import projects from "../data";



const Project = () => {

    return (
      <section id="projects" className="py-10 text-white">
        <div className="text-center">
          <h3 className="text-4xl mt-10 font-semibold">
            My <span className="text-cyan-600">Projects</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl px-5 mx-auto items-center relative">
        <div className="lg:w-full w-full">
          <Swiper 
            slidesPerView={1.2} 
            spaceBetween={20} 
            breakpoints={{
              768: {
                slidesPerView: 3,
              }
            }}
            loop={true}
            autoplay={{
              delay:3000
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            >
            {
              projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                      <img src={project.img} alt="" className="rounded-lg"/>
                      <h3 className="text-xl my-4">{project.name}</h3>
                      <div className="flex gap-3">
                        <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">Github</a>
                        <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">Live Demo</a>
                      </div>
                    </div>
                  </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
      </section>
    );
};

export default Project;
