import { Navigation } from './components';

import AboutLayout from './layouts/about';
import ExperienceLayout from './layouts/experience';
import HomeLayout from './layouts/home';

function App() {
  return (
    <div>
      <Navigation />

      <HomeLayout />
      <ExperienceLayout />
      <AboutLayout />
    </div>
  );
}

export default App;
