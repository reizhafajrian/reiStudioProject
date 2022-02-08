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
import { useRouter } from "next/router";

const AppHeaderDropdown = () => {
  const router = useRouter();
  const logout = () => {
    const cookies = new Cookies();
    cookies.remove("user-mekanik", { path: "/" });
    cookies.remove("token-mekanik", { path: "/" });

    router.push("/mekanik/login");
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
