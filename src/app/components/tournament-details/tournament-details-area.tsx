"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import details_img from '@/assets/img/blog/blog_post03.jpg';
import t_ad_img from '@/assets/img/others/tournament_ad.jpg';
import trend_img_1 from '@/assets/img/others/trend_match01.png';
import trend_img_2 from '@/assets/img/others/trend_match02.png';
import trend_img_3 from '@/assets/img/others/trend_match03.png';
import TrendingMatchItem from './trending-match-item';
import VideoPopup from '../common/video-popup';

const TournamentDetailsArea = () => {
   const [isVideoOpen, setIsVideoOpen] = useState<boolean>(true);
   return (
      <>
         <section className="tournament__details-area">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="blog-post-wrapper">
                     <div className="tournament__details-content">
                        <h2 className="title">Introduction</h2>
                        <div className="blog-post-meta">
{/*                           <ul className="list-wrap">
                              <li>By<Link href="#">Admin</Link></li>
                              <li><i className="far fa-calendar-alt"></i> Aug 16, 2023</li>
                              <li><i className="far fa-comments"></i><Link href="#">No comments</Link></li>
                           </ul>*/}
                        </div>
                        <p>Bienvenue dans l&#39;univers épique d&#39;Ant Battle Queen, un jeu NFT révolutionnaire qui vous plonge au
                           cœur d&#39;une bataille sans précédent dans le monde des fourmis ! Préparez-vous à vivre une aventure
                           captivante, où vous deviendrez le commandant suprême d&#39;une colonie de fourmis, prêt à conquérir
                           de nouveaux territoires, à affronter des ennemis redoutables, et à bâtir un empire souterrain qui
                           défie l&#39;imagination.</p>
{/*                        <blockquote>
                           <p>Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of printing and typeetting industry.</p>
                        </blockquote>*/}
                        <p>Ant Battle Queen vous offre l&#39;opportunité unique de collectionner, d&#39;entraîner et de faire évoluer des
                           fourmis NFT aux pouvoirs spéciaux, chacune avec ses propres compétences et capacités. Formez une
                           armée invincible, explorez des environnements mystérieux, et préparez-vous à des combats
                           stratégiques qui mettront à l&#39;épreuve votre intelligence et votre habileté.</p>
                        <p>Rejoignez une communauté passionnée de joueurs, de collectionneurs et de stratèges, et plongez
                           dans l&#39;univers fantastique d&#39;Ant Battle Queen, où la lutte pour la suprématie ne connaît pas de
                           limites. Êtes-vous prêt à devenir la reine des fourmis et à écrire votre propre légende ? Rejoignez-
                           nous, car l&#39;avenir de la colonie dépend de vous !</p>
                        <p>Dans Ant Battle Queen, chaque choix que vous faites a un impact significatif sur le destin de votre
                           colonie. Allez-vous opter pour une stratégie de guerre agressive et conquérir de vastes territoires, ou
                           privilégier la diplomatie pour établir des alliances puissantes ? L&#39;univers du jeu regorge de mystères à
                           découvrir, de ressources à exploiter et de défis à relever.</p>
                        <p>En plus de la dimension stratégique, Ant Battle Queen vous offre la possibilité de collectionner des
                           NFT de fourmis uniques et rares, chacune avec son histoire, son caractère et ses compétences
                           particulières. La rareté de ces NFT en fait des actifs précieux, échangeables sur des marchés NFT,
                           offrant ainsi une opportunité de valoriser vos compétences en tant que collectionneur.</p>
                        <p>Notre équipe de développement s&#39;engage à faire évoluer constamment le jeu, en intégrant de
                           nouvelles fonctionnalités, des mises à jour régulières et des événements spéciaux pour enrichir votre
                           expérience. Ant Battle Queen est bien plus qu&#39;un simple jeu NFT ; c&#39;est une communauté, une
                           aventure et un défi qui ne cesse de grandir.</p>
                        <p>Préparez-vous à plonger dans l&#39;univers fascinant d&#39;Ant Battle Queen, où le microcosme des fourmis
                           se transforme en un monde d&#39;action, de stratégie et de compétition acharnée. Êtes-vous prêt à
                           prendre la couronne et à devenir la reine des fourmis ? Rejoignez-nous dans cette aventure unique,
                           et ensemble, écrivons l&#39;histoire de la colonie la plus puissante jamais vue !</p>
                        <p>Dans l&#39;univers stimulant d&#39;Ant Battle Queen, non seulement vous pouvez vous immerger dans des
                           batailles épiques et dans une stratégie sans fin, mais vous pouvez également gagner de l&#39;argent au
                           quotidien. Grâce à notre propre crypto-monnaie, l&#39;ANBQ (Ant Battle Queen Coin), les joueurs ont la
                           possibilité de réaliser des profits tout en jouant.</p>
                        <p>Votre talent pour la stratégie et la gestion de votre colonie peut se traduire par des récompenses en
                           ANBQ, que vous pourrez stocker, échanger sur des plateformes de crypto-monnaie ou même
                           réinvestir dans votre colonie pour la faire prospérer davantage. Vous aurez ainsi une chance de tirer
                           profit de vos compétences de joueur et de collectionneur, tout en participant activement à
                           l&#39;économie dynamique d&#39;Ant Battle Queen.</p>
                        <p>Rejoignez-nous pour une aventure passionnante, où le divertissement se marie parfaitement à la
                           possibilité de gagner de l&#39;argent, et où votre colonie de fourmis peut devenir un véritable empire
                           souterrain, propulsant votre succès financier. N&#39;attendez plus pour prendre le contrôle de l&#39;univers
                           d&#39;Ant Battle Queen et pour récolter les fruits de votre stratégie et de votre ingéniosité !</p>
                        <p>Dans un tournant révolutionnaire pour le monde de la blockchain, notre équipe technique a
                           développé une technique inédite qui ouvre de nouvelles perspectives passionnantes : le minage des
                           NFT. Oui, vous avez bien entendu ! Ant Battle Queen est le précurseur de cette avancée
                           technologique, offrant une toute nouvelle dimension au jeu et à l&#39;économie des NFT.</p>
                        <p>Grâce à cette innovation, les joueurs peuvent désormais mettre en œuvre leur expertise pour
                           extraire des NFT rares et précieux, renforçant ainsi leur collection et leur potentiel de gain. Cette
                           méthode révolutionnaire permet de créer des NFT d&#39;une manière entièrement nouvelle, élargissant
                           les possibilités pour les collectionneurs et les investisseurs.</p>
                        <p>Rejoignez-nous dans cette ère passionnante où les frontières de la technologie blockchain sont
                           repoussées, où l&#39;avenir du jeu et de la collecte de NFT est redéfini, et où vous pouvez participer à une
                           révolution qui changera à jamais la manière dont nous percevons les NFT.</p>
                        <p>Préparez-vous à vivre une expérience unique, où l&#39;innovation et l&#39;exploration se rencontrent dans
                           l&#39;univers fascinant d&#39;Ant Battle Queen. Ne manquez pas cette opportunité exceptionnelle de faire
                           partie de l&#39;histoire en tant que pionnier du minage de NFT, tout en construisant votre empire de
                           fourmis. Rejoignez-nous aujourd&#39;hui !</p>

<br />
                        <h2 className="title">Equipe de travail</h2>
                        <div className="blog-post-meta">
                        </div>

                        <p>
                           Absolument, il est essentiel de mettre en avant l&#39;équipe talentueuse qui est à l&#39;origine de l&#39;incroyable
                           aventure d&#39;Ant Battle Queen.
                           Chez Ant Battle Queen, nous sommes fiers de compter sur une équipe dévouée et diversifiée,
                           composée de professionnels passionnés qui repoussent constamment les limites de l&#39;innovation.
                           Nous croyons que le succès d&#39;Ant Battle Queen est le reflet du talent et de la détermination de notre
                           équipe exceptionnelle. Voici un aperçu de notre équipe clé :
                        </p><p>
                           - Bruce Williams - Chef de Projet
                           Bruce Williams est le cerveau derrière Ant Battle Queen, coordonnant tous les aspects du projet. Sa
                           vision audacieuse et son leadership ont façonné le jeu que vous connaissez aujourd&#39;hui.
                        </p><p>
                           - Lajee Asha - Développeur JavaScript et Full Stack
                           Lajee est le maître du code, s&#39;assurant que chaque aspect du jeu fonctionne de manière fluide. Son
                           expertise en développement web est inestimable pour notre équipe.
                         </p><p>
                           - Fabien Dubois - Graphiste et Développeur Web
                           Fabien apporte à Ant Battle Queen une esthétique unique. Il est responsable de la conception
                           visuelle du jeu, ainsi que de la création d&#39;une interface utilisateur conviviale.
                        </p><p>
                           - Noah Nday - Développeur Blockchain Solidity
                           Noah est notre expert en blockchain, responsable de la mise en œuvre des fonctionnalités NFT
                           révolutionnaires. Sa maîtrise de Solidity est au cœur de notre innovation.
                        </p><p>
                           - Ouynh Anh - Coordinatrice
                           Ouynh assure une communication fluide au sein de l&#39;équipe et avec la communauté. Elle est le lien
                           essentiel entre tous les acteurs du projet.
                         </p><p>
                           - Bian Mai Lan et Jaya Agarwal - Développeuses Gaming
                           Bian et Jaya sont nos architectes de jeu, travaillant sur les mécaniques et l&#39;expérience de jeu pour
                           vous offrir une expérience immersive.
                        </p><p>
                           - Marc Petit - Développeur Gaming
                           Marc apporte une expertise technique de haut niveau dans le domaine du jeu, garantissant que
                           chaque détail du gameplay est impeccable.
                       </p><p>
                           En plus de notre équipe principale, nous sommes fiers de compter sur 24 autres ingénieurs
                           talentueux, chacun apportant son expertise dans des domaines clés tels que la gestion des bases de
                           données, l&#39;administration système, la sécurité informatique et la communication. C&#39;est grâce à cette
                           équipe dévouée que nous pouvons réaliser notre vision ambitieuse pour Ant Battle Queen:
                        </p><p>
                           - Gestion des Bases de Données
                           Notre équipe de spécialistes en gestion de bases de données garantit que toutes les informations
                           essentielles du jeu sont stockées, gérées et accessibles en temps réel.
                       </p><p>
                           - Administration Système
                           Les administrateurs système veillent à ce que notre infrastructure serveur soit robuste, performante
                           et évolutive pour répondre à la demande croissante de nos joueurs.
                       </p><p>
                           - Sécurité Informatique
                           La sécurité est une priorité absolue pour nous. Notre équipe de spécialistes en sécurité informatique
                           travaille en permanence pour protéger vos données et garantir une expérience de jeu sécurisée.
                         </p><p>
                           - Communication
                           Notre équipe de communication assure une liaison efficace entre Ant Battle Queen et sa
                           communauté. Ils sont là pour répondre à vos questions, recueillir vos commentaires et partager les
                           dernières nouvelles.
                       </p><p>
                           Cette équipe polyvalente et compétente travaille en harmonie pour maintenir et améliorer
                           constamment Ant Battle Queen, garantissant une expérience de jeu exceptionnelle et une
                           communauté en pleine croissance.
                        </p>
<br />
                         <h2 className="title">Le jeton ANBQ, le pilier du projet Ant Battle Queen</h2>
                         <div className="blog-post-meta">
                         </div>
                        <p>
                         Le jeton ANBQ est au cœur du projet Ant Battle Queen, représentant l&#39;unité monétaire et d&#39;échange
                         essentielle de notre écosystème de jeu. Avec un nombre maximum de 500 millions d&#39;unités, l&#39;ANBQ
                         est soigneusement distribué sur divers portefeuilles pour soutenir les aspects clés de notre jeu et de
                         notre communauté.
                        </p><p>
                         La distribution des ANBQ est conçue pour garantir l&#39;équilibre et la stabilité de l&#39;économie du jeu, tout
                         en récompensant les différents acteurs de notre écosystème. Les portefeuilles désignés
                         comprennent celui de l&#39;équipe, les réserves pour la vente privée, les phases de prévente, la mise de
                         liquidité, les récompenses pour les joueurs actifs et les frais de marketing.
                     </p><p>
                         L&#39;ANBQ joue un rôle essentiel dans la gestion de votre colonie, l&#39;acquisition de NFT via le process du
                         stockage et la participation à notre économie de jeu. Il est conçu pour offrir une expérience
                         équilibrée et passionnante aux joueurs, tout en contribuant à la croissance et au développement
                         d&#39;Ant Battle Queen.
                     </p><p>
                         Au fur et à mesure que vous explorez notre univers de jeu, vous découvrirez comment l&#39;ANBQ est au
                         cœur de chaque aspect de l&#39;expérience, stimulant votre progression et votre participation dans la
                         communauté. Rejoignez-nous pour profiter de l&#39;aventure d&#39;Ant Battle Queen et découvrez comment
                         l&#39;ANBQ est le pilier qui soutient notre vision de jeu passionnante.
                     </p><p>
                         L&#39;ANBQ est la pièce maîtresse de l&#39;économie d&#39;Ant Battle Queen, et sa distribution réfléchie
                         contribue à l&#39;équilibre et à la stabilité de l&#39;écosystème du jeu, tout en récompensant les joueurs, les
                         investisseurs et l&#39;équipe. C&#39;est le jeton qui alimente l&#39;économie de notre jeu et crée de la valeur pour
                         notre communauté.
                     </p>
                         <br />

                         <h2>Distribution des portefeuilles</h2>
                         <div className="blog-post-meta">
                         </div>

                         <p>
                         Chez Ant Battle Queen, nous sommes déterminés à maintenir la transparence et l&#39;équité dans la
                         distribution de nos jetons, garantissant que chaque participant de notre écosystème a une
                         opportunité équitable de bénéficier de notre jeu. Voici comment nous répartissons les jetons ANBQ :
                         </p><p>
                         - <b>5%</b> pour le Portefeuille du Propriétaire : Une petite allocation est réservée pour assurer le
                         développement continu du jeu et la stabilité de l&#39;écosystème. Pour plus de transparence et garantit
                         envers les investisseurs et joueurs, ce portefeuille sera bloqué pendant les trois premières années.
                     </p><p>
                         - <b>15%</b> pour le Portefeuille de l&#39;Équipe : Cette allocation récompense l&#39;engagement et le travail
                         acharné de notre équipe de développement et de gestion. Pareil que pour le portefeuille du
                         propriétaire, et dans la même perspective de transparence et garantit envers les investisseurs et
                         joueurs, ce portefeuille sera bloqué pendant les trois premières années et débloqué progressivement
                         à un taux de 30% par an pour pouvoir rémunérer l’équipe de travail.
                     </p><p>
                         - <b>3%</b> pour le Portefeuille Dédié à la Vente Privée : Les jetons dans ce portefeuille serviront à assurer
                         la vente privée.
                     </p><p>
                         - <b>5%</b> pour le Portefeuille Dédié à la Prévente 1 : Ce portefeuille serre à assurer la prévente option 1.
                     </p><p>
                         - <b>10%</b> pour le Portefeuille Dédié à la Prévente 2 : Ce portefeuille serre à assurer la prévente option 2.
                     </p><p>
                         - <b>2%</b> pour le Portefeuille Dédié à la Prévente 3 : Ce portefeuille serre à assurer la prévente option 3.
                     </p><p>
                         - <b>15%</b> pour le Portefeuille Dédié à la Mise de Liquidité : Ceci garantit la liquidité des jetons sur les
                         plateformes d&#39;échange et de trading pour une accessibilité accrue.

                     </p><p>
                         - <b>45%</b> pour le Portefeuille Dédié aux Récompenses : La majorité des jetons sont alloués à la
                         distribution de récompenses aux joueurs actifs et engagés dans le jeu. Ce portefeuille sera
                         automatiquement bloqué, seulement 1% de jetons (environ 1,85 million) seront libérés et transférer
                         au portefeuille des récompenses par mois et pendant les 4 premières années pour récompenser les
                         joueurs. Au-delà de la cinquième année, Ce taux sera divisé par deux tous les 4 ans.
                         A cela, s’ajoute un portefeuille dédié au jackpot et un autre dédié aux récompenses distribuées
                         mensuellement.
                     </p><p>
                         Nous croyons que cette répartition équilibrée garantit un écosystème stable et diversifié, où les
                         joueurs, les investisseurs et l&#39;équipe de développement contribuent à la croissance continue du jeu.
                         La transparence de cette répartition est essentielle pour maintenir la confiance de notre
                         communauté.
                     </p><p>
                         La distribution des jetons est un aspect clé de l&#39;économie du jeu, et il est important de garantir une
                         répartition équitable pour tous les participants de l&#39;écosystème. Cela renforce également la
                         confiance des joueurs dans le projet.
                     </p>
                         <br />

                         <h2>Politique du jackpot</h2>
                         <div className="blog-post-meta">
                         </div>
                         <p>
                         Chez Ant Battle Queen, nous croyons en la récompense de nos joueurs les plus engagés. C&#39;est
                         pourquoi nous avons mis en place une politique de jackpot passionnante qui vous donne la
                         possibilité de décrocher des gains inattendus. Notre jackpot est alimenté par une taxation de 0,5 %
                         sur chaque transaction effectuée dans le jeu. Chaque fois que vous faites une transaction, investissez
                         dans votre colonie ou effectuez une autre opération, une petite partie de cette transaction contribue
                         au jackpot.
                         </p><p>
                         Le jackpot est ensuite distribué au hasard parmi les joueurs actifs, offrant ainsi une chance à tous de
                         profiter de gains considérables. Cette approche équitable crée une excitation constante et incite nos
                         joueurs à s&#39;impliquer davantage dans l&#39;univers d&#39;Ant Battle Queen.
                     </p><p>
                         Nous sommes fiers de favoriser une communauté active et engagée, et notre politique du jackpot est
                         une expression de notre gratitude envers nos joueurs. Alors, continuez à jouer, à explorer et à élargir
                         votre colonie, car le jackpot peut tomber à tout moment, et la fortune vous sourire quand vous vous
                         y attendez le moins.
                     </p><p>
                         La politique du jackpot est un excellent moyen d&#39;encourager l&#39;engagement des joueurs et de
                         récompenser leur participation active dans le jeu. Cela ajoute une dimension excitante à l&#39;expérience
                         d&#39;Ant Battle Queen.
                     </p>
                         <br />
                         <h2>Politique du brûlage, stabiliser la valeur de notre jeton</h2>
                         <div className="blog-post-meta">
                         </div>

                         <p>
                         Chez Ant Battle Queen, nous attachons une importance particulière à la stabilité de la valeur de
                         notre jeton, l&#39;ANBQ. Pour atteindre cet objectif, nous avons mis en place une stratégie de brûlage
                         innovante. Concrètement, cela signifie que 0,5 % de chaque transaction effectuée dans le jeu est
                         retiré de la circulation en brûlant ces jetons.
                         </p><p>
                         Le brûlage de jetons a plusieurs avantages significatifs. Tout d&#39;abord, il réduit l&#39;offre totale d&#39;ANBQ en
                         circulation, ce qui, selon les principes économiques, peut contribuer à maintenir ou augmenter la
                         valeur du jeton. De plus, cette stratégie encourage une utilisation réfléchie du jeton, car les joueurs
                         sont conscients que chaque transaction a un impact sur l&#39;offre globale.
                     </p><p>
                         Cette approche de brûlage favorise également la création d&#39;une économie plus saine et équilibrée au
                         sein de l&#39;écosystème Ant Battle Queen. En réduisant la disponibilité des jetons, elle peut atténuer les
                         fluctuations de valeur extrêmes et contribuer à une expérience plus stable pour nos utilisateurs.
                     </p><p>
                         Nous sommes résolus à maintenir la valeur de l&#39;ANBQ pour le bénéfice de notre communauté. Le
                         brûlage est l&#39;une des nombreuses mesures que nous prenons pour atteindre cet objectif, tout en
                         favorisant une économie de jeu plus solide et en encourageant des transactions responsables au sein
                         de notre écosystème.
                     </p><p>
                         Le brûlage de jetons est une stratégie courante dans de nombreux projets de crypto-monnaie et peut
                         contribuer à stabiliser la valeur du jeton tout en promouvant une utilisation responsable et un
                         écosystème plus équilibré.
                     </p>
                         <br />
                         <h2>SAT, le jeton secondaire pour équiper acheter et gagner</h2>
                         <div className="blog-post-meta">
                         </div>
<p>
                         En plus du jeton principal ANBQ, Ant Battle Queen propose une monnaie secondaire, les SAT, qui
                         jouent un rôle essentiel dans l&#39;univers du jeu. Les SAT sont conçus pour permettre aux joueurs
                         d&#39;équiper leurs Fourmies, d&#39;acheter du matériel et même d&#39;être gagnés gratuitement lors des
                         combats, offrant ainsi une flexibilité et une variété d&#39;options pour progresser dans le jeu.
</p><p>
                         Les SAT sont essentiels pour optimiser votre expérience de jeu. Vous pouvez les utiliser pour
                         personnaliser vos Fourmies avec de l&#39;équipement, améliorant ainsi leurs capacités pour les combats
                         stratégiques. Les SAT vous donnent également la possibilité d&#39;acquérir du matériel essentiel pour
                         renforcer votre colonie et augmenter vos chances de succès.
                     </p><p>
                         De plus, lors de combats victorieux, les joueurs ont l&#39;opportunité de gagner des SAT gratuitement.
                         Cette récompense supplémentaire est destinée à encourager la participation active et la stratégie
                         dans les batailles, tout en offrant une source d&#39;acquisition de SAT pour les joueurs.
                     </p><p>
                         Les SAT constituent un élément clé de l&#39;économie du jeu, permettant aux joueurs de personnaliser
                         leur expérience, d&#39;investir dans leur stratégie et de progresser vers la domination dans Ant Battle
                         Queen. Ils ajoutent une dimension de jeu supplémentaire, renforçant la profondeur de l&#39;expérience.
                     </p><p>
                         Rejoignez l&#39;aventure d&#39;Ant Battle Queen, utilisez les SAT pour équiper vos Fourmies, acheter du
                         matériel et prenez part à des combats épiques pour gagner cette monnaie secondaire essentielle.
                     </p><p>
                         L&#39;introduction des SAT comme monnaie secondaire dans Ant Battle Queen élargit les options de jeu
                         et ajoute de la profondeur stratégique. Les SAT offrent aux joueurs la possibilité de personnaliser
                         leurs tactiques, de renforcer leur armée et de gagner des récompenses supplémentaires, contribuant
                         ainsi à une expérience de jeu plus riche et dynamique.
                     </p>

                         <br />
                         <h2>Vente privée transparente, l’égalité d’opportunité pour tous</h2>
                         <div className="blog-post-meta">
                         </div>
<p>
                         Dans un souci de transparence et d&#39;équité, Ant Battle Queen introduit la notion de vente privée,
                         accessible à tous les joueurs, sans discrimination envers les gros investisseurs en crypto-monnaie.
</p><p>
                         Notre objectif est de donner à chacun la même chance de participer et de prospérer dans l&#39;univers
                         d&#39;Ant Battle Queen.
                     </p><p>
                         Cette vente privée fixée à 0,15$ l’unité est ouverte à tous et constitue la première étape de notre
                         prévente, avec un montant minimum d&#39;investissement de 100 $ et un maximum de 500 $. Une fois que vous avez investi, les fonds restent
                         verrouillés pendant une année, ce qui garantit que tous les participants ont un engagement à long
                         terme dans le jeu. De plus, votre investissement dans la vente privée activera automatiquement le
                         processus de minage de NFT, vous permettant de commencer à collectionner et à échanger ces actifs
                         uniques.
                     </p><p>
                         Cette initiative est conçue pour créer une communauté diversifiée, engagée et égalitaire. Elle
                         renforce l&#39;idée que tous les joueurs, qu&#39;ils soient nouveaux venus ou investisseurs chevronnés, ont la
                         possibilité de participer activement à Ant Battle Queen et de bénéficier de son succès.
                     </p><p>
                         Nous sommes fiers de cette démarche, qui incarne notre engagement envers la transparence,
                         l&#39;équité et la création d&#39;une communauté solidaire. Rejoignez-nous dans cette aventure passionnante
                         et profitez des avantages d&#39;une vente privée conçue pour vous donner une chance égale de réussir.
                     </p><p>
                         La vente privée transparente est un excellent moyen d&#39;encourager la participation équitable des
                         joueurs et de renforcer la communauté, tout en offrant une opportunité d&#39;investissement à un large
                         éventail de participants.
                     </p>

                         <h2>Prévente du jeton ANBQ</h2>
                         <div className="blog-post-meta">
                         </div>

                         <p>Chez Ant Battle Queen, nous comprenons l&#39;importance de la flexibilité et de la diversité des options
                             d&#39;investissement pour nos joueurs. C&#39;est pourquoi nous avons conçu trois moyens distincts adaptés à
                             vos diverses préférences et niveaux
                         </p><p>
                             1. Option 1 : Vente Unitaire à 0,20 $ (Minimum de 10 $, Maximum de 1000 $)
                             - Cette option vous permet d&#39;investir de manière progressive, avec un coût d&#39;entrée abordable.
                             Pour chaque transaction, 20 % du montant investi sera distribué chaque mois. Une fois que votre
                             investissement dépasse 100 $, le processus de minage NFT s&#39;active automatiquement, vous donnant
                             la possibilité de collectionner ces actifs uniques.
                     </p><p>
                             2. Option 2 : Vente Unitaire à 0,25 $ (Minimum de 10 $, Maximum de 4999 $)
                             - Cette option est destinée aux joueurs qui souhaitent un investissement plus substantiel. Les
                             jetons seront débloqués immédiatement, offrant une gestion intelligente des ressources pour
                             renforcer votre position dans le jeu.
                     </p><p>
                             3. Option 3 : Vente Unitaire à 0,24 $ (Minimum de 5000 $)
                             - Pour les joueurs les plus engagés, cette option est conçue pour un investissement plus significatif.
                             Le montant minimum est de 5000 $ avec un tarif compétitif et un déblocage immédiat de jetons
                     </p><p>
                             Chacune de ces options est conçue pour s&#39;adapter à vos besoins, que vous souhaitiez commencer en
                             douceur, investir de manière plus substantielle ou opter pour une option d&#39;investissement plus
                             importante. Vous avez la flexibilité de choisir la méthode qui correspond le mieux à vos objectifs et à
                             votre niveau d&#39;engagement.
                     </p><p>
                             Quel que soit le moyen que vous choisissez, nous nous engageons à fournir une expérience de jeu
                             enrichissante, où votre investissement contribue à faire évoluer votre colonie et à renforcer votre
                             position dans Ant Battle Queen.
                     </p><p>
                             Ces trois options d&#39;investissement offrent aux joueurs une flexibilité significative pour participer à la
                             prévente, en fonction de leurs préférences financières et de leurs objectifs d&#39;investissement dans le
                             jeu.</p>
                         <br />

                         <h2 id="nft1">Stockage des jetons</h2>
                         <div className="blog-post-meta">
                         </div>
<p>
                         L&#39;une des caractéristiques uniques d&#39;Ant Battle Queen est la possibilité de stocker votre crypto-
                         monnaie, une option activée automatiquement dès que vous investissez un minimum de 100 $. Ce
                         stockage intelligent a pour but de récompenser nos joueurs engagés en activant automatiquement le
                         processus de minage. Le minage est le cœur de notre écosystème, car il permet aux joueurs de
</p><p>
                         collecter des NFT Gold, ces actifs numériques uniques qui ajoutent une dimension précieuse à votre
                         expérience de jeu.
                     </p><p>
                         En stockant votre crypto-monnaie, vous avez accès à des récompenses mensuelles sous forme de
                         NFT Gold, que vous pouvez utiliser à votre avantage. Ces NFT Gold sont non seulement rares et
                         précieux, mais ils offrent également un avantage compétitif, étant plus puissants d&#39;au moins 20 %
                         que les NFT Rares proposés à vendre dans le jeu. Vous pouvez choisir de les vendre sur notre place
                         de marché, contribuant ainsi à la croissance de votre portefeuille, ou de les utiliser dans vos combats
                         pour maximiser vos gains.
                     </p><p>
                         Le stockage de crypto-monnaie représente une opportunité exceptionnelle pour les joueurs qui
                         cherchent à renforcer leur présence dans Ant Battle Queen tout en bénéficiant d&#39;avantages
                         financiers significatifs. En optant pour cette option, vous créez un équilibre entre investissement et
                         récompense, ce qui rend notre écosystème de jeu encore plus dynamique et gratifiant.
                     </p><p>
                         Ne manquez pas l&#39;opportunité de stocker votre crypto-monnaie et d&#39;activer le minage de NFT Gold
                         automatiquement. Rejoignez notre communauté de joueurs avisés qui tirent profit de cette
                         fonctionnalité unique dans Ant Battle Queen !
                     </p><p>
                         Le stockage de crypto-monnaie et les récompenses sous forme de NFT Gold constituent un
                         mécanisme novateur pour récompenser les joueurs engagés, tout en ajoutant de la valeur à
                         l&#39;écosystème du jeu. Cette fonctionnalité encourage également la participation continue des joueurs
                         et renforce la dynamique du jeu.</p>
                         <br />
                         <h2 id="nft8">Politique du parrainage</h2>
                         <div className="blog-post-meta">
                         </div>

                         <p>
                             Chez Ant Battle Queen, nous croyons au pouvoir de la communauté, et c&#39;est pourquoi nous avons
                             mis en place un programme de parrainage passionnant qui vous permet d&#39;élargir votre influence tout
                             en augmentant vos ressources dans le jeu. Le parrainage est une opportunité pour chaque joueur de
                             partager leur passion pour Ant Battle Queen avec d&#39;autres, tout en obtenant des moyens
                             supplémentaires pour acquérir des NFT et du matériel.
                         </p><p>
                             Le principe est simple : invitez des amis, des proches ou d&#39;autres joueurs à rejoindre notre
                             communauté. Lorsqu&#39;ils s&#39;inscrivent grâce à votre invitation, vous obtenez des récompenses spéciales
                             en retour. Ces récompenses peuvent être des ANBQ, des NFT rares, ou d&#39;autres ressources
                             précieuses qui vous aideront à renforcer votre colonie et à améliorer votre armée.
                     </p><p>
                             Le parrainage est un moyen de collaborer avec d&#39;autres joueurs et de bâtir des alliances au sein de
                             notre communauté. Plus vous parrainez de joueurs, plus vos ressources augmentent, ce qui renforce
                             votre avantage stratégique dans le jeu. C&#39;est une opportunité pour les joueurs de tous niveaux
                             d&#39;exploiter leur réseau personnel et de se rapprocher de leurs objectifs en jeu.
                     </p><p>
                             Rejoignez notre programme de parrainage et explorez la puissance de la communauté dans Ant
                             Battle Queen. En partageant votre passion pour le jeu, vous non seulement élargissez votre
                             influence, mais vous créez également une expérience de jeu plus riche pour vous et pour ceux que
                             vous parrainez.
                     </p><p>
                             Le parrainage est un moyen efficace d&#39;encourager la croissance de la communauté tout en
                             récompensant les joueurs pour leur engagement. Cela renforce également l&#39;aspect social du jeu et
                             peut créer un sentiment de communauté plus fort au sein d&#39;Ant Battle Queen.
                         </p>
                         <br />
                         <h2 id="nft2">Place de marché</h2>
                         <div className="blog-post-meta">
                         </div>

                         <p>La place de marché d&#39;Ant Battle Queen est le cœur économique de notre univers de jeu, un lieu où
                             l&#39;échange et la stratégie se rencontrent pour créer une expérience unique. Ici, les joueurs ont
                             l&#39;opportunité d&#39;explorer un vaste catalogue de Fourmies et de matériel, de choisir parmi une variété
                             d&#39;options pour renforcer leur colonie et leur armée.
                         </p><p>
                             Que vous recherchiez des Fourmies spécifiques avec des compétences uniques, des équipements
                             puissants pour vos combats, ou que vous souhaitiez vendre des NFT que vous avez gagnés, la place
                             de marché est l&#39;endroit pour répondre à vos besoins. Notre système de filtrage et de recherche
                             avancé facilite la découverte des articles qui vous intéressent.
                     </p><p>
                             Achetez des Fourmies pour élargir votre collection, acquérez du matériel pour renforcer votre
                             puissance de combat, ou vendez vos NFT pour gagner des ANBQ et contribuer à l&#39;économie du jeu. La
                             place de marché est le lieu où les joueurs peuvent mettre en œuvre leur stratégie de manière
                             transparente, établir des alliances, et accéder à des opportunités d&#39;investissement passionnantes.
                     </p><p>
                             Ant Battle Queen vise à créer une communauté active, où l&#39;économie du jeu est accessible à tous.
                             Nous croyons que la place de marché est un élément essentiel de cette vision, offrant aux joueurs un
                             espace pour donner vie à leur propre stratégie, tout en contribuant à l&#39;évolution de l&#39;univers du jeu.
                     </p><p>
                         Comme de nombreux jeux NFT, notre place de marché est un moyen aussi d’assurer la continuité du
                         jeu en taxant les achats à un taux de 5% pour appuyer les efforts de marketing du projet. Ces fonds
                         sont utilisés pour promouvoir le jeu et développer la communauté d&#39;Ant Battle Queen.
                     </p><p>
                             Rejoignez la place de marché d&#39;Ant Battle Queen et découvrez un monde d&#39;opportunités où
                             l&#39;échange et la stratégie se combinent pour renforcer votre expérience de jeu.
                     </p>

                         <br />

                         <h2 id="nft3">Diversité et variantes des NFT, votre stratégie et vos choix</h2>
                         <div className="blog-post-meta">
                         </div>

                         <p>Dans l&#39;univers d&#39;Ant Battle Queen, les NFT sont le joyau de la couronne, des actifs numériques qui
                             ajoutent profondeur et stratégie au jeu. Nous offrons une variété de types de NFT pour satisfaire
                             différentes préférences et stratégies de jeu, chacun avec ses propres caractéristiques :
                         </p><p>
                             1. NFT Primaires : Les NFT primaires sont les Fourmies de base de votre colonie, essentielles pour
                             votre progression. Elles sont accessibles à tous les joueurs et constituent la fondation de votre
                             armée.
                     </p><p>
                             2. NFT Rares : Les NFT rares sont plus rares et offrent des compétences améliorées par rapport aux
                             NFT primaires. Ils sont prisés pour leur puissance et leur rareté.
                     </p><p>
                             3. NFT Gold : Les NFT Gold sont des Fourmies extrêmement rares et puissantes, convoitées pour leur
                             rareté et leurs compétences avancées. Ils sont des atouts de choix pour les joueurs chevronnés.
                     </p><p>
                             4. NFT Premium : Les NFT Premium offrent des compétences exceptionnelles, des attributs améliorés
                             et une rareté accrue. Ils sont parmi les actifs les plus recherchés par les collectionneurs et les
                             stratèges.
                     </p><p>
                             5. NFT Légendaires : Les NFT Légendaires sont les joyaux de votre collection. Ils sont
                             exceptionnellement rares, dotés de compétences légendaires, et sont considérés comme les actifs
                             les plus puissants et précieux du jeu.
                     </p><p>
                             Chacun de ces types de NFT a sa propre utilité dans le jeu, que ce soit pour renforcer votre armée,
                             collectionner des actifs rares, ou établir votre suprématie stratégique. Les NFT sont conçus pour offrir
                             une variété d&#39;options, adaptées à différents styles de jeu et préférences. Votre stratégie détermine
                             les types de NFT que vous choisirez de collectionner, d&#39;échanger et d&#39;utiliser dans votre quête pour
                             devenir la Reine des Fourmies.
                     </p><p>
                             Explorez les différents types de NFT, choisissez ceux qui correspondent à votre stratégie, et plongez
                             dans l&#39;univers diversifié d&#39;Ant Battle Queen.
                     </p><p>
                             La diversité des types de NFT ajoute de la richesse à l&#39;expérience de jeu, en offrant aux joueurs la
                             possibilité de personnaliser leur stratégie et de viser des objectifs variés au sein de l&#39;écosystème Ant
                             Battle Queen. Chacun de ces NFT représente un élément essentiel de l&#39;expérience de jeu.</p>
                         <br />
                         <h2>Air drop, Récompenser notre communauté engagée</h2>
                         <div className="blog-post-meta">
                         </div>

                         <p>Chez Ant Battle Queen, nous croyons fermement en la valeur de notre communauté et nous
                             cherchons continuellement des moyens de récompenser nos supporters engagés. C&#39;est pourquoi
                             nous avons mis en place un programme d&#39;airdrop passionnant, offrant la possibilité à nos soutiens
                             sur YouTube, Telegram, Twitter, Instagram et TikTok de recevoir gratuitement des NFT rares.
                         </p><p>
                             Les avantages de notre airdrop sont multiples. Tout d&#39;abord, il s&#39;agit d&#39;une opportunité pour vous de
                             participer activement à notre communauté et de montrer votre soutien en partageant notre histoire
                             passionnante avec d&#39;autres. Vous pouvez également bénéficier de récompenses exclusives, telles que
                             des NFT rares, qui peuvent renforcer votre présence dans le jeu.
                     </p><p>
                             Les conditions pour bénéficier de notre airdrop sont simples. Il vous suffit de suivre nos canaux
                             officiels sur YouTube, Telegram, Twitter, Instagram et TikTok, et d&#39;interagir avec notre contenu de
                             manière positive. Plus vous êtes actif et impliqué, plus vos chances de recevoir des récompenses
                             exclusives augmentent.
                     </p><p>
                             Le programme d&#39;airdrop est un moyen pour nous de reconnaître et de remercier nos supporters
                             engagés qui contribuent à la croissance de notre communauté. Nous vous encourageons à participer
                             activement à nos canaux sociaux, à interagir avec notre contenu et à partager votre enthousiasme
                             pour Ant Battle Queen. Votre soutien est précieux et mérite d&#39;être récompensé.
                     </p><p>
                             Rejoignez notre communauté sur les réseaux sociaux, participez à notre airdrop, et découvrez
                             comment votre engagement peut être gratifié en NFT rares et précieux.
                     </p><p>
                             Les airdrops sont un moyen efficace de récompenser la communauté engagée, de stimuler la
                             participation sur les réseaux sociaux, et de créer un sentiment de proximité avec les supporters du
                             projet. Cette approche encourage également les supporters à s&#39;impliquer davantage dans la
                             promotion du jeu.</p>
                         <br />
                         <h2>Résumé, explorer un monde de stratégie et de collecte d’actifs uniques</h2>
                         <div className="blog-post-meta">
                         </div>

                         <p>
                             Bienvenue dans Ant Battle Queen, un jeu innovateur basé sur la technologie NFT qui combine
                             stratégie, collection d&#39;actifs numériques et communauté active. Plongez dans un univers où vous
                         </p><p>
                             incarnez une Reine de Fourmis, bâtissez et gérez votre colonie, engagez des combats stratégiques et
                             collectionnez des NFT uniques.
                     </p><p>
                             Découvrez les principales caractéristiques du jeu, notamment :
                     </p><p>
                             - Gestion de Colonie : Construisez et développez votre colonie de Fourmis, améliorez vos
                             infrastructures et optimisez votre économie.
                     </p><p>
                             - Combats Stratégiques : Engagez des batailles en temps réel avec d&#39;autres joueurs, utilisez vos
                             compétences et vos Fourmies pour conquérir des territoires.
                     </p><p>
                             - NFT Diversifiés : Collectionnez des NFT, y compris les NFT primaires, rares, Gold, premium et
                             légendaires, chacun offrant des caractéristiques uniques et stratégiques.
                     </p><p>
                             - Vente Privée Transparente : Participez à notre vente privée accessible à tous, garantissant un accès
                             équitable et une opportunité de posséder des NFT exclusifs.
                     </p><p>
                             - Minage de NFT : Découvrez une nouvelle technique de minage de NFT mise en place par notre
                             équipe technique, vous permettant de gagner ces actifs de manière innovante.
                     </p><p>
                             - Équipe Diversifiée : Rencontrez notre équipe diversifiée, composée de talents dans le
                             développement, le graphisme, la blockchain et la gestion.
                     </p><p id="nft7">
                             - Politique du Jackpot : Découvrez notre politique de jackpot alimentée par une taxation de 0,5 % de
                             chaque transaction, offrant aux joueurs la possibilité de gagner des gains inattendus.
                     </p><p>
                             - Brûlage pour la Stabilité : Apprenez comment notre stratégie de brûlage de 0,5 % de chaque
                             transaction contribue à la stabilité de la valeur de notre jeton ANBQ.
                     </p><p>
                             - Place de Marché Dynamique : Explorez la place de marché pour acheter des Fourmies, du matériel
                             et vendre vos NFT.
                     </p><p>
                             - Parrainage Avantageux : Participez à notre programme de parrainage pour élargir votre influence et
                             augmenter vos ressources.
                     </p><p>
                             - Prévente Diversifiée : Investissez dans le jeu avec différentes options de prévente, adaptées à vos
                             besoins financiers et à vos objectifs.
                     </p><p>
                             - Distribution Équilibrée des Jetons : Découvrez comment nous répartissons les jetons ANBQ de
                             manière équitable.
                     </p><p>
                             - Airdrop Récompensant : Participez à notre programme d&#39;airdrop en soutenant nos canaux sociaux
                             pour recevoir des NFT gratuits.
                     </p><p>
                             - Diversité des NFT : Explorez les différents types de NFT, des primaires aux légendaires, chacun
                             offrant des caractéristiques distinctes.
                     </p><p>
                             Rejoignez Ant Battle Queen pour une expérience de jeu unique, où la stratégie, la collection d&#39;actifs
                             numériques et l&#39;engagement communautaire se combinent pour créer un univers de jeu vibrant.
                             Plongez dans l&#39;aventure et rejoignez notre communauté en pleine croissance.
                         </p>




                         {/*<div className="tournament__details-video position-relative">
                           <Image src={details_img} alt="img" style={{ height: 'auto', width: '100%' }} />
                           <a className="popup-video cursor-pointer" onClick={() => setIsVideoOpen(true)}><i className="flaticon-play"></i></a>
                        </div>*/}
{/*                        <p>Axcepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of printing.</p>
                        <div className="tournament__details-form">
                           <h4 className="tournament__details-form-title">join nft games android</h4>
                           <p>Simply dummy text of printing and typeetting industry been the industries</p>
                           <form action="#">
                              <input type="text" placeholder="Name *" />
                              <input type="text" placeholder="Player ID *" required />
                              <input type="email" placeholder="Email *" required />
                              <button className="tournament__details-form-btn">Join Now</button>
                           </form>
                        </div>*/}
                       {/* <div className="blog-details-bottom">
                           <div className="row">
                              <div className="col-xl-6 col-md-7">
                                 <div className="tg-post-tags">
                                    <h5 className="tags-title">tags :</h5>
                                    <ul className="list-wrap d-flex flex-wrap align-items-center m-0">
                                       <li><Link href="#">Esports</Link>,</li>
                                       <li><Link href="#">Fantasy</Link>,</li>
                                       <li><Link href="#">game</Link></li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="col-xl-6 col-md-5">
                                 <div className="blog-post-share justify-content-start justify-content-md-end">
                                    <h5 className="share">share :</h5>
                                    <ul className="list-wrap">
                                       <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                       <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                       <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>*/}
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* video modal start */}
{/*         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"ssrNcwxALS4"}
         />*/}
         {/* video modal end */}
      </>
   );
};

export default TournamentDetailsArea;