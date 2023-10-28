import React from "react";
import Link from "next/link";
import Image from "next/image";
import { INftType } from "@/data/nft-data";

const NftItemBox = ({ item }: { item: INftType }) => {
  return (
      <div className="nft-item__box">
        <div className="nft-item__thumb">
          <Link href="">
            <Image src={item.img} alt="img" />
          </Link>
        </div>
        <div className="nft-item__content">
          <h4 className="title">
            <Link href="">{item.title}</Link>
          </h4>
          <div className="nft-item__avatar">
            <div className="avatar-img">
              <span className="ant_block">
                {item.description}...
              </span>
{/*              <Link href="">
                <Image src={item.creator} alt="img" />
              </Link>*/}
            </div>
            <div className="avatar-name">
              <h5 className="name">
                {/*<Link href="">{item.creator_name}</Link>*/}
              </h5>
{/*
              <span className="designation">Creator</span>
*/}
            </div>
          </div>
          <div className="nft-item__bid">
            <div className="nft-item__price">
{/*              <p>
                {item.eth}
                <span className="currency">Eth</span>
              </p>*/}
              <Link href={item.anchor} className="bid-btn">
                 <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default NftItemBox;
