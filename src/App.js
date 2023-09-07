import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./pages/sign-up/Signup";
import Signin from "./pages/sign-in/Signin";
import Home from "./pages/home/Home";
import ProjectDetails from "./pages/project_details/ProjectDetails";
import ProjectCreation from "./pages/project-creation/ProjectCreation";
import OngoingProjects from "./pages/ongoing-projects/OngoingProjects";
import Badge from "./pages/Badge/Badge";
import ProjectSubmit from "./pages/project-creation/ProjectSubmit";
import Donate from "./pages/donate/Donate";
import Naturedefenders from "./components/naturedefenders/Naturedefenders";
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    // mainnet,
    polygon,
    //polygonMumbai,
    // optimism,
    // arbitrum,
    // goerli,
    // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});



function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}
    theme={darkTheme({
      accentColor: 'rgb(185,141,99)'
    })}>

    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/sign-up" element={<Signup />} />
      <Route  path="/sign-in" element={<Signin />} />
      <Route  path="/project-details" element={<ProjectDetails />} />
      <Route  path="/project-creation" element={<ProjectCreation />} />
      <Route  path='/project-submit' element={<ProjectSubmit/>} />
      <Route  path="/ongoing-projects" element={<OngoingProjects />} />
      <Route  path="/badge-reward" element={<Badge />} />
      <Route  path="/donate" element={<Donate/>} />
      <Route  path="/why-naturedefenders" element={<Naturedefenders />}/>
    </Routes>
    </BrowserRouter>
    </RainbowKitProvider>
    </WagmiConfig> 

  );
}

export default App;
