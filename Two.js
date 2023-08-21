import React, { useEffect } from "react";

const Two = () => {
  const [count, setCount] = React.useState(0);
  const [width, setWidth] = React.useState(window.innerWidth);

  const handleCount = () => {
    setCount((preVal) => preVal + 1);
  };

  const handleReload = () => {
    window.location.reload();
  };

  useEffect(() => {
    document.title = `(${count}) messages`;

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}>Click to count</button>
      <button onClick={handleReload}>Click to Reload</button>
      <p>The size of the screen is:</p>
      <h1>{width}</h1>
    </div>
  );
};

export default Two;
