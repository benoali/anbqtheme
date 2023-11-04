import React from "react";
import { Chart } from "react-google-charts";
import bg from "@/assets/img/bg/bg_graph.jpg";
import graph from "@/assets/img/others/distribution_tokens.png";
import introduit1 from "@/assets/img/presentedsoon/introduit1.png";
import Image from "next/image";

export const data = [
    ["Task", "Hours per Day"],
    ["Propriétaire", 5],
    ["L'Équipe", 15],
    ["Vente Privée", 3],
    ["Prévente public", 17],
    ["La Mise de Liquidité", 15],
    ["Récompenses", 45],
];

export const options = {
    title: "",
    backgroundColor: "#f1f7f9"
};

const PieChart = () => {
    return (
    <section
        className="team__area team-bg section-pt-130 section-pb-100"
        style={{backgroundImage:`url(${bg.src})`}} id="contrat-token">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-10">
                    <div className="section__title text-center mb-60">
                        {/*<TextAnimation title="our team member" />*/}
                        <h3 className="title">DISTRIBUTION DES JETONS</h3>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="addressContract">Adresse du contrat: 235346gt7..fgr44ddgf<i className="gg-copy"></i></div>
                <div className="dist2"><Image src={graph} alt="distribution de jetons" /></div>
                <div className="dist2">
                    <div className="contract recompences">7cd45385..jgb76ytt<i className="gg-copy"></i></div>
                    <div className="contract proprietaire">ght56gg8..665hygDD<i className="gg-copy"></i></div>
                    <div className="contract equipe">S3gg5677..hj66G654<i className="gg-copy"></i></div>
                    <div className="contract liquidite ">ght56gg8..hj66G654<i className="gg-copy"></i></div>
                    <div className="contract prevente">ght56gg8..hj66G654<i className="gg-copy"></i></div>
                    <div className="contract prive">ght56gg8..:09878676<i className="gg-copy"></i></div>
                </div>
                {/*<Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                />*/}
            </div></div>
    </section>
    );
}

export default PieChart;