import React from "react";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";

// import CIcon from '@coreui/icons-react'

import avatar8 from "./../../assets/images/avatars/8.jpg";
import Cookies from "universal-cookie";

const AppHeaderDropdown = () => {
  const logout = () => {
    const cookies = new Cookies();
    cookies.remove("user-admin");
    cookies.remove("token-admin");
    // console.log(cookies.get("user-admin"));
    window.location.href = "/admin/login";
  };
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Account
        </CDropdownHeader>
        <CDropdownItem onClick={logout}>
          {/* <CIcon icon={cilLockLocked} className="me-2" /> */}
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
