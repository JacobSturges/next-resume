import { Section } from "../ui/Section";
import { PortfolioItem } from "./PortfolioItem";

export function Portfolio() {
  return (
    <Section id="portfolio" title="Portfolio">
      <div className="flex justify-evenly flex-wrap gap-10">
        <PortfolioItem
          title="Frank Energie main site"
          link="https://www.frankenergie.nl/nl"
          text="The main customer web page for Frank Energie serves as a clean and efficient source of information for users while hosting the primary sign-up flow. During my time at Frank, I have worked diligently to maintain the website's code at a high standard of quality. Additionally, I have expanded its functionality, notably leading a major rework of the sign-up flow and contributing significantly to preparing the site for its launch in Spain. The website is built using Next.js for the frontend and GraphQL for the backend."
          image="web-resume/frank-web"
          imageAlt="screenshot of frank website"
        />
        <PortfolioItem
          title="Frank Energie app"
          link="https://play.google.com/store/apps/details?id=com.frankenergie.frank&hl=nl"
          text="The Frank Energie app is the primary platform for existing customers to access essential features related to their service. Maintaining and expanding this app is one of my key responsibilities at Frank Energie. I have made numerous high-quality contributions, most notably implementing the inbox feature. The app is built using React Native with a GraphQL backend."
          image="web-resume/frank-app"
          imageAlt="the frank app logo"
        />
        <PortfolioItem
          title="AIP Vision project"
          link="https://play.google.com/store/apps/details?id=com.playgroundxyz.vision_project&pcampaignid=web_share"
          text="We needed to develop a product enabling panellist users to complete in-app studies, allowing us to measure user attention effectively. This product was built using Kotlin, a technology I quickly learned on the job. With a very small development team consisting of just myself and my team lead, I carried a high level of responsibility throughout the project."
          image="web-resume/aip-vision-project"
          imageAlt="aip vision project"
        />
        <PortfolioItem
          title="AIP Measuremeant portal"
          link="https://playgroundxyz.com/aip"
          text="During my time at PXYZ, one of my key responsibilities was building and maintaining the measurement portal. This portal allows both internal and external users to create and manage their AIP campaigns. While working on this product, I contributed to several major initiatives to enhance its functionality, most notably implementing analytics pages that significantly reduced overhead for our campaign managers."
          image="web-resume/measurement-portal"
          imageAlt="aip measuremeant portal"
        />
        <PortfolioItem
          title="Are Media Sites"
          link="https://www.homestolove.com.au/"
          text="My team and I were responsible for the development and maintenance of our brand's websites, including well-known brands such as Now to Love, Home to Love, and Elle. These sites are built using React and styled with SASS."
          image="web-resume/now-to-love"
          imageAlt="are media sites"
        />
        <PortfolioItem
          title="This Site"
          link="https://github.com/JacobSturges/next-resume"
          text="I independently designed and developed this website as a personal project during my spare time. Built with Next.js and hosted on Vercel, it showcases my skills in modern web development and design."
          image="web-resume/web-resume"
          imageAlt="this website"
        />
      </div>
    </Section>
  );
}
