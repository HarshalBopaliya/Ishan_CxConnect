import React, { Suspense } from "react";
import { ErrorBoundary } from "../../shared/components/ErrorBoundary";
import ErrorFallback from "./ErrorFallback";
import Skeleton from "./Skeleton";
import DialerConfig from "./components/DialerConfig";

const Dialer: React.FC = () => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Suspense fallback={<Skeleton />}>
        <DialerConfig />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Dialer;
