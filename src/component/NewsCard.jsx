import React, { useState } from "react";
import Chevron from "./Chevron";

export default function NewsCard({ news, tag }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const showNext = () => {
    if (currentIndex + itemsPerPage < news.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const showPrevious = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <>
      <div className="md:flex-row flex flex-col gap-10">
        {news.slice(currentIndex, currentIndex + itemsPerPage).map((item) => (
          <div className="flex flex-col gap-2 hover:text-blue" key={item.id}>
            <div className="relative cursor-pointer">
              <img
                className="object-cover md:max-h-48 md:min-h-48 rounded-md"
                src={item.img}
                alt=""
              />
              <div className="absolute bottom-3 left-3 text-xs text-white bg-tag rounded px-1 py-0.5">
                {tag}
              </div>
            </div>
            <p className="text-md font-bold cursor-pointer md:max-w-80 line-clamp-2">{item.title}</p>
            <p className="text-xs text-black opacity-75">{item.date}</p>
          </div>
        ))}
      </div>
      <Chevron onNext={showNext} onPrevious={showPrevious} />
    </>
  );
}
