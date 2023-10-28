import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/img/logo/logo_anbq_tr.png';
import icon_1 from '@/assets/img/icons/social_icon02.png';
import icon_2 from '@/assets/img/icons/youtube.png';
import icon_3 from '@/assets/img/icons/telegram.png';
import icon_4 from '@/assets/img/icons/social_icon03.png';
import icon_5 from '@/assets/img/icons/tiktok.png';
import payment from '@/assets/img/others/payment_card.png';

const Footer = () => {
  return (
    <footer className="footer-style-one">
      <div className="footer__top-wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-7">
              <div className="footer-widget">
                <div className="footer-logo logo">
                  <Link href="/contact">
                    <Image src={logo} alt="Logo" width={160} height={36} />
                  </Link>
                </div>
                <div className="footer-text">
                  <p className="desc">Plongez dans l&aposaventure et rejoignez notre communauté en pleine croissance.</p>
                  <p className="social-title">Nous <span>SUIVRE <i className="fas fa-angle-double-right"></i></span></p>
                  <div className="footer-social">
                    <Link href="https://x.com/AntBattleQueen?s=07"><Image src={icon_1} alt="Twitter" width={30} height={30} /></Link>
                    <Link href="https://youtube.com/@AntBattleQueen?si=qNpl5uzxmZ7SWoj7"><Image src={icon_2} alt="Youtube" width={30} height={30} /></Link>
                    <Link href="https://t.me/AntBattleQueen1'"><Image src={icon_3} alt="Telegram" width={30} height={30} /></Link>
                    <Link href="https://instagram.com/antbattlequeen?igshid=OGQ5ZDc2ODk2ZA=="><Image src={icon_4} alt="Instagram" width={30} height={30} /></Link>
                    <Link href="http://tiktok.com/@antbattlequeen"><Image src={icon_5} alt="Tiktok" width={30} height={30} /></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title">quick link</h4>
                <ul className="list-wrap menu">
                  <li><Link href="#how2earn">Comment gagner</Link></li>
                  <li><Link href="#roadmap-map-area">Feuille de route</Link></li>
                  <li><Link href="/white-paper">Page blanche</Link></li>
                  <li><Link href="#contrat-token">Distribution des jetons</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title">Support</h4>
                <ul className="list-wrap menu">
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/white-paper">Page Blanche</Link></li>
                  <li><Link href="#">EtherScan</Link></li>
                  <li><Link href="#">TokenSnifer</Link></li>
                  <li><Link href="#">SolidityScan</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-7">
              <div className="footer-widget">
                <h4 className="fw-title">Newsletter</h4>
                <div className="footer-newsletter">
                  <p>Inscrivez-vous à la newsletter, et ne ratez plus aucune nouveauté</p>
                  <form action="#" className="footer-newsletter-form">
                    <input type="email" placeholder="Adresse Email" />
                    <button type="submit"><i className="flaticon-paper-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="copyright__text">
                <p>Copyright © {new Date().getFullYear()} - All Rights Reserved By <span>Anbq</span></p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="copyright__card text-center text-md-end">
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;