import {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import useOutsideClick from "../hooks/useOutsideClick";
import {FaHome, FaAngular} from 'react-icons/fa';
import {FcTodoList} from 'react-icons/fc';
import {RiMastodonLine} from 'react-icons/ri';
import "./Navbar.css"


function NavBar() {
  const wrapperRef = useRef(null);
  const [showBar, setShowBar] = useState(false);

  useOutsideClick(wrapperRef, () => setShowBar(false));

  const onButtonClick = () => {
    setShowBar(!showBar)
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-light bg-white" ref={wrapperRef}>
        <Link to="/" className="navbar-brand"> MyTODO <span className="image"><FcTodoList/></span> </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation" onClick={onButtonClick}>
          <span className="navbar-toggler-icon"> </span>
        </button>
        <div className={`collapse navbar-collapse ${showBar ? "show" : null}`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/todoitem" className="nav-link"> <span className="image"> <RiMastodonLine/></span>
                <span> TodoItem</span>
                <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link"> <span className="image"><FaAngular/> </span> <span> About</span>
                <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link"> <span className="image"><FaHome/> </span> <span> Home</span> <span
                className="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
