import React from 'react';
import nft_data from '@/data/nft-data';
import NftItemBox from './nft-item-box';
import TextAnimation from "@/app/components/common/text-animation";

const NftItemArea = () => {
    return (
        <section className="nft-item__area" id="how2earn">
            <div className="container custom-container">
                <div className="section__title text-center mb-60">
                    <h3 className="title">le 1er jeux NFT qui offre 8 moyens pour gagner</h3>
                    <TextAnimation title="gagner jusqu a 25K$ par mois" />
                </div>
                <div className="row justify-content-center">
                    {nft_data.map((item) => (
                        <div key={item.id} className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                            <NftItemBox item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NftItemArea;