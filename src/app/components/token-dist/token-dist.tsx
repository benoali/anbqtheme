import React from "react";
import Image from "next/image";
import bg from '@/assets/img/bg/team_bg.jpg';
import TextAnimation from "../common/text-animation";
import pieChart from '@/assets/img/distribution/chart1.png';


const TokenDIst = () => {
  return (
    <section
      className="team__area team-bg section-pt-130 section-pb-100"
      style={{backgroundImage:`url(${bg.src})`}} id="token-dist"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section__title text-center mb-60">
              <TextAnimation title="our team member" />
              <h3 className="title">TOKEN DISTRIBUTION</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <Image src={pieChart} alt="img" style={{width:'100%',height:'auto'}} />
        </div>
      </div>
    </section>
  );
};

export default TokenDIst;
