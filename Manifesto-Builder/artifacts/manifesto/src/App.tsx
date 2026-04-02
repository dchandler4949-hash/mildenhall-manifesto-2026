import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { AppLayout } from "./components/layout/AppLayout";
import { CookieBanner } from "./components/CookieBanner";
import { TextToSpeech } from "./components/TextToSpeech";
import Home from "./pages/Home";
import Manifesto from "./pages/Manifesto";
import Policies from "./pages/Policies";
import PolicyDetail from "./pages/PolicyDetail";
import PolicyEducation from "./pages/PolicyEducation";
import PolicyTransport from "./pages/PolicyTransport";
import PolicyPolicing from "./pages/PolicyPolicing";
import PolicyTaxation from "./pages/PolicyTaxation";
import PolicyHealth from "./pages/PolicyHealth";
import PolicyEnvironment from "./pages/PolicyEnvironment";
import PolicySolarEnergy from "./pages/PolicySolarEnergy";
import PolicyAgriculture from "./pages/PolicyAgriculture";
import PolicyCouncilTax from "./pages/PolicyCouncilTax";
import PolicyHousing from "./pages/PolicyHousing";
import PolicyPoverty from "./pages/PolicyPoverty";
import PolicyEmployment from "./pages/PolicyEmployment";
import PolicyUSMilitary from "./pages/PolicyUSMilitary";
import PolicyDemocracy from "./pages/PolicyDemocracy";
import LetterVoters from "./pages/LetterVoters";
import AboutDavid from "./pages/AboutDavid";
import SurveyList from "./pages/SurveyList";
import SurveyDetail from "./pages/SurveyDetail";
import SurveyResults from "./pages/SurveyResults";
import ImageMaps from "./pages/ImageMaps";
import ImageMapDetail from "./pages/ImageMapDetail";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import LegalImprint from "./pages/LegalImprint";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import GDPRPage from "./pages/GDPRPage";
import Disclaimer from "./pages/Disclaimer";
import CrimeData from "./pages/CrimeData";
import EducationSEND from "./pages/EducationSEND";
import HealthCareHomes from "./pages/HealthCareHomes";
import HealthCareWorkers from "./pages/HealthCareWorkers";
import SocialCareNationalisation from "./pages/SocialCareNationalisation";
import PovertySupport from "./pages/PovertySupport";
import TransportBusPasses from "./pages/TransportBusPasses";
import ParishMildenhall from "./pages/ParishMildenhall";
import ParishBartonMills from "./pages/ParishBartonMills";
import ParishWorlington from "./pages/ParishWorlington";
import ParishFreckenham from "./pages/ParishFreckenham";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function Router() {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/manifesto" component={Manifesto} />
        <Route path="/about" component={AboutDavid} />

        {/* Policy overview */}
        <Route path="/policies" component={Policies} />

        {/* Specific policy pages — must be before /:id catch-all */}
        <Route path="/policies/education" component={PolicyEducation} />
        <Route path="/policies/transport" component={PolicyTransport} />
        <Route path="/policies/policing" component={PolicyPolicing} />
        <Route path="/policies/taxation" component={PolicyTaxation} />
        <Route path="/policies/health" component={PolicyHealth} />
        <Route path="/policies/environment" component={PolicyEnvironment} />
        <Route path="/policies/solar-energy" component={PolicySolarEnergy} />
        <Route path="/policies/agriculture" component={PolicyAgriculture} />
        <Route path="/policies/council-tax" component={PolicyCouncilTax} />
        <Route path="/policies/housing" component={PolicyHousing} />
        <Route path="/policies/poverty" component={PolicyPoverty} />
        <Route path="/policies/employment" component={PolicyEmployment} />
        <Route path="/policies/us-military" component={PolicyUSMilitary} />
        <Route path="/policies/democracy" component={PolicyDemocracy} />
        <Route path="/letter" component={LetterVoters} />
        <Route path="/policies/crime-data" component={CrimeData} />
        <Route path="/policies/send" component={EducationSEND} />
        <Route path="/policies/social-care" component={SocialCareNationalisation} />
        <Route path="/policies/poverty-support" component={PovertySupport} />
        <Route path="/policies/bus-passes" component={TransportBusPasses} />
        <Route path="/policies/care-homes" component={HealthCareHomes} />
        <Route path="/policies/care-workers" component={HealthCareWorkers} />

        {/* Legacy policy detail fallback */}
        <Route path="/policies/:id" component={PolicyDetail} />

        {/* Surveys */}
        <Route path="/surveys" component={SurveyList} />
        <Route path="/surveys/:id" component={SurveyDetail} />
        <Route path="/surveys/:id/results" component={SurveyResults} />

        {/* Gallery / image maps */}
        <Route path="/gallery" component={ImageMaps} />
        <Route path="/gallery/:id" component={ImageMapDetail} />

        {/* Contact & admin */}
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />

        {/* Parish pages */}
        <Route path="/parishes/mildenhall-high-town" component={ParishMildenhall} />
        <Route path="/parishes/barton-mills" component={ParishBartonMills} />
        <Route path="/parishes/worlington" component={ParishWorlington} />
        <Route path="/parishes/freckenham" component={ParishFreckenham} />

        {/* Legal */}
        <Route path="/imprint" component={LegalImprint} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/cookies" component={Cookies} />
        <Route path="/gdpr" component={GDPRPage} />
        <Route path="/disclaimer" component={Disclaimer} />

        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
          <TextToSpeech />
          <CookieBanner />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
