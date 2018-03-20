import React from 'react'
import Icon from 'cozy-ui/react/Icon'
import { translate } from 'cozy-ui/react/I18n'
import { NavLink } from 'react-router-dom'
import NavIcon from '../assets/icons/icon-bullet-point.svg'

export const Sidebar = ({ t }) => (
  <aside className='o-sidebar'>
    <nav>
      <ul className='c-nav'>
        <li className='c-nav-item'>
          <NavLink
            to='/index'
            className='c-nav-link'
            activeClassName='is-active'
          >
            <Icon className='c-nav-icon' icon={NavIcon} />
            {t('Nav.index_nav')}
          </NavLink>
        </li>
      </ul>
    </nav>
  </aside>
)

export default translate()(Sidebar)
