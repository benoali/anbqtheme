import { StaticImageData } from 'next/image';
import trending_1 from '@/assets/img/trending/trending_1.jpg';
import trending_2 from '@/assets/img/trending/trending_2.jpg';
import trending_3 from '@/assets/img/trending/trending_3.jpg';

// type 
export interface TrendingType {
  id: number;
  img: StaticImageData;
  title: string;
  description: string;
}

const trending_data:TrendingType[] = [
  {
    id:1,
    img:trending_1,
    title:'SVEIN',
    description:'en stockant le maximum de jetons',
  },
  {
    id:2,
    img:trending_2,
    title:'VIGGO',
    description:'gagnés sur la place de marché du jeu',
  },
  {
    id:3,
    img:trending_3,
    title:'ODA',
    description:'en engageant des combats dans les fourmilières',
  }
]

export default trending_data;