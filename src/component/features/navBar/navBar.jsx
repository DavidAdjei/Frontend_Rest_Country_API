import React from 'react'
import './navBar.css'
import { BsMoonFill, BsMoon } from "react-icons/bs";
import { useTheme } from '../../themes/theme';

export const NavBar = ({ toggleTheme }) => {
  // eslint-disable-next-line
  const [theme, setTheme, getTheme] = useTheme();
  const contextTheme = getTheme();

    return (
        <div className='nav'style={{
          background: contextTheme.foreground,
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
            {theme === 'lightTheme' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
            
      </div>
    )
  }