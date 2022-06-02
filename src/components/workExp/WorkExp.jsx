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
              <h3>Systems Engineer at Infosys</h3>
              <h3>(Salesforce Developer)</h3>
            </div>
            <div>
              <h5>Aug 2021 - Present</h5>
              <h5>Full Time</h5>
            </div>
          </div>

          <ul className="workexp__list">
            <li>
              <CheckIcon/>
              <p>
                Developed custom opportunity creation Lightning Web Component
                with validations and apex controllers and successful insertion
                of data into Salesforce database deployed using Visual Force
                Pages.
              </p>
            </li>
            <li>
              <CheckIcon/>
              <p>
                Migrated existing Visualforce Pages to Lightning Web Components
                for Pre-Close checklist and build UI using datatable and
                record-edit forms for custom business requirements.
              </p>
            </li>
            <li>
              <CheckIcon/>
              <p>
                Experienced with Flows, Process Builders and Relationships in
                Salesforce
              </p>
            </li>
            <li>
              <CheckIcon/>
              <p>
                Skills used - Salesforce Admin, Salesforce Platform Development,
                Lightning Web Components
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
              <CheckIcon/>
              <p>
                Development, Unit Testing, Bug fixing and improving application
                performance{" "}
              </p>
            </li>
            <li>
              <CheckIcon/>
              <p>
                UI Implementation- With the help of segmented control gave a new
                design of table view (along with the card view) and detail views
                for every cell by API Integration.{" "}
              </p>
            </li>
            <li>
              <CheckIcon/>
              <p>
                API Integration- Parsing JSON and retrieving information for the
                above UI design
              </p>
            </li>
            <li>
              <CheckIcon/>
              <p> Technologies Used- Swift, Xcode, Cocoa Touch, UIKit</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default WorkExp;
