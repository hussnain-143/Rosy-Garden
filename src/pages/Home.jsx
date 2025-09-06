import React from "react";
import Spinner from "../Components/feedback/Spinner";
import ToastMessage from "../Components/feedback/ToastMessage";
import ToastContainer from "../components/layouts/ToastContainer";
import Button from "../Components/ui/Button";
const Home = () => {
  return (
    <>
      <div className="container max-w-[1200px] mx-auto mt-10">
          <div>
              <div className="flex flex-col lg:flex-row">
                <div>
                  <img src="/hero-s/1.svg" alt="" srcset="" />
                </div>
                <div></div>
                <div></div>
              </div>
              <div>
                <h2 className="text-8xl text-black font-didot">
                    The Ultimate <br /> <span className="text-center">Flower</span> <br /> <span className="text-end">Destination</span>

                </h2>
              </div>
          </div>
      </div>
    </>
  );
};

export default Home;
