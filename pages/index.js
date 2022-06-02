import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Education = dynamic(() => import("../containers/Education"));
const Projects = dynamic(() => import("../containers/Projects"));
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
            "Hayk",
            "Hayk Mnatsakanyan",
            "Portfolio",
            "Hayk Portfolio ",
            "Hayk Mnatsakanyan Portfolio",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Education />
      <Projects />
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
