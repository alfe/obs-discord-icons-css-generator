import React from 'react';

export const useReportOnceOnMount = (report: () => void) => {
  const reportOnce = React.useRef(report);
  React.useEffect(() => {
    reportOnce.current();
  }, []);
};
