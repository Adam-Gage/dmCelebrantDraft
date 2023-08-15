import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AddBox, BrokenImage, DataThresholding } from '@mui/icons-material';

import HomeTab from './components/Tabs/HomeTab';
import AboutTab from './components/Tabs/AboutTab';
import WeddingsTab from './components/Tabs/WeddingsTab';
import FuneralTab from './components/Tabs/FuneralTab';
import OtherTab from './components/Tabs/OtherTab';
import PrivacyTab from './components/Tabs/PrivacyTab';

function App2() {
    const tabnames = ['HOME',   'ABOUT ME', 'WEDDINGS', 'FUNERALS', 'OTHER SERVICES', 'PRIVACY'];
    const tabfiles = [<HomeTab />,  <AboutTab />,   <WeddingsTab />, <FuneralTab />, <OtherTab />, <PrivacyTab />];
  
  return (
    <div>
        <Tabs>
            <div className={'v2'}>
                <div className={'tabList-ver2-panel'}>
                    <TabList className={'tabList-ver2'}>
                        {tabnames.map(i=> <Tab className={'tab-ver2'}>{i}</Tab>)}
                    </TabList>
                    <div className='v2-name-tag'>DUNCAN MOFFATT</div>
                </div>
            </div>
            {tabfiles.map(i=> <TabPanel>{i}</TabPanel>)}
        </Tabs>
    </div>
  )
}

export default App2