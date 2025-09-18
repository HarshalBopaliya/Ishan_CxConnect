import React from "react";
// import { ErrorBoundary } from "../../shared/components/ErrorBoundary";
// import ErrorFallback from "./ErrorFallback";
// import Skeleton from "./skeleton";
import DialerConfig from "./components/DialerConfig";

// const Loading = () => {
//   return <h1>Loading Content ...</h1>;
// };

// const Dialer: React.FC = () => {
//   return (
//     <>
//       {/* <ErrorBoundary fallback={<ErrorFallback />}>
//         <Suspense fallback={<Skeleton />}> */}
//       <DialerConfig />
//       {/* </Suspense>
//       </ErrorBoundary> */}
//     </>
//   );
// };

const Dialer: React.FC = () => {
  return <DialerConfig />;
};

export default Dialer;
