import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./Header.css";
import { format } from "date-fns";
import {
  faBed,
  faCab,
  faCalendar,
  faCalendarDays,
  faPerson,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";

const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  // const handleOption = (name, operations) => {
  //   setOptions((prev) => {
  //     return{
  //       ...prev, [name]: operations === "i" ? options[name] +1 : options[name] -1,
  //     }
  //   })
  // }
  const handleOption = (name, operations) => {
    setOptions((prev) => {
      return{...prev, [name]: operations === "i" ? options[name] +1 : options[name] -1
    }
    })
  }
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCab} />
            <span>Cab</span>
          </div>
        </div>
        <h3 className="headerTitle">Available until 3 Jan 2023</h3>
        <h1 className="headerDesc">Save 15% with the late Escape</h1>
        <h1 className="desc1">Deals</h1>
        <p className="desc2">
          There's still time to tick one more destination off your wishlist
        </p>
        <div className="headerSearch">
          <div className="headerSearchItems" id="headerSearchItem1">
            <FontAwesomeIcon icon={faBed} />
            <input
              type="text"
              placeholder="Where are you going?"
              className="searchInput"
            />
          </div>
          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faCalendarDays} />
            <span className="calendar" onClick={() => setOpenDate(!openDate)}>
              {" "}
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}{" "}
            </span>
            {openDate && (
              <DateRange
                onChange={(item) => setDate([item.selection])}
                ranges={date}
                className="date"
              />
            )}
          </div>

          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faPerson} />
            <span>
              {`${options.adult} adult . ${options.children} children . ${options.room} rooms .`}
            </span>
            <div className="options">
              <div className="optionItems">
              <span className="optionText">Adult</span>
              <div className="optionCounter">
              <button disabled={options.adult <= 1} className="optionCounterButton" onClick={()=>handleOption("adult", "d")} >-</button>
              <span className="optionCounterNumber"> {options.adult} </span>
              <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")} >+</button>
              </div>
              </div>
              <div className="optionItems">
              <span className="optionText">Children</span>
              <div className="optionCounter">
              <button disabled={options.children <= 0} className="optionCounterButton" onClick={()=>handleOption("children", "d")} >-</button>
              <span className="optionCounterNumber"> {options.children} </span>
              <button className="optionCounterButton" onClick={()=>handleOption("children", "i")} >+</button>
              </div>
              </div>
              <div className="optionItems">
              <span className="optionText">Room</span>
              <div className="optionCounter">
              <button disabled={options.room <= 1} className="optionCounterButton" onClick={()=>handleOption("room", "d")} >-</button>
              <span className="optionCounterNumber"> {options.room} </span>
              <button className="optionCounterButton" onClick={()=>handleOption("room", "i")} >+</button>
              </div>
              </div>
            </div>
          </div>
          <div className="headerSearchItems">
            <button className=" searchbtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
