import { CaretUp } from "phosphor-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  const checkScrollTop = () => {
    if (window.pageYOffset > 400) {
      setShowButton(true);
    } else if (window.pageYOffset <= 400) {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  return (
    <>
      {showButton && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className={`bg-blue-900 hover:bg-blue-950 duration-100
                text-white p-2 rounded-md  animate-fadeIn`}
          >
            <CaretUp size={24} />
          </button>
        </div>
      )}
    </>
  );
}
