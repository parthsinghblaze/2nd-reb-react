import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../redux/counterSlice";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";
import { Pagination } from "swiper";

function Home() {
  const dispatch = useDispatch();

  const { userName } = useSelector((state) => state.counter);
  return (
    <div className="container-fluid moveUpAnimation">
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            style={{ width: "100%", height: "40vw", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            style={{ width: "100%", height: "40vw", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            style={{ width: "100%", height: "40vw", objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>
      {/* <h1>Home Page</h1>
      <h3>My name is : {userName} </h3>
      <button onClick={() => dispatch(changeName())}>Change Name</button> */}
    </div>
  );
}

export default Home;
