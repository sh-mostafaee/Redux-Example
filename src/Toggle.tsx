import React, { useState } from "react";

export function Toggle() {
  const [isHello, setIsHello] = useState(false);

  const handleClick = () => setIsHello(!isHello);

  return <div onClick={handleClick}>{isHello ? "hello" : "bye"} toggle</div>;
}
