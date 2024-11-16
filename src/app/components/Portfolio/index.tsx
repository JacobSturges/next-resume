import { Section } from "../ui/section";
import { PortfolioItem } from "./portfolioItem";
export function Portfolio() {
  return (
    <Section id="portfolio" title="Portfolio">
      <div className="flex justify-evenly flex-wrap gap-10">
        <PortfolioItem
          title="AIP Vision project"
          link="https://play.google.com/store/apps/details?id=com.playgroundxyz.vision_project&pcampaignid=web_share"
          text="A product needed to be built for panellist users to be able to complete the in-app studies so that we could measure user attention. This product was built in Kotlin a technology I taught myself on the fly. The development team was very small, just me and my team lead, so there was a very high level of responsibility."
          image="web-resume/aip-vision-project"
        />
        <PortfolioItem
          title="AIP Measuremeant portal"
          link="https://playgroundxyz.com/aip"
          text="While working at PXYZ one of my responsibilities was the building and maintenance of the measurement portal. This is a portal where both internal and external users can build and manage their AIP campaigns. During my time working on this product, several major initiatives were undertaken to expand the functionality of this page, notably the implementation of analytics pages that significantly reduced the overhead for our campaign majors."
          image="web-resume/measurement-portal"
        />
        <PortfolioItem
          title="Are Media Sites"
          link="https://www.homestolove.com.au/"
          text="My team and I were responsible for the development and maintenance of our brand's sites. This includes brands like Now to Love, Home to Love & Elle. These sites are built in React and are styled in SASS."
          image="web-resume/now-to-love"
        />
        <PortfolioItem
          title="This Site"
          link="https://github.com/JacobSturges/react-resume"
          text="This site was designed and completed by myself in my spare time. It was built in NextJS and hosted using vercel."
          image="web-resume/web-resume"
        />
        <PortfolioItem
          title="Newsconnect 2.0"
          link="https://www.newsconnect.com.au/"
          text="This was a major project I worked on as part of a team at Newscorp. The frontend was built in angular and the CMS was built using KeystoneJS. The team both designed and built this site from the ground up."
          image="web-resume/newsconnect"
        />
      </div>
    </Section>
  );
}
