'use client'
import React from "react";
import bg from "@/assets/img/bg/bg_swap.jpg";
import Link from 'next/link';
import Image from "next/image";
import img1 from "@/assets/img/others/swap.png";


const swap = () => {
    return (
        <section
            className="team__area team-bg section-pt-130 section-pb-100"
            style={{backgroundImage:`url(${bg.src})`}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <div className="section__title text-center mb-60">
                            {/*<TextAnimation title="our team member" />*/}
                            <h3 className="title">LE SEUL JEUX NFT QUI GARANTIT LA DISTRIBUTION DE 80% DES RECETTES SUR LES GAINS DES JOUEURS</h3>
{/*                            <div className="about__buttons">
                                <Link href="#" className="tg-btn-2">
                                    ETH
                                </Link>
                                <Link href="#" className="tg-btn-2 -secondary">
                                    USDT
                                </Link>
                            </div>*/}
                        </div>
                        <center><Image src={img1} alt="Coin Desk" width={500} /></center>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default swap;