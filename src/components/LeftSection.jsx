import { defaultData, emptyData } from "./defaultData";
import PropTypes from "prop-types";

function ContactSection({ userData, setUserData }) {
  return (
    <form>
      {
        <div className="contact-section">
          <label htmlFor="name">Name:</label>
          <input
            
            type="text"
            id="name"
            value={userData.contactInfo.name}
            onChange={(e) =>
              setUserData({
                ...userData,
                contactInfo: { ...userData.contactInfo, name: e.target.value },
              })
            }
            autoComplete="on"
          />
          <label htmlFor="profile-heading">Profile Heading:</label>
          <input
            type="text"
            name="profile-heading"
            id="profile-heading"
            value={userData.profileHeading}
            onChange={(e) => {
              setUserData({
                ...userData,
                profileHeading: e.target.value,
              });
            }}
            autoComplete="on"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={userData.contactInfo.email}
            onChange={(e) =>
              setUserData({
                ...userData,
                contactInfo: { ...userData.contactInfo, email: e.target.value },
              })
            }
            autoComplete="on"
          />
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={userData.contactInfo.phone}
            onChange={(e) =>
              setUserData({
                ...userData,
                contactInfo: { ...userData.contactInfo, phone: e.target.value },
              })
            }
            autoComplete="on"
          />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={userData.contactInfo.address}
            onChange={(e) =>
              setUserData({
                ...userData,
                contactInfo: { ...userData.contactInfo, address: e.target.value },
              })
            }
            autoComplete="on"
          />
        </div>
      }
    </form>
  );
}

ContactSection.propTypes = {
  userData: PropTypes.object,
  setUserData: PropTypes.func,
};

function EducationSection({ userData, setUserData }) {
  return (
    <form>
      {userData.education.map((education, index) => (
        <div key={index} className="education-section">
          <label htmlFor={`school-${index}`}>School:</label>
          <input
            type="text"
            id={`school-${index}`}
            value={education.school}
            onChange={(e) => {
              const newData = { ...userData };
              newData.education[index].school = e.target.value;
              setUserData(newData);
            }}
            autoComplete="on"
          ></input>
          <label htmlFor={`location-${index}`}>Location:</label>
          <input
            type="text"
            id={`location-${index}`}
            value={education.location}
            onChange={(e) => {
              const newData = { ...userData };
              newData.education[index].location = e.target.value;
              setUserData(newData);
            }}
            autoComplete="on"
          ></input>
          <label htmlFor={`degree-${index}`}>Degree:</label>
          <input
            id={`degree-${index}`}
            type="text"
            value={education.degree}
            onChange={(e) => {
              const newData = { ...userData };
              newData.education[index].degree = e.target.value;
              setUserData(newData);
            }}
            autoComplete="on"
          ></input>
          <label htmlFor={`major-${index}`}>Major:</label>
          <input
            type="text"
            id={`major-${index}`}
            value={education.major}
            onChange={(e) => {
              const newData = { ...userData };
              newData.education[index].major = e.target.value;
              setUserData(newData);
            }}
            autoComplete="on"
          ></input>
          <label htmlFor={`start-date-${index}`}>Starting Year:</label>
          <input
            type="text"
            id={`start-date-${index}`}
            value={education.startDate}
            onChange={(e) => {
              const newData = { ...userData };
              newData.education[index].startDate = e.target.value;
              setUserData(newData);
            }}
            autoComplete="on"
          ></input>
          <label htmlFor={`grad-date-${index}`}>Graduation Year:</label>
          <input
            type="text"
            id={`grad-date-${index}`}
            value={education.gradDate}
            onChange={(e) => {
              const newData = { ...userData };
              newData.education[index].gradDate = e.target.value;
              setUserData(newData);
            }}
            autoComplete="on"
          ></input>
          {index < userData.education.length - 1 && <hr />}
        </div>
      ))}
    </form>
  );
}

EducationSection.propTypes = {
  userData: PropTypes.object,
  setUserData: PropTypes.func,
};

function ExperienceSection({ userData, setUserData }) {
  return (
    <form action="">
      {userData.experience.map((job, index) => (
        <div key={index} className="experience-section">
          <label htmlFor={`job-title-${index}`}>Job Title:</label>
          <input
            type="text"
            id={`job-title-${index}`}
            value={job.title}
            onChange={(e) => {
              const newData = { ...userData };
              newData.experience[index].title = e.target.value;
              setUserData(newData);
            }}
            autoComplete="on"
          />
          <label htmlFor={`company-${index}`}>Company:</label>
          <input
            type="text"
            id={`company-${index}`}
            value={job.company}
            onChange={(e) => {
              const newData = { ...userData };
              newData.experience[index].company = e.target.value;
              setUserData(newData);
            }}
            autoComplete="on"
          />
          <label htmlFor={`start-date-${index}`}>Start Date:</label>
          <input
            type="date"
            id={`start-date-${index}`}
            value={job.startDate}
            onChange={(e) => {
              const newData = { ...userData };
              newData.experience[index].startDate = e.target.value;
              setUserData(newData);
            }}
            autoComplete="on"
          />
          <label htmlFor={`end-date-${index}`}>End Date:</label>
          <input
            type="date"
            id={`end-date-${index}`}
            value={job.endDate}
            disabled={job.isJobContinue}
            onChange={(e) => {
              const newData = { ...userData };
              newData.experience[index].endDate = e.target.value;
              setUserData(newData);
            }}
            autoComplete="on"
          />
          <div className="job-status">
            <input
              type="checkbox"
              name="end-job-check"
              id={`job-continue-${index}`}
              checked={job.isJobContinue}
              onChange={(e) => {
                const newData = { ...userData };
                newData.experience[index].isJobContinue = e.target.checked;
                setUserData(newData);
              }}
              autoComplete="on"
            />
            <label className="job-status" htmlFor={`job-continue-${index}`}>
              Still Working here?
            </label>
          </div>
          <label htmlFor={`summary-${index}`}>Summary:</label>
          <textarea
            id={`summary-${index}`}
            value={job.description}
            onChange={(e) => {
              const newData = { ...userData };
              newData.experience[index].description = e.target.value;
              setUserData(newData);
            }}
          />
          {index < userData.experience.length - 1 && <hr />}
        </div>
      ))}
    </form>
  );
}

ExperienceSection.propTypes = {
  userData: PropTypes.object,
  setUserData: PropTypes.func,
};

export default function LeftSection({ userData, setUserData }) {
  const handleAddEducation = () => {
    const newData = { ...userData };
    newData.education.push({ ...emptyData.education[0] });
    setUserData(newData);
  };

  const handleAddExperience = () => {
    const newData = { ...userData };
    newData.experience.push({ ...emptyData.experience[0] });
    setUserData(newData);
  };
  return (
    <div className="left-section">
      <div className="loading-btns">
        <button
          className="btn sample-btn"
          onClick={() => {
            setUserData(defaultData);
          }}
        >
          Load Sample
        </button>
        <button
          className="btn clear-btn"
          onClick={() => {
            setUserData(emptyData);
          }}
        >
          Clear Data
        </button>
      </div>
      <div className="contact-section">
        <h1>CONTACT INFO:</h1>
        <ContactSection userData={userData} setUserData={setUserData} />
      </div>
      <div className="education-section">
        <h1>EDUCATION:</h1>
        <EducationSection userData={userData} setUserData={setUserData} />
        <button className="btn add-education" onClick={handleAddEducation}>
          Add Education
        </button>
      </div>
      <div className="experience-section">
        <h1>EXPERIENCE:</h1>
        <ExperienceSection userData={userData} setUserData={setUserData} />
        <button className="btn add-job" onClick={handleAddExperience}>
          Add Job
        </button>
      </div>
    </div>
  );
}

LeftSection.propTypes = {
  userData: PropTypes.object,
  setUserData: PropTypes.func,
};
