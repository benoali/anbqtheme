import React from "react";
import bg from "@/assets/img/bg/bg_airdrop.jpg";
import imageAD from "@/assets/img/others/airdrop.png";
import Image from "next/image";

const airdrop = () => {
    return (
    <section
        className="team__area team-bg section-pt-130 section-pb-100"
        style={{backgroundImage:`url(${bg.src})`}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-10">
                    <div className="section__title text-center mb-60">
                        {/*<TextAnimation title="our team member" />*/}
                        <h3 className="title">Référencez vos amis et gagnez 10% de leur investissement</h3>

                    </div>
                    <Image src={imageAD} alt="kucoin" width={500}  />
                </div>
            </div>
        </div>
    </section>
    );
}

export default airdrop;