import { useState, useEffect } from "react";
import { Nav as PresentationalNav } from "../presentation/Nav";

export function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleShow);

    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return <PresentationalNav show={show} />;
}
