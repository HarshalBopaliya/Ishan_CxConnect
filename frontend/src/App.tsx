import CampaignTable from "./datatables/campaign";
import UserTable from "./datatables/usertable";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App(){
    return(<>
      <img src="../assets/ishan_logo.png" className="h-16"/>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserTable/>}/>
          <Route path="/campaign" element={<CampaignTable />}/>
        </Routes>
      </BrowserRouter>
    </>)
}

export default App;