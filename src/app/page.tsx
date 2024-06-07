  import React from "react";
  import Spline from '@splinetool/react-spline'

  const Home = () => {

    return (
      <>
      <div id="spline" className="absolute top-[30%] md:top-[20%] lg:top-[10%]">
        <Spline scene='https://prod.spline.design/z58LVgZSZqf3kozX/scene.splinecode' />
      </div>
      </>
    );
  };

  export default Home;