// Import default style sheets
import "./styles/meyer-reset-1st.css";
import "./styles/my-css-reset-2nd.css";
import "./styles/normalize-3rd.css";
import "./styles/typography-4th.css";
// Import custom style sheets
import "./styles/index.css";
import "./styles/app.css";
// Import React Hooks
import { useState } from "react";
// Import components
import { emptyData } from "./components/defaultData";
import HeaderSection from "./components/HeaderSection";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

// App component
export default function App() {
  const [userData, setUserData] = useState(emptyData);
  return (
    <div className="app">
      <HeaderSection />
      <div className="content">
        <LeftSection userData={userData} setUserData={setUserData} />
        <RightSection userData={userData} />
      </div>
    </div>
  );
}
