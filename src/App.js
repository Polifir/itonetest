import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Test1 } from './Test1/Test1';
import { Test2 } from './Test2/test2';
import { Test3 } from './Test3/test3';
import {ServiceCardDetails} from './Test2/components/ServiceCardDetails/ServiceCardDetails';
import { EventDay } from './Test3/components/EventDay/EventDay';




function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<Test1/>}/>
          <Route path="test2" element={<Test2/>}/>
          <Route path='test3' element={<Test3/>}/>
          <Route path={'/test3/:date'} element={<EventDay/>}/>
          <Route path={'/test2/:id/details'} element={<ServiceCardDetails />} />
        </Route>
      </Routes>
    </div>  
  );
}

export default App;
