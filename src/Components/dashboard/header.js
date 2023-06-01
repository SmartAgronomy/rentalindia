import React from "react"
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import cart from "../Images/cart.png"
import bars from "../Images/bars.png"
import reports from "../Images/reports_logo.webp"
import services from "../Images/services_logo.jpeg"
import languages from "../Images/language_logo.png"
import settings from "../Images/settings_logo.jpeg"
import FAQ from "../Images/FAQ_logo.jpeg"
import sign_in from "../Images/sign_in.jpg"
import Website_logo from "../Images/Rent_logo-removebg-preview.png"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Profile from "../pages/profile";
import logout_img from "../Images/logout-logo.png"
import { useCookies } from "react-cookie";
import { useState } from "react";
import profile_img from "../Images/reg-user.png"
import useUserAPI from "../useUserApi";
import profile_before from "../Images/pro.jpg"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BeforeProfile from "../pages/beforeProfile"
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';



function Header() {

  const [cookies, setCookies] = useCookies(["access_token"]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const navigate = useNavigate();

  const { isLogged, isAdmin, setIsLogged } = useUserAPI(cookies.access_token);

  console.log('isAdmin:', isAdmin);




  //   const subMenu=document.getElementById("subMenu");
  // function toggleMenu(){
  //   subMenu.classList.toggle('open-menu');

  // }

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    setIsLogged(false);
    navigate("/");
    window.location.reload();
  };
  const adminRouter = () => {
    if (isAdmin) {
      return <li><Link to="/admin">Admin</Link></li>;
    }
    return null;
  };



  return (
    <header>
      <img class="website_logo" src={Website_logo} />
      <div class="search_bar">
        <input class="search-input" type="search" placeholder="Search for Products..." />
        <input class="search-btn" type="button" value="Search" />
      </div>
      <img class="cart" src={cart} />
      <nav >
        <ul>


          {adminRouter()}

          <li><Link to="/" class="root">Dashboard</Link></li>
          <hr class="dashboard-underline"></hr>

          <li><Link to="/Marketplace">Marketplace</Link>
            <div class="sub-nav_1">
              <ul>
                <li><Link to="#">Sellers</Link></li>
                <li><Link to="#">Buyers</Link></li>
              </ul>
            </div>
          </li>
          <li><Link to="/products">Products</Link>
            <div class="sub-nav">
              <ul>
                <li><Link to="#">Farm Machinery</Link>

                  <div class="sub-nav1">
                    <ul>
                      <li><Link to="#">Harvesters</Link></li>
                      <li><Link to="#">Sprayers</Link></li>
                      <li><Link to="#">Cultivaters</Link></li>
                      <li><Link to="#">Pipes</Link></li>
                      <li><Link to="#">more...</Link></li>
                    </ul>
                  </div>
                </li>
                <li><Link to="#">Pumps and Motors</Link>
                  <div class="sub-nav2">
                    <ul>
                      <li><Link to="#">domestic pumps</Link></li>
                      <li><Link to="#">Industrial pumps</Link></li>
                      <li><Link to="#">motors and Engines</Link></li>
                      <li><Link to="#">Agricultural pumps</Link></li>
                      <li><Link to="#">more...</Link></li>
                    </ul>
                  </div>
                </li>
                <li><Link to="#">Power Equipments</Link>
                  <div class="sub-nav3">
                    <ul>
                      <li><Link to="#"> Pipe sprinklers</Link></li>
                      <li><Link to="#">solar Products</Link></li>
                      <li><Link to="#">more...</Link></li>
                    </ul>
                  </div>

                </li>
                <li><Link to="#">Crop processors</Link>
                  <div class="sub-nav4">
                    <ul>
                      <li><Link to="#"> food packaging</Link></li>
                      <li><Link to="#">more...</Link></li>
                    </ul>
                  </div>

                </li>
                <li><Link to="#">Workshop tools</Link>
                  <div class="sub-nav5">
                    <ul>
                      <li><Link to="#">compressors</Link></li>
                      <li><Link to="#">power tools</Link></li>
                      <li><Link to="#">hand tools</Link></li>
                      <li><Link to="#">more...</Link></li>
                    </ul>
                  </div>

                </li>
              </ul>
            </div>

          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>



        </ul>
        {/* <div class="button">
            {!cookies.access_token ? (
              <Link to="/signin" ><button>Sign in</button></Link>,
              <Link to="/signup"><button>Sign Up</button></Link>,
              <Link to="/profile"><button/>Profile</Link>  
              ) : (
                <button onClick={logout}> Logout </button>
              )}
            </div> */}

        <div class="button">
          {!cookies.access_token ? (
            <>
              <Link to="/signin">
                <button>Sign in</button>
              </Link>
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
              <Box sx={{ display: 'block', alignItems: 'right', textAlign: 'left ', marginTop: '-43px', marginLeft: '170px', transform: 'none' }}>
                <Tooltip title="Manage Profile">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar />
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu class="menu"
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                sx={{
                  width: '250px'
                }}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 20,
                      height: 9,
                      ml: 0,
                      mr: 0,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 2,
                      height: 10,
                      bgcolor: 'background.paper',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >

                <MenuItem >
                  My account
                </MenuItem>
                <MenuItem>
                  <hr></hr></MenuItem>
                <MenuItem>
                  <p>Please Sign Up to Manage<br></br> your Accounts.</p>
                </MenuItem>



              </Menu>

            </>
          ) : (
            <>
              <img class="logout-logo" src={logout_img} />
              <button onClick={logout}>Logout</button>

              <img class="profile-pic" src={profile_img} />
              <Link to="/profile">
                <button >My Account</button>
                <span class="caret" ></span>
              </Link>
            </>
          )}
        </div>


      </nav>


      {/* <img class="bar" src={bars} onClick={toggleMenu} /> */}

      {/* <div class="sub-menu-wrap" >
            <div class="sub-menu"  id="subMenu">
              <Link to="#" class="sub-menu-link">
                <img src={reports} />
                <p>Reports</p>
                <span>&gt;</span>
              </Link>
  
              <Link to="#" class="sub-menu-link">
                <img src={services} />
                <p>Services</p>
                <span>&gt;</span>
                
              </Link>
  
              <Link to="#" class="sub-menu-link">
                <img src={languages} />
                <p>Languages</p>
                <span>&gt;</span>
                
              </Link>
  
              <Link to="#" class="sub-menu-link">
                <img src={settings} />
                <p>Settings</p>
                <span>&gt;</span>
                
              </Link>
  
              <Link to="#" class="sub-menu-link">
                <img src={sign_in} />
                <p>Accounts</p>
                <span>&gt;</span>
  
                
              </Link>
  
              <Link to="#" class="sub-menu-link">
                <img src={FAQ} />
                <p>FAQ</p>
                <span>&gt;</span>
                
              </Link>
            </div>
          </div> */}
      <div class="logo">
        <img class="website_logo" src={Website_logo} />
      </div>


    </header>



  )
}
export default Header;

