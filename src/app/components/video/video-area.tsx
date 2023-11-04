"use client";
import React, { useState } from "react";
import bg from "@/assets/img/bg/battle_bg.jpg";
import VideoPopup from "../common/video-popup";

const VideoArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <section className="video__area video-bg tg-jarallax" style={{backgroundImage:`url(${bg.src})`}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-11">
              <div className="video__content text-center">
                <a
                  className="popup-video cursor-pointer"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <i className="flaticon-play"></i>
                </a>
                <h2 className="title">
                  Le seul jeux NFT qui garantit la distribution de <span>80% des recettes sur les gains des joueurs</span>
                </h2>
                <p>Référencez vos amis et gagnez 10% de leur investissement</p>
{/*                <a
                  href="https://discord.com/"
                  target="_blank"
                  className="video__btn tg-btn-1"
                >
                  <span>join discord</span>
                </a>*/}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"ssrNcwxALS4"}
      />
      {/* video modal end */}
    </>
  );
};

export default VideoArea;
