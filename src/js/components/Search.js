import React from "react";
import classes from "./componentStylesheets/Search.module.css";

export default function Search({searchPropOne,setSearchPropOne, searchPropTwo, setSearchPropTwo, searchPropThree, setSearchPropThree}){
    return(
        // <div className="list-container">
        // <div className="chat-search-box">
          <div className={classes.search}>
            <input className="form-control" placeholder="Search" />
            <div className={`form-check ${classes.filterContainer}`}>
                    <div className="mr-3">
                    <input 
                        className="mr-1"
                        type="radio" 
                        name="EI"
                        value={searchPropOne}
                        checked={searchPropOne==="EI"}
                        onChange={setSearchPropOne}
                    />
                    <label htmlFor="EI">EI</label>
                    </div>
                    <div className="mr-3">
                    <input 
                        className="mr-1"
                        type="radio" 
                        name="Clinic"
                        value={searchPropTwo}
                        checked={searchPropTwo==="Clinic"}
                        onChange={setSearchPropTwo}
                    />Clinic
                    </div><div >
                     <input 
                        className="mr-1"
                        type="radio" 
                        name="All"
                        value={searchPropThree}
                        checked={searchPropThree==="All"}
                        onChange={setSearchPropThree}
                    />All
                    </div>
          </div>
           </div>
      //   {/* <ul className="items">
      //     <li
      //       onClick={() => {}}
      //       className="item">
      //       <div className="item-status">
      //         <img src="https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg" alt="Retail Admin" />
      //         <span className="status online"></span>
      //       </div>
      //       <p className="name-time">
      //       <span className="name mr-2">Therapist 1</span>
      //       </p>
      //     </li>
      //     <li
      //       onClick={() => {}}
      //       className="item">
      //       <div className="item-status">
      //         <img src="https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg" alt="Retail Admin" />
      //         <span className="status online"></span>
      //       </div>
      //       <p className="name-time">
      //       <span className="name mr-2">Therapist 2</span>
      //       </p>
      //     </li>
      //     <li
      //       onClick={() => {}}
      //       className="item">
      //       <div className="item-status">
      //         <img src="https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg" alt="Retail Admin" />
      //         <span className="status online"></span>
      //       </div>
      //       <p className="name-time">
      //       <span className="name mr-2">Therapist 3</span>
      //       </p>
      //     </li>
      //     <li
      //       onClick={() => {}}
      //       className="item">
      //       <div className="item-status">
      //         <img src="https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg" alt="Retail Admin" />
      //         <span className="status online"></span>
      //       </div>
      //       <p className="name-time">
      //       <span className="name mr-2">Therapist 4</span>
      //       </p>
      //     </li>
      //   </ul> */}
      // //</div>
    )
}