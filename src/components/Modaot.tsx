import { useEffect, useState } from "react";
import "../styles/modaot.css"

export default function Modaot() {
  const [currentIndex, setCurrentIndex] = useState(0);
const totalImages = 6;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="modaot">
      <img
        src={`/modaot/${currentIndex}.jpeg`}
        alt={`Slide ${currentIndex}`}

      />
    </section>
  );
}
