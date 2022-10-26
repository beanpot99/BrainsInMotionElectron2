import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Forms from "../components/shared/EIForms";
import ViewTitle from "../components/shared/ViewTitle";
export default function Home(){
    return(
<>
       <div className='content-wrapper'>
      {/* <Navbar/> */}
    <div className="row no-gutters fh">
        {/* <div className="col-3 fh">
          <Search/>
        </div> */}
        <div className="col-9 fh">
         <ViewTitle/>
          {/* <div className="container-fluid">
           <Forms/>
          </div> */}
        </div>
      </div>
    </div>
    </>
  )
    
}