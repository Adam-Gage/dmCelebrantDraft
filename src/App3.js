import React from 'react';
import './App.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Header from './components/Header/Header';
import HomeTab from './components/Tabs/HomeTab';
import AboutTab from './components/Tabs/AboutTab';
import WeddingsTab from './components/Tabs/WeddingsTab';
import FuneralTab from './components/Tabs/FuneralTab';
import OtherTab from './components/Tabs/OtherTab';
import PrivacyTab from './components/Tabs/PrivacyTab';

function App() {
  const tabnames = ['HOME',   'ABOUT ME', 'WEDDINGS', 'FUNERALS', 'OTHER SERVICES', 'PRIVACY'];
  const tabfiles = [<HomeTab />,  <AboutTab />,   <WeddingsTab />, <FuneralTab />, <OtherTab />, <PrivacyTab />];
  return (
    <div>
    <Header />
    <Tabs>
      <TabList className={'tabList tabPanel'}>
        {tabnames.map(i=> <Tab className={'tab'}>{i}</Tab>)}
      </TabList>

        {tabfiles.map(i=> <TabPanel>{i}</TabPanel>)}

    </Tabs>
    </div>
  );
}

export default App;
