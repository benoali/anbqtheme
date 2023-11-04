"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import bg from "@/assets/img/bg/bg_roadmap.jpg";
import road_map from "@/assets/img/others/roadmpa2.png";
import road_map_step from "@/assets/img/others/roadmpa_img2.png";
import useTextAnimation from "@/hooks/use-text-animation";

// road map lists
type IRoadMap = {
  id: number;
  active: boolean;
  title: string;
  lists: {
    active: boolean;
    text: string;
  }[];
};
const road_map_lists: IRoadMap[] = [
  {
    id: 1,
    active: true,
    title: "Lancement de la prévente T4 2023",
    lists: [
      { active: true, text: "Lancement du projet" },
      { active: true, text: "Lancement de la prévente privée du jeton ANBQ" },
      { active: false, text: "Lancement de la prévente public du jeton ANBQ" },
      { active: false, text: "Lancement de l’airDrop" },
      { active: false, text: "à la fin de cette étape, les fonds essentiels au lancement du projet et le\n" +
            "soutien communautaire sera notre clé pour finaliser le développement de la\n" +
            "plateforme et du jeu." },
    ],
  },
  {
    id: 2,
    active: false,
    title: "Lancement du jeu version Beta T2 2024",
    lists: [
      { active: false, text: "Atteindre les 50 000 joueurs" },
      { active: false, text: "Mettre de la liquidité adéquate dans les différentes plateformes de swap\n" +
            "décentralisées pour assurer la stabilité du jeton" },
      { active: false, text: "Distribution de l’airDrop" },
    ],
  },
  {
    id: 3,
    active: false,
    title: "Lancement du jeu version finale T4 2024",
    lists: [
      { active: false, text: "Intégration du jeton sur les plateformes de trading" },
      { active: false, text: "Améliorer le jeu selon les recommandations de la communauté ANBQ" },
    ],
  },
  {
    id: 4,
    active: false,
    title: "Développements futurs T1 2025",
    lists: [
      { active: false, text: "Introduire de nouveaux stages de combats pour augmenter les récompenses" },
      { active: false, text: "Afin d’assurer la continuité du jeu, notre équipe technique travaillera sur l’innovation et l’amélioration contenu du jeu en suivant les préférences des joueurs ainsi que les tendances de l’industrie du gaming sur la block chain." },
    ],
  },
];

const RoadMapArea = () => {
  const [isView, setIsView] = useState<boolean>(false);
  useTextAnimation(isView);

  const handleInViewChange = (inView: boolean) => {
    if (inView) {
      setIsView(true);
    }
  };


  return (
      <section
          className="roadMap__area roadMap-bg section-pt-150 section-pb-150"
          style={{ backgroundImage: `url(${bg.src})` }} id="roadmap-map-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="roadMap__inner">
                <div className="row">
                  <div className="col-xl-5 col-lg-6">
                    <div className="roadMap__content">
                      <h2 className="title">FEUILLE DE ROUTE</h2>
                      <p>
                        Bienvenue dans l&#39;univers épique d&#39;Ant Battle Queen, un jeu NFT révolutionnaire qui vous plonge au
                        cœur d&#39;une bataille sans précédent dans le monde des fourmis ! Préparez-vous à vivre une aventure
                        captivante, où vous deviendrez le commandant suprême d&#39;une colonie de fourmis, prêt à conquérir
                        de nouveaux territoires, à affronter des ennemis redoutables, et à bâtir un empire souterrain qui
                        défie l&#39;imagination.
                      </p>
{/*                      <Link href="/contact" className="tg-btn-1 -btn-yellow">
                        <span>roadmap</span>
                      </Link>*/}
                    </div>
                    <div className="roadMap__img">
                      <Image
                          src={road_map}
                          className="tg-parallax"
                          data-scale="1.5"
                          data-orientation="down"
                          alt="roadMap__img"
                      />
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6">
                    <div className="roadMap__steps-wrap">
                      {road_map_lists.map((item) => (
                          <div
                              key={item.id}
                              className={`roadMap__steps-item ${item.active ? "active" : ""}`}
                          >
                            <h3 className="title">{item.title}</h3>
                            <InView
                                as="ul"
                                onChange={handleInViewChange} className="roadMap__list list-wrap">
                              {item.lists.map((l, i) => (
                                  <li
                                      key={i}
                                      className={`${l.active ? "active" : ""} tg__animate-text style2`}
                                  >
                                    {l.text}
                                  </li>
                              ))}
                            </InView>
                            <Image
                                src={road_map_step}
                                alt="img"
                                className="roadMap__steps-img"
                                height={235}
                            />
                          </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default RoadMapArea;
