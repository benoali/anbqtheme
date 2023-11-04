'use client';

import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import HeroBanner from "./components/hero-banner/hero-banner";
import NftItemArea from "./components/nft-item/nft-item-area";
import AboutArea from "./components/about-area/about-area";
import GalleryArea from "./components/gallery/gallery-area";
import TeamArea from "./components/team/team-area";
import area_bg from "@/assets/img/bg/bg_presented.jpg";
import VideoArea from "./components/video/video-area";
import RoadMapArea from "./components/road-map/road-map-area";
import TrendingNftItems from "./components/nft-item/trending-nft-items";
import ConnectWallet from "./components/connect-wallet/connect-wallet";
import Footer from "@/layout/footer/footer";
import PieChart from "./components/chart/chart";

import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
    RainbowKitProvider,
    darkTheme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import DonutChart from "./components/chart/chart";
import Swap from "./components/swap/swap";
import Airdrop from "./components/airdrop/airdrop";

const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, base, zora],
    [
        alchemyProvider({ apiKey: 'yhz7HGpri0o8UnOh7MeJ4z2DMurUFS1Y' }),
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'walid',
    projectId: 'a02d95cd15e5dac0e2755f468f599a07',
    chains
});

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})

export default function Home() {
  return (
    <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} theme={darkTheme({
            accentColor: '#7b3fe4',
            accentColorForeground: 'white',
            borderRadius: 'small',
            fontStack: 'system',
            overlayBlur: 'small',
        })} >
    <Wrapper>
      {/* header start */}
        <main className="main--area">
            {/* hero banner start */}
            <HeroBanner />
            {/* hero banner end */}


            {/* nft item area start */}
            <Swap />
            {/* nft item area end */}

            {/* nft item area start */}
            <NftItemArea />
            {/* nft item area end */}

            {/* token dist area start */}
            <DonutChart />
            {/* token dist area end */}

            {/* road map area start */}
            <RoadMapArea />
            {/* road map area end */}


            {/* nft item area start */}
            <Airdrop />
            {/* nft item area end */}

            {/* video area start */}
            <VideoArea />
            {/* video area end */}

            {/* team area start */}
            <TeamArea />
            {/* team area end*/}


            {/* trending nft items start */}
            <TrendingNftItems />
            {/* trending nft items end */}

            {/* area-background-start */}
            <div
                className="area-background"
                style={{ backgroundImage: `url(${area_bg.src})` }}
            >
                {/* about-area */}

                <AboutArea />

                {/* about-area-end */}

                {/* gallery area start */}
                {/*
          <GalleryArea />
*/}
                {/* gallery area end */}
            </div>
            {/* area-background-end */}

        </main>
        {/* header end */}

      {/* main area start */}
      <Header />
      {/* main area end */}

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
        </RainbowKitProvider>
    </WagmiConfig>
  );
}
