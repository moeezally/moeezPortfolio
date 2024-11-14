import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
// import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {

  render() {
    const theme = this.props.theme;
    const ProjectsData = {
      data: [
        {
          "id": "0",
          "name": "Adoringo",
          "createdAt": "September 2024",
          "url": "https://play.google.com/store/apps/details?id=com.adoringo.mobile&hl=en",
          "description": "Adoringo - the only marketplace app you will ever need for Pet Adoption",
          "isFork": false,
          "languages": [
            {
              "name": "JavaScript",
              "iconifyClass": "logos-javascript"
            },
            {
              "name": "React Native",
              "iconifyClass": "logos-react"
            },
            {
              "name": "Redux",
              "iconifyClass": "logos-redux"
            },
            {
              "name": "Firebase",
              "iconifyClass": "logos-firebase"
            },
            {
              "name": "GitHub",
              "iconifyClass": "skill-icons:github-dark"
            }
          ]
        },
        {
          "id": "1",
          "name": "Ship2Mates - Boating Made Easy",
          "createdAt": "August 2024",
          "url": "https://play.google.com/store/apps/details?id=com.ship2mates.ship2mates&hl=en",
          "description": "Discover Your Perfect Boating Experience with Ship2Mates",
          "isFork": false,
          "languages": [
            {
              "name": "JavaScript",
              "iconifyClass": "logos-javascript"
            },
            {
              "name": "React Native",
              "iconifyClass": "logos-react"
            },
            {
              "name": "Redux",
              "iconifyClass": "logos-redux"
            },
            {
              "name": "GitHub",
              "iconifyClass": "skill-icons:github-dark"
            }
          ]
        },
        {
          "id": "2",
          "name": "Workforce Tech Analyst",
          "createdAt": "February 2024",
          "url": "https://play.google.com/store/apps/details?id=com.sigmago.harrishealthchnician&hl=en",
          "description": "Workforce Tech Analyst offers your Technicians a seamless Cherwell mobile experience.",
          "isFork": false,
          "languages": [
            {
              "name": "JavaScript",
              "iconifyClass": "logos-javascript"
            },
            {
              "name": "React Native",
              "iconifyClass": "logos-react"
            },
            {
              "name": "Redux",
              "iconifyClass": "logos-redux"
            },
            {
              "name": "Firebase",
              "iconifyClass": "logos-firebase"
            },
            {
              "name": "GitHub",
              "iconifyClass": "skill-icons:github-dark"
            }
          ]
        },
        {
          "id": "3",
          "name": "NFTBee",
          "createdAt": "October 2024",
          "url": "https://play.google.com/store/apps/details?id=com.certyfactug.nftbee&hl=en",
          "description": "An app of the marketplaces, where user can publish NFTs, discover other collections and interact with the community.",
          "isFork": false,
          "languages": [
            {
              "name": "JavaScript",
              "iconifyClass": "logos-javascript"
            },
            {
              "name": "React Native",
              "iconifyClass": "logos-react"
            },
            {
              "name": "Redux",
              "iconifyClass": "logos-redux"
            },
            {
              "name": "Firebase",
              "iconifyClass": "logos-firebase"
            },
            {
              "name": "GitHub",
              "iconifyClass": "skill-icons:github-dark"
            }
          ]
        }
      ]
    }
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assets/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <div className="button-container">
          <Button
            text={"More Projects"}
            className="project-button"
            href={greeting.projectPortfolioDocument}
            newTab={true}
            theme={theme}
          />
          <Button
            text={"Visit GitHub"}
            className="project-button"
            href={greeting.githubProfile}
            newTab={true}
            theme={theme}
          />

        </div>
        {/* Publications  */}
        {/* {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div> */}

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
