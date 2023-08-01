import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./pages/sign-up/Signup";
import Signin from "./pages/sign-in/Signin";
import Home from "./pages/home/Home";
import ProjectDetails from "./pages/project_details/ProjectDetails";
import ProjectCreation from "./pages/project-creation/ProjectCreation";
import OngoingProjects from "./pages/ongoing-projects/OngoingProjects";
import NFT from "./pages/nft/NFT";
import ProjectSubmit from "./pages/project-creation/ProjectSubmit";
import Donate from "./pages/donate/Donate";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/sign-up" element={<Signup />} />
      <Route  path="/sign-in" element={<Signin />} />
      <Route  path="/project-details" element={<ProjectDetails />} />
      <Route  path="/project-creation" element={<ProjectCreation />} />
      <Route path='/project-submit' element={<ProjectSubmit/>} />
      <Route  path="/ongoing-projects" element={<OngoingProjects />} />
      <Route  path="/nft-reward" element={<NFT />} />
      <Route path="/donate" element={<Donate/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
