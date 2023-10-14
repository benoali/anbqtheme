

import { ConnectButton } from '@rainbow-me/rainbowkit';
import nft_data from "@/data/nft-data";
import NftItemBox from "@/app/components/nft-item/nft-item-box";
import React from "react";


const App = () => {
  return (

          <ConnectWallet />

  );
};

const ConnectWallet = () => {
  return <section>
      <div className="container">
          <div className="row justify-content-center">
              ========================
              <ConnectButton label="Sign in" />
              =============================
          </div>
      </div>
  </section>;
};

export default ConnectWallet;