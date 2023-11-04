import React from "react";
import PropTypes from "prop-types";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import home from "../assets/home.svg";

const handleDateFormat = (dateString) => {
  const formatedDate = new Date(dateString);
  const month = String(formatedDate.getMonth() + 1).padStart(2, "0");
  const day = String(formatedDate.getDate()).padStart(2, "0");
  const year = String(formatedDate.getFullYear());
  return `${month}-${day}-${year}`;
};

function ContactSection({ userData }) {
  return (
    <div className="contact-section">
      <h1 className="name">{userData.contactInfo.name.toUpperCase()}</h1>
      <h2 className="profile-heading">{userData.profileHeading}</h2>
    </div>
  );
}

ContactSection.propTypes = {
  userData: PropTypes.object,
};

function ContactDetails({ userData }) {
  return (
    <div className="contact-details">
      <div className="email">
        {userData.contactInfo.email && (
          <img className="email-icon" src={email} alt="email" width={20} />
        )}
        {userData.contactInfo.email}
      </div>
      <div className="phone">
        {userData.contactInfo.phone && <img src={phone} alt="phone" width={20} />}
        {userData.contactInfo.phone}
      </div>
      <div className="address">
        {userData.contactInfo.address && <img src={home} alt="home address" width={20} />}
        {userData.contactInfo.address}
      </div>
    </div>
  );
}

ContactDetails.propTypes = {
  userData: PropTypes.object,
};

function Summary({ userData }) {
  return (
    <>
      <h1 className="summary-heading">Summary</h1>
      {userData.summary !== "" && <p className="summary">{userData.summary}</p>}
    </>
  );
}

Summary.propTypes = {
  userData: PropTypes.object,
};

function ExperienceSection({ userData }) {
  return (
    <div className="experience-section">
      <h1 className="experience-heading">Experience</h1>
      <ul>
        {userData.experience[0].title &&
          userData.experience.map((job) => (
            <React.Fragment key={job.title}>
              <li className="job-list">
                {(!job.isJobContinue && (
                  <>
                    <p className="duration">
                      {handleDateFormat(job.startDate)} to {handleDateFormat(job.endDate)}:
                    </p>
                    <p className="title">
                      {job.title}, {job.company}
                    </p>
                  </>
                )) || (
                  <>
                    <p className="duration">{handleDateFormat(job.startDate)} - Present:</p>
                    <p className="title">
                      {job.title}, {job.company}
                    </p>
                  </>
                )}
              </li>
              <h2 className="description-heading">Job Description:</h2>
              <p className="job-description">{job.description}</p>
            </React.Fragment>
          ))}
      </ul>
    </div>
  );
}

ExperienceSection.propTypes = {
  userData: PropTypes.object,
};

function EducationSection({ userData }) {
  return (
    <div className="education-section">
      <h1 className="education-heading">Education</h1>
      <ul>
        {userData.education[0].degree !== "" &&
          userData.education.map((degree) => (
            <li className="education-list" key={degree.degree}>
              <p className="duration">
                {degree.startDate} - {degree.gradDate}:
              </p>
              <p className="degree-details">
                {degree.degree} in {degree.major} from {degree.school}, {degree.location}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}

EducationSection.propTypes = {
  userData: PropTypes.object,
};

export default function RightSection({ userData }) {
  return (
    <div className="right-section">
      <ContactSection userData={userData} />
      <ContactDetails userData={userData} />
      <Summary userData={userData} />
      <ExperienceSection userData={userData} />
      <EducationSection userData={userData} />
    </div>
  );
}

RightSection.propTypes = {
  userData: PropTypes.object,
};
