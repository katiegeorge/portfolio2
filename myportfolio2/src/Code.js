import React, { Component } from 'react';
import './css/App.scss';
import ProjectCard from './ProjectCard';
import Project from './Project';
import Tiles from './Tiles';
import alert from './assets/Bell-color.png';
import mobile from './assets/Mobile-color.png';
import vr from './assets/VR-color.png';
import vr1 from './assets/vr-timeline-1.png';
import vr2 from './assets/vr-timeline-2.png';
import mobile1 from "./assets/mobile1.png";
import mobile2 from "./assets/mobile2.png";
import mobile3 from "./assets/mobile3.png";
import mobile4 from "./assets/mobile4.png";
import alert1 from "./assets/alert1.png";
import alert2 from "./assets/alert2.png";

export const PROJECT_1 = 'project-1';
export const PROJECT_2 = 'project-2';
export const PROJECT_3 = 'project-3';

class Code extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProjectId: PROJECT_1
    };
  }

  isActive(id) {
    return this.state.selectedProjectId === id;
  }

  setActiveTab(selectedProjectId) {
    this.setState({ selectedProjectId });
  }

  renderAlert() {
    return (
      <React.Fragment>
        <div className="project--images grid-xs-1 grid-md-2">
          <img src={alert1} className="project--image" />
          <img src={alert2} className="project--image" />
        </div>
        <p>
          This component is one of several Ink components I've created over the
          past 18 months. To see Ink (Carta's Design System),{" "}
          <a href="https://ink.carta.com/ink-components#alert" target="_blank">
            check it out here.
          </a>
        </p>
        <p>
          There were several aspects I considered when building this component:
        </p>
          <ul>
            <li>
              <strong>
                The need for a temporary vs. permanent alert.
              </strong>
              <p>
                Some alerts, like an alert for a successful form submission, only 
                need to be present for a few seconds. Others, like a download alert,
                need to be persistant until the user closes it. I included an "isPersistant"
                boolean prop that adds a close button and keeps the alert present on the screen.
              </p>
            </li>
            <li>
              <strong>An "action" button.</strong>
              <p>
                I debated for a while if this button should always say "View," since
                at the time of building, the only case for an action button inside an alert 
                was the "View" button in a download alert. However, I realized there
                could be other cases and that the component should be flexible and scalable.
                Therefore, this prop takes an object that has an onClick and any text.
              </p>
            </li>
            <li>
              <strong>The types of alerts (and whether or not to include error alerts).</strong>
              <p>
                In general, I am opposed to using alerts to indicate an error. The user can easily
                miss the alert and be left not knowing what went wrong. I left it in for backwards
                compatibility purposes, and left it out of the documentation. Instead, I encourage
                people to use an error banner or field-level error messages to indicate errors.
              </p>
            </li>
            <li>
              <strong>The similarities to the Banner component</strong>
              <p>
                Because the alert and banner components are so similar in appearance, I actually
                created an shared internal component I called "snackbar" (snackbar has two flavors,
                "banner" and "alert", har har). Internally, Banner and Alert look very similar!
                </p>
            </li>
          </ul> 
      </React.Fragment>
    );
  }

  renderVRTimeline() {
    return (
      <React.Fragment>
        <div className="project--images grid-xs-1 grid-md-2">
          <img src={vr1} className="project--image" />
          <img src={vr2} className="project--image" />
        </div>
        <p>
          An independent project I worked on in the Knight Lab using A-Frame and
          MagicaVoxel. I wanted to create something to celebrate the history of
          feminism and women's rights in the United States post 1800, and
          thought a timeline could capture my ideas. I created all of the scenes
          and characters from scratch and added some simple animations in
          Javascript. Users can view the timeline with Google Cardboard or in
          their web browsers.
        </p>
        <p>
          <a href="https://medium.com/@katie.george/making-a-timeline-vr-style-8276149fb780">
            Read my Medium article about my process here. &rsaquo;
          </a>
        </p>
        <p>
          <a href="https://katiegeorge.github.io/VRTimeline/" target="_blank">
            Or just check it out live! &rsaquo;
          </a>
        </p>
      </React.Fragment>
    );
  }

  renderMobile() {
    return (
      <React.Fragment>
        <div className="project--images grid-xs-1 grid-md-4">
          <img src={mobile1} className="project--image project--image__vertical" />
          <img src={mobile2} className="project--image project--image__vertical" />
          <img src={mobile3} className="project--image project--image__vertical" />
          <img src={mobile4} className="project--image project--image__vertical" />
        </div>
        <p>
          In June 2018, the Investor Services team at Carta redesigned our
          product from the ground up, making it fully mobile-friendly.
          Our research showed that investors were always on the go, 
          and needed to see their portfolio companies on their phones. 
          Because of this, we made it a priority to make all of their 
          data available for them in a nicely layed out way.
        </p>
        <p>
          I wrote an article about how I created mobile-responsive 
          pages for this product.{" "}
          <a
            href="https://medium.com/@katie.george/making-mobile-responsive-pages-da2f8a7e447e"
            target="_blank"
          >
            Check it out the strategy here!
          </a>
        </p>
      </React.Fragment>
    );
  }

  render() {
    const projects = [
      {
        title: "Making Carta mobile-first",
        tags: ["React", "Design Systems", "CSS", "Mobile first"],
        description: "Created Carta's first mobile-friendly product.",
        image: mobile,
        size: "small",
        id: PROJECT_1
      },
      {
        title: "VR Timeline",
        tags: ["WebVR", "A-Frame", "HTML/CSS"],
        description:
          "A virtual-reality timeline of the history of women's rights.",
        image: vr,
        id: PROJECT_2
      },
      {
        title: "Alert component",
        tags: ["React", "HTML/CSS", "Design Systems"],
        description:
          "Built an unbreakable alert component for Carta's design system.",
        image: alert,
        id: PROJECT_3
      }
    ];
    return (
      <React.Fragment>
        <Tiles primary="blue" />
        <div className="section">
          <h1>Code</h1>
          <div className="cards-wrapper grid-xs-1 grid-md-3 grid-lg-2 grid-xl-3">
            {projects.map(project => (
              <ProjectCard
                title={project.title}
                tags={project.tags}
                image={project.image}
                color="blue"
                size={project.size === "small" ? "small" : null}
                description={project.description}
                isActive={this.isActive(project.id)}
                onActiveTab={this.setActiveTab.bind(this, project.id)}
                className={
                  this.isActive(project.id)
                    ? "card card__active card__active--blue"
                    : "card"
                }
              />
            ))}
          </div>
          {this.state.selectedProjectId === PROJECT_1 && (
            <Project
              title="Making Carta mobile-first"
              date="2018 - present"
              location="Carta"
              body={this.renderMobile()}
            />
          )}
          {this.state.selectedProjectId === PROJECT_2 && (
            <Project
              title="VR Timeline"
              date="Spring 2017"
              location="Northwestern Knight Lab"
              body={this.renderVRTimeline()}
            />
          )}
          {this.state.selectedProjectId === PROJECT_3 && (
            <Project
              title="Alert component"
              date="Winter 2019"
              location="Carta"
              body={this.renderAlert()}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Code;
