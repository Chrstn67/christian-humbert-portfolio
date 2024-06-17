import { useState, useEffect } from "react";
import "./ScrollToTopButton.scss";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const rgbaToHex = (rgba) => {
    const sep = rgba.indexOf(",") > -1 ? "," : " ";
    rgba = rgba.substr(5).split(")")[0].split(sep);

    if (rgba.length === 4) {
      const r = (+rgba[0]).toString(16),
        g = (+rgba[1]).toString(16),
        b = (+rgba[2]).toString(16),
        a = Math.round(+rgba[3] * 255).toString(16);

      return (
        "#" +
        (r.length === 1 ? "0" + r : r) +
        (g.length === 1 ? "0" + g : g) +
        (b.length === 1 ? "0" + b : b) +
        (a.length === 1 ? "0" + a : a)
      );
    }

    return "#000000";
  };

  useEffect(() => {
    const updateBackgroundColor = () => {
      const color = window.getComputedStyle(document.body).backgroundColor;
      setBackgroundColor(rgbaToHex(color).slice(0, 7)); // Remove the alpha channel
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateBackgroundColor);
    updateBackgroundColor();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateBackgroundColor);
    };
  }, []);

  return (
    <div className={`scroll-to-top-button ${isVisible ? "show" : "hide"}`}>
      <button
        onClick={scrollToTop}
        type="button"
        style={{
          backgroundColor:
            backgroundColor === "#ffa500" ? "#292829" : "#ffa500cc",
        }}
      >
        ⇧
      </button>
    </div>
  );
};

export default ScrollToTopButton;
