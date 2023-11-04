import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/img/logo/logo_anbq_tr.png';
import social_data from '@/data/social-data';

// prop type 
type IProps = {
  isOffCanvasOpen:boolean;
  setIsOffCanvasOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const OffCanvas = ({isOffCanvasOpen,setIsOffCanvasOpen}:IProps) => {
    // handle close search
  const handleCloseOffCanvas = (audioPath: string) => {
    setIsOffCanvasOpen(false)
    const audio = new Audio(audioPath);
    audio.play();
  };
  return (
    <div className={`${isOffCanvasOpen?'offCanvas__menu-visible':''}`}>
     <div className="offCanvas__wrap">
          <div className="offCanvas__body">
              <div className="offCanvas__top">
                  <div className="offCanvas__logo logo">
                      <Link href="/">
                        <Image src={logo} alt="Logo" width={170} height={40} />
                      </Link>
                  </div>
                  <div className="offCanvas__toggle" onClick={() => handleCloseOffCanvas('/assets/audio/remove.wav')}>
                      <i className="flaticon-swords-in-cross-arrangement"></i>
                  </div>
              </div>
              <div className="offCanvas__content">
                  <h2 className="title">Référencez vos amis et gagnez 10% de  <span>leur investissement</span></h2>
                  <div className="offCanvas__contact">
                      <h4 className="small-title">NOUS CONTACTER</h4>
                      <ul className="offCanvas__contact-list list-wrap">
                          <li><Link href="tel:0033764538495">0033764538495</Link></li>
                          <li><Link href="mailto:info@webmail.com">walid@mail.com</Link></li>
                          <li>New Central Park W7 Street,New York</li>
                      </ul>
                  </div>
                  <div className="offCanvas__newsletter">
                      <h4 className="small-title">Souscrire</h4>
                      <form action="#" className="offCanvas__newsletter-form">
                          <input type="email" placeholder="Email"/>
                          <button type="submit"><i className="flaticon-send"></i></button>
                      </form>
                      <p>Inscrivez-vous à la newsletter, et ne ratez plus aucune nouveauté.</p>
                  </div>
                  <ul className="offCanvas__social list-wrap">
                    {social_data.map((s,i) => (
                      <li key={i}><Link href={s.link} target='_blank'><i className={s.icon}></i></Link></li>
                    ))}
                  </ul>
              </div>
              <div className="offCanvas__copyright">
                  <p>Copyright © {new Date().getFullYear()} - By <span>ANBQ</span></p>
              </div>
          </div>
      </div>
      <div onClick={()=> setIsOffCanvasOpen(false)} className="offCanvas__overlay"></div> 
    </div>
  );
};

export default OffCanvas;