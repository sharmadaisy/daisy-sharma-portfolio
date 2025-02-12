import React from "react";
import "./workExp.css";
import CheckIcon from "./CheckIcon";
const WorkExp = () => {
  return (
    <section id="workexp">
      <h5>My Past and Current Experiences</h5>
      <h2>Work Experience</h2>

      <div className="container workexp__container">
        <article className="workexp">
          <div className="workexp__head">
            <div>
              <h3>Software Engineer 2 at Cisco</h3>
              <h3>(Frntend Developer)</h3>
            </div>
            <div>
              <h5>Feb 2024 - Oct 2024</h5>
              <h5>Full Time</h5>
            </div>
          </div>

          <ul className="workexp__list">
            <li>
              <CheckIcon />
              <p>
                Developed and optimized the SD-WAN SSP Portal, an advanced orchestration platform streamlining SD-WAN overlay
                management, improving operational efficiency and user experience
              </p>
            </li>
            <li>
              <CheckIcon />
              <p>
                Designed and implemented the Catalog Feature, enabling seamless upload, edit, delete, and metadata management,
                reducing backend manual efforts by categorizing large datasets for easier analysis and accessibility.
              </p>
            </li>
            <li>
              <CheckIcon />
              <p>
                Led the migration of critical platform modules (Admin User Management, Notifications, and Cloud Stacks) from legacy UI
                to a modern, pixel-perfect interface, ensuring improved usability and design consistency
              </p>
            </li>
            <li>
              <CheckIcon />
              <p>
                Executed a full-scale UI transformation following Magnetic Design Guidelines, solving complex front-end challenges such
                as nested navigation restructuring, component standardization, and visual hierarchy improvements.
              </p>
            </li>
            <li>
              <CheckIcon />
              <p>
                Integrated data visualization using pie charts and graphs to display CPU utilization and memory consumption over
                different timeframes (1 month, 1 week, 1 day, 1 hour), enhancing data interpretation for users
              </p>
            </li>
          </ul>
        </article>
        <article className="workexp">
          <div className="workexp__head">
            <div>
              <h3>Specialist Programmer at Infosys</h3>
              <h3>(Frontend Developer)</h3>
            </div>
            <div>
              <h5>Aug 2021 - Feb 2024</h5>
              <h5>Full Time</h5>
            </div>
          </div>

          <ul className="workexp__list">
            <li>
              <CheckIcon />
              <p>
                Developed and managed modules for 45+ clients in a multi-tenant environment, utilizing Angular,
                TypeScript, JavaScript, Node.js, RxJS, NgRx, Tailwind CSS, and Angular Material, ensuring scalability and
                reusability
              </p>
            </li>
            <li>
              <CheckIcon />
              <p>
                Revamped the UI for Admin User Management and Notification Preferences, optimizing loading speed and
                implementing WCAG-compliant accessibility enhancements to improve inclusivity
              </p>
            </li>
            <li>
              <CheckIcon />
              <p>
                Led the development of the Notifications Admin module for Infosys Wingspan, reducing manual effort by
                50% through automation and seamless REST API integration
              </p>
            </li>
            <li>
              <CheckIcon />
              <p>
                Built and integrated UI screens based on wireframes within a microfrontend architecture using Module
                Federation (Webpack), ensuring consistency and smooth navigation
              </p>
            </li>
            <li>
              <CheckIcon />
              <p>
                Developed and optimized key features for the Wingspan Coaching App, including My Notes, Discussions,
                and Program Landing Page, enhancing user engagement and experience
              </p>
            </li>
            <li>
              <CheckIcon />
              <p>
                Ensured 95% defect-free delivery by actively contributing to code reviews, testing, and debugging,
                leveraging Jasmine, Karma (unit testing), and Protractor (E2E testing)
              </p>
            </li>
            <li>
              <CheckIcon />
              <p>
                Received positive feedback from stakeholders for delivering visually appealing, user-friendly interfaces
                across multiple Wingspan project modules working in Agile-driven environment.
              </p>
            </li>
          </ul>
        </article>
        <article className="workexp">
          <div className="workexp__head">
            <div>
              <h3>Junior iOS Developer </h3>
              <h3>at Edutree Technologies</h3>
            </div>
            <div>
              <h5>Feb 2019 - Aug 2019</h5>
              <h5>Internship (Part Time)</h5>
            </div>
          </div>

          <ul className="workexp__list">
            <li>
              <CheckIcon />
              <p>
                Development, Unit Testing, Bug fixing and improving application
                performance{" "}
              </p>
            </li>
            <li>
              <CheckIcon />
              <p>
                UI Implementation- With the help of segmented control gave a new
                design of table view (along with the card view) and detail views
                for every cell by API Integration.{" "}
              </p>
            </li>
            <li>
              <CheckIcon />
              <p>
                API Integration- Parsing JSON and retrieving information for the
                above UI design
              </p>
            </li>
            <li>
              <CheckIcon />
              <p> Technologies Used- Swift, Xcode, Cocoa Touch, UIKit</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default WorkExp;
