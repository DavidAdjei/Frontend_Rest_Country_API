import React from 'react'
import './navBar.css'
import { BsMoonFill, BsMoon } from "react-icons/bs";
import { useTheme } from '../../themes/theme';

export const NavBar = ({ toggleTheme }) => {
  const [theme, setTheme, getTheme] = useTheme();
  const contextTheme = getTheme();

    return (
        <div className='nav'style={{
          background: contextTheme.elements,
          color: contextTheme.text
        }}>
          <h2>
              Where in the world?
          </h2>
        <div className='toggleTheme' >
          <button onClick={toggleTheme} style={{ color: contextTheme.text }}>
            {theme === 'light' ?
                <BsMoon className="nav__switch__icon" />
                : <BsMoonFill className="nav__switch__icon" />
            }
            {theme === 'lightTheme' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
            
      </div>
    )
  }