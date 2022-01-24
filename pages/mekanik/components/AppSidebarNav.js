import React from "react";
// import { NavLink, useLocation } from 'react-router-dom'
// import Link from "next/link";
import PropTypes from "prop-types";

import { CBadge, CNavLink } from "@coreui/react";
import { NavLink } from "react-router-dom";

export const AppSidebarNav = ({ items }) => {
  // const location = useLocation()
  const navLink = (name, icon, badge) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    );
  };

  const navItem = (item, index) => {
    const { component, name, badge, icon, ...rest } = item;
    const Component = component;

    return (
      <Component
        {...(item.to &&
          !rest.items && {
            component: NavLink,
            activeClassName: "active",
          })}
        key={index}
        push={item.href}
        passHref={true}
        {...rest}
      >
        <CNavLink>{navLink(name, icon, badge)}</CNavLink>
      </Component>
    );
  };
  const navGroup = (item, index) => {
    const { component, name, icon, to, ...rest } = item;
    const Component = component;
    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon)}
        // visible={location.pathname.startsWith(to)}
        {...rest}
      >
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
      </Component>
    );
  };

  return (
    <React.Fragment>
      {items &&
        items.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
    </React.Fragment>
  );
};

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
