import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { EnrollmentProvider } from './components/EnrollmentProvider';

import Home from './pages/Home';
import About from './pages/About';
import Training from './pages/Training';
import CourseDetail from './pages/CourseDetail';
import TestingCentre from './pages/TestingCentre';
import FacilityRentalDetail from './pages/FacilityRentalDetail';
import Software from './pages/Software';
import Workspace from './pages/Workspace';
import PrivateOfficeDetail from './pages/PrivateOfficeDetail';
import BusinessSolutions from './pages/BusinessSolutions';
import BusinessServiceDetail from './pages/BusinessServiceDetail';
import BackgroundChecks from './pages/BackgroundChecks';
import Recruitment from './pages/Recruitment';
import Scholarships from './pages/Scholarships';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Enroll from './pages/Enroll';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import RefundPolicy from './pages/RefundPolicy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <EnrollmentProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="training" element={<Training />} />
          <Route path="training/:courseId" element={<CourseDetail />} />
          <Route path="testing-centre" element={<TestingCentre />} />
          <Route path="testing-centre/rent-facility" element={<FacilityRentalDetail />} />
          <Route path="software" element={<Software />} />
          <Route path="workspace" element={<Workspace />} />
          <Route path="workspace/private-offices" element={<PrivateOfficeDetail />} />
          <Route path="business-solutions" element={<BusinessSolutions />} />
          <Route path="business-solutions/:serviceId" element={<BusinessServiceDetail />} />
          <Route path="background-checks" element={<BackgroundChecks />} />
          <Route path="recruitment" element={<Recruitment />} />
          <Route path="scholarships" element={<Scholarships />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="enroll" element={<Enroll />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </EnrollmentProvider>
  );
}

export default App;
