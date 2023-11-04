const defaultData = {
  contactInfo: {
    name: "John Doe",
    email: "johndoe123@gmail.com",
    phone: "123-456-7890",
    address: "1234 Main St, Anytown, USA 12345",
  },
  profileHeading: "Full Stack Developer",

  education: [
    {
      school: "Pakistan Institute of Engineering and Applied Sciences",
      location: "Islamabad",
      degree: "Master of Science",
      major: "Electrical Engineering",
      startDate: "2015",
      gradDate: "2017",
    },
    {
      school: "University of Engineering and Technology",
      location: "Lahore",
      degree: "Bachelor of Science",
      major: "Electrical Engineering",
      startDate: "2011",
      gradDate: "2015",
    },
  ],

  summary:
    "A skilled and passionate web developer with 6 years of experience in designing and implementing innovative web solutions. Dedicated to creating robust, user-friendly websites and web applications. Seeking to contribute my technical expertise and creativity to a dynamic team or project.",

  experience: [
    {
      title: "Sr. Engineer",
      company: "Mughal Electronics, pvt ltd",
      location: "Rawalpindi",
      startDate: "2019-12-01",
      endDate: "",
      isJobContinue: true,
      description:
        "I am doing job here as a Sr. Engineer electronics since 2017. It's been a wonderful experience here working in a collaborative environment along with taleted colleagues and fellows under the umbrella of Research and Development Program",
    },
    {
      title: "Junior Engineer",
      company: "Desto private limited",
      location: "Lahore",
      startDate: "2017-11-01",
      endDate: "2019-11-30",
      isJobContinue: false,
      description:
        "I developed strong technical problem-solving and analytical skills during this role, as well as effective communication and teamwork abilities. Project management and documentation became areas of expertise as I contributed to the successful execution of various projects. My time as a Junior Engineer at [Your Previous Company Name] allowed me to play a significant role in our engineering endeavors, adapt to changing project requirements, and contribute to the overall success of our team.",
    },
  ],
};

const emptyData = {
  contactInfo: {
    name: "",
    email: "",
    phone: "",
    address: "",
  },
  profileHeading: "",

  education: [
    {
      school: "",
      location: "",
      degree: "",
      major: "",
      startDate: "",
      gradDate: "",
    },
  ],

  summary: "",

  experience: [
    {
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      isJobContinue: false,
      description: "",
    },
  ],
};

export { defaultData, emptyData };
                                                    