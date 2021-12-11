import React, { Suspense } from "react";

import { Redirect, Route, Switch, Router } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";

// routes config
import routes from "../routes";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";
// import Link from "next/link";
import Dashboard from "../views/dashboard/Dashboard";
import Colors from "../Colors";

const DynamicLazyComponent = dynamic(() => import("./Loading.js"), {
  suspense: false,
  ssr: false,
});

const AppContent = () => {
  const [isFront, setIsFront] = React.useState(false);
  const data = useRouter();
  React.useEffect(() => {
    console.log(data.pathname, routes[1].component);
    process.nextTick(() => {
      if (globalThis.window ?? false) {
        setIsFront(true);
      }
    });
  }, []);

  if (!isFront) return null;
  console.log(routes[0]);

  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        {routes.map((route, idx) => {
          return (
            <>{data.asPath === route.path && <route.component key={idx} />}</>
          );
        })}
      </Suspense>
    </CContainer>
  );
};

export default React.memo(AppContent);
