import React, { Suspense } from "react";
import { CContainer, CSpinner } from "@coreui/react";
import routes from "../routes";
import { useDispatch } from "react-redux";

import { useRouter } from "next/router";

const AppContent = ({ dataarticle }) => {
  const [isFront, setIsFront] = React.useState(false);
  const data = useRouter();
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log(data.asPath,routes);
    process.nextTick(() => {
      if (globalThis.window ?? false) {
        setIsFront(true);
      }
    });
  }, []);

  if (!isFront) return null;

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
