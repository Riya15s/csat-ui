import { useState } from "react";
import ContentPage from "./components/ContentPage";
import StylingPage from "./components/StylingPage";
import MobilePreview from "./components/MobilePreview";
import "./App.css";

function App() {
  const [content, setContent] = useState({
    initialTitle: "Rate Your Experience",
initialSubtitle: "We would love your feedback",
  

    options: ["Option 1"],

    showComment: true,

    submitButtonText: "Submit",

    thankYouImage: "",

    thankYouTitle: "",
    thankYouSubtitle: "",

    thankYouButtonText: "Done",
  });

  const [styleData, setStyleData] = useState({
    backgroundColor: "#ffffff",
    titleColor: "#000000",
    subtitleColor: "#666666",
    buttonColor: "#2563eb",
    buttonTextColor: "#ffffff",
    fontSize: 16,
    fontWeight: 500,
    borderRadius: 10,
    buttonWidth: 100,
    buttonHeight: 40,
    selectedColor: "#facc15",
   unselectedColor: "#d1d5db",
  });

  return (
    <div className="container">
      <div className="left">
        <ContentPage
          content={content}
          setContent={setContent}
        />

        <StylingPage
          styleData={styleData}
          setStyleData={setStyleData}
        />
      </div>

      <div className="right">
        <MobilePreview
          content={content}
          styleData={styleData}
        />
      </div>
    </div>
  );
}

export default App;
