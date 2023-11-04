import { StaticImageData } from 'next/image';
import nft_1 from '@/assets/img/nft/ant1.png';
import nft_2 from '@/assets/img/nft/ant2.png';
import nft_3 from '@/assets/img/nft/ant3.png';
import nft_4 from '@/assets/img/nft/ant4.png';
import nft_5 from '@/assets/img/nft/ant5.png';
import nft_6 from '@/assets/img/nft/ant6.png';
import nft_7 from '@/assets/img/nft/ant7.png';
import nft_8 from '@/assets/img/nft/ant8.png';
import creator_1 from '@/assets/img/nft/nft_avatar.png';
import avatar_1 from '@/assets/img/nft/nft_avatar01.png';
import avatar_2 from '@/assets/img/nft/nft_avatar02.png';
import avatar_3 from '@/assets/img/nft/nft_avatar03.png';

// type 
export interface INftType {
  id: number;
  img: StaticImageData;
  title: string;
  description: string;
  creator: StaticImageData;
  creator_name: string;
  eth: number;
  trending?: boolean;
  classcss?: string;
  antname: string;
  anchor: string;
}

const nft_data:INftType[] = [
  {
    id:1,
    img:nft_1,
    title:'Minage de NFT',
    description:'en stockant le maximum de jetons',
    creator:creator_1,
    creator_name:'Wal RAM',
    eth:1.002,
    classcss: 'item__thumb',
    antname: 'ant 125',
    anchor: '/white-paper#nft1'
  },
  {
    id:2,
    img:nft_2,
    title:'Vente de NFT',
    description:'gagnés sur la place de marché du jeu',
    creator:creator_1,
    creator_name:'ABD',
    eth:1.,
    classcss: 'nft-item__bgmv',
    antname: 'ant 4354',
    anchor: '/white-paper#nft2'
  },
  {
    id:3,
    img:nft_3,
    title:'Combats de fourmilières',
    description:'en engageant des combats dans les fourmilières',
    creator:creator_1,
    creator_name:'MELO',
    eth:1.024,
    classcss: 'nft-item__bggr',
    antname: 'ant 654443',
    anchor: '/white-paper#nft3'
  },
  // trending
  {
    id:4,
    img:nft_4,
    title:'Combats contre le jeux',
    description:'vous pouvez gagner quotidiennement des jetons gratuitement',
    creator:avatar_1,
    creator_name:'Jon Max',
    eth:1.002,
    trending:true,
    antname: 'ant 098765',
    anchor: '/white-paper#nft3'
  },
  {
    id:5,
    img:nft_5,
    title:'Combats entre batailleurs',
    description:'gagnez jusqu’à 10000$ en engageant des combats entre bataillons',
    creator:avatar_2,
    creator_name:'Jon Max',
    eth:1.004,
    trending:true,
    antname: 'ant 125',
    anchor: '/white-paper#nft3'
  },
  {
    id:6,
    img:nft_6,
    title:'Combats en duel',
    description:'vous pouvez jouer contre vos amis',
    creator:avatar_3,
    creator_name:'Jon Max',
    eth:1.005,
    trending:true,
    antname: 'ant 987654',
    anchor: '/white-paper#nft3'
  },
  {
    id:7,
    img:nft_7,
    title:'Jackpot',
    description:'Un Jackpot sera distribué gratuitement et au hasard',
    creator:avatar_1,
    creator_name:'Jon Max',
    eth:1.006,
    trending:true,
    antname: 'ant 9876',
    anchor: '/white-paper#nft7'
  },
  {
    id:8,
    img:nft_8,
    title:'Parrainage',
    description:'A chaque fois où un joueur vous ajoute comme référence',
    creator:avatar_1,
    creator_name:'Jon Max',
    eth:1.006,
    trending:true,
    antname: 'ant 98765',
    anchor: '/white-paper#nft8'
  },
]

export default nft_data;