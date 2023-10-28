import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbAreaTwo from "@/app/components/breadcrumb/breadcrumb-area-2";
import TournamentDetailsArea from "@/app/components/tournament-details/tournament-details-area";

export const metadata: Metadata = {
  title: "Page Blanche",
};

export default function WhitePaperPage() {
  return (
    <Wrapper>
        {/* header start */}
        <Header />
        {/* header end */}

        {/* main area start */}
        <main className="main--area">
            {/* breadcrumb area start */}
            <BreadcrumbAreaTwo title="Page Blanche" subtitle="White Paper" />
            {/* breadcrumb area end */}

            {/* tournament details start */}
            <TournamentDetailsArea/>
            {/* tournament details end */}

        </main>
        {/* main area end */}

        {/* footer start */}
        <Footer/>
        {/* footer end */}
    </Wrapper>
  );
}
