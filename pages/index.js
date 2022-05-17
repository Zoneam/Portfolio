import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Hayk Mnatsakanyan",
          description: "A passionate Full Stack Web Developer.",
          image:
            "https://avatars.githubusercontent.com/u/70010037?s=400&u=2de0281030b15d13c2bffb68a5f9215c3e52ca5f&v=4",
          url: "https://haykmn.com",
          keywords: [
            "Hanzla",
            "Hanzla Tauqeer",
            "@1hanzla100",
            "1hanzla100",
            "Portfolio",
            "Hanzla Portfolio ",
            "Hanzla Tauqeer Portfolio",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Projects />
      <Education />
      <Skills />
      <Proficiency />

      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
