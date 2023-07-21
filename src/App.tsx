import { Navigation } from './components';

import { AboutLayout, ExperienceLayout, HomeLayout } from './layouts';

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
