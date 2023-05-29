import { useState, useEffect, useCallback, useMemo } from "react";

function useWindowInnerWidth() {
  const [width, setWidth] = useState(0);

  const handleWindowSizeChange = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => setWidth(window.innerWidth), []);
  
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [handleWindowSizeChange]);

  const isMobile = useMemo(() => width <= 768, [width]);

  return { isMobile };
}

export default useWindowInnerWidth;
