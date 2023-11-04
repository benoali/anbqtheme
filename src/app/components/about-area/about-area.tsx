'use client'
import React from "react";
import Image, { StaticImageData } from "next/image";
import img1 from "@/assets/img/presentedby/coindesk.png";
import img2 from "@/assets/img/presentedby/cryptonews.png";
import img3 from "@/assets/img/presentedby/cointelepgraph.png";
import img4 from "@/assets/img/presentedby/newsbtc.png";
import img5 from "@/assets/img/presentedby/techopedia.png";

import imgsoon1 from "@/assets/img/presentedsoon/soon11.png";
import imgsoon2 from "@/assets/img/presentedsoon/soon12.png";
import imgsoon3 from "@/assets/img/presentedsoon/soon13.png";
import imgsoon4 from "@/assets/img/presentedsoon/soon14.png";
import imgsoon5 from "@/assets/img/presentedsoon/soon15.png";
import imgsoon6 from "@/assets/img/presentedsoon/soon16.png";
import imgsoon7 from "@/assets/img/presentedsoon/soon17.png";
import imgsoon8 from "@/assets/img/presentedsoon/soon18.png";
import imgsoon9 from "@/assets/img/presentedsoon/soon19.png";

import introduit1 from "@/assets/img/presentedsoon/introduit11.png";
import introduit2 from "@/assets/img/presentedsoon/introduit12.png";
import introduit3 from "@/assets/img/presentedsoon/introduit13.png";
import introduit4 from "@/assets/img/presentedsoon/introduit14.png";

import TextAnimation from "../common/text-animation";

// nav button
type INavProps = {id: string;img: StaticImageData;isActive?:boolean}
function NavBtn({id,img,isActive}:INavProps) {
  // handle open search
  const handleClickSound = (audioPath: string) => {
    const audio = new Audio(audioPath);
    audio.play();
  };
  return (
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link ${isActive ? "active" : ""}`}
        id={`about${id}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#about${id}`}
        type="button"
        role="tab"
        aria-controls={`about${id}`}
        aria-selected={isActive?'true':'false'}
        tabIndex={-1}
        onClick={() => handleClickSound('/assets/audio/tab.mp3')}
      >
        <span className="img-shape"></span>
        <Image src={img} alt="img" />
      </button>
    </li>
  );
}

// tab content item
// prop type
type ITabProps = {
  id: string;
  img: StaticImageData;
  title: string;
  rate: string;
  isActive?: boolean;
}

const AboutArea = () => {
  return (
    <section className="about__area section-pt-130 section-pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section__title text-center mb-60">
              <TextAnimation title="" />
              <h3 className="title">Présenté par</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="about__tab-wrap">
{/*              <div className="about__buttons">
                <Link href="/shop" className="tg-btn-2">
                  buy Hero
                </Link>
                <Link href="/shop" className="tg-btn-2 -secondary">
                  buy nfts
                </Link>
              </div>*/}
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li><Image src={img1} alt="Coin Desk" width={250} /></li>
                <li><Image src={img2} alt="cryptonews" width={270}  /></li>
                <li><Image src={img3} alt="cointelepgraph" width={270}  /></li>
                <li><Image src={img4} alt="newsbtc" width={220}  /></li>
                <li><Image src={img5} alt="techopedia" width={250}  /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
<br />
<br />
<br />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section__title text-center mb-60">
              <TextAnimation title="" />
              <h3 className="title">Introduit dans</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="about__tab-wrap">
              {/*              <div className="about__buttons">
                <Link href="/shop" className="tg-btn-2">
                  buy Hero
                </Link>
                <Link href="/shop" className="tg-btn-2 -secondary">
                  buy nfts
                </Link>
              </div>*/}
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                {/*
                <Image src={imgsoon1} alt="binance" width={210} />
*/}
                <Image src={introduit1} alt="" width={120}  />
                <Image src={introduit2} alt="" width={120}  />
                <Image src={introduit3} alt="" width={120}  />
                <Image src={introduit4} alt="" width={120}  />

              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section__title text-center mb-60">
              <TextAnimation title="" />
              <h3 className="title">Prochainement dans</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="about__tab-wrap">
              {/*              <div className="about__buttons">
                <Link href="/shop" className="tg-btn-2">
                  buy Hero
                </Link>
                <Link href="/shop" className="tg-btn-2 -secondary">
                  buy nfts
                </Link>
              </div>*/}
              <ul className="nav nav-tabs" id="myTab" role="tablist">
{/*
                <Image src={imgsoon1} alt="binance" width={210} />
*/}
                <Image src={imgsoon2} alt="" width={120}  />
                <Image src={imgsoon3} alt="" width={120}  />
                <Image src={imgsoon4} alt="" width={120}  />
                <Image src={imgsoon5} alt="" width={120}  />
                <Image src={imgsoon1} alt="" width={120}  />
                <Image src={imgsoon6} alt="" width={120}  />
                <Image src={imgsoon7} alt="" width={120}  />
                <Image src={imgsoon8} alt="" width={120}  />
                <Image src={imgsoon9} alt="" width={120}  />
{/*
                <Image src={imgsoon8} alt="xt" width={200}  />
*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
