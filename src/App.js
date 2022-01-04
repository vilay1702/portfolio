import React, { useContext } from "react";
import {
  Home,
  Certificates,
  Projects,
  Education,
  Experience,
  PoR,
  Header,
  Footer,
} from "./components";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "./ThemeContext";

// import { BrowserRouter as Router } from "react-router-dom";
// import Axios from "axios";

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userInput, setUserInput] = useState("");

  // const getVisits = async () => {
  //   setIsLoading(true);
  //   const inp = prompt("Enter your name");

  //   setUserInput(inp);

  //   if (userInput.toLowerCase() !== "vilay@17") {
  //     console.log(userInput, inp);
  //     const { data } = await Axios.get(
  //       "https://api.countapi.xyz/hit/vilay1702.github.io-vilay-portfolio/key"
  //     );
  //     console.log(data.value);
  //   } else {
  //     console.log("Hi Vilay");
  //     setUserInput("Vilay");
  //   }
  //   setIsLoading(false);
  // };

  // useEffect(async () => {
  //   getVisits();
  // }, []);

  const { theme } = useContext(ThemeContext);
  AOS.init({ duration: 500 });
  return (
    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route path="education" element={<Education />} />
    //     <Route path="certificates" element={<Certificates />} />
    //     <Route path="positions" element={<PoR />} />
    //     <Route path="experience" element={<Experience />} />
    //     <Route path="works" element={<Projects />} />
    //     <Route path="*" element={<Home />} />
    //   </Routes>
    //   <Footer />
    // </Router>
    <>
      <div
        className={
          theme === "light"
            ? "bg-white text-gray-900"
            : "bg-gray-900 text-white"
        }
      >
        <Header />
        <Home />
        <Education />
        <Experience />
        <PoR />
        <Projects />
        <Certificates />
        <Footer />
      </div>
    </>
  );
};

export default App;
