import React from "react";

export default function Highlight({headNews}) {
  return (
    <div class="grid grid-cols-4 grid-rows-4 md:pt-5">
      <div class="group md:row-span-4 row-span-3 md:col-span-2 col-span-4 relative md:mr-1 overflow-hidden">
        <img
        className="object-cover w-full h-full brightness-75 group-hover:scale-105 group-hover:brightness-50 transition duration-300 ease-in-out"
          src={headNews[0].img}
          alt=""
        />
        <div className="absolute bottom-3 left-3 right-3 max-w-md">
            <h1 className="text-xl font-semibold text-white line-clamp-3">{headNews[0].title}</h1>
            <p className="text-sm text-white">{headNews[0].date}</p>
        </div>
      </div>
      <div class="group row-span-2 col-span-2 relative md:mb-1 overflow-hidden">
        <img
        className="object-contain w-full h-full brightness-75 group-hover:scale-105 group-hover:brightness-50 transition duration-300 ease-in-out"
          src={headNews[1].img}
          alt=""
        />
        <div className="absolute bottom-3 left-3 right-3 max-w-md line-clamp-2 md:line-clamp-3">
            <h1 className="text-xl font-semibold text-white">{headNews[1].title}</h1>
        </div>
      </div>
      <div class="group row-span-2 col-span-1 relative md:mr-1 overflow-hidden">
        <img
        className="object-cover w-full h-full brightness-75 group-hover:scale-105 group-hover:brightness-50 transition duration-300 ease-in-out"
          src={headNews[2].img}
          alt=""
        />
        <div className="absolute bottom-3 left-3 right-3 max-w-md">
            <h1 className="text-md text-white font-semibold md:line-clamp-3 line-clamp-2">{headNews[2].title}</h1>
        </div>
      </div>
      <div class="group row-span-2 col-span-1 relative overflow-hidden">
        <img
        className="object-cover w-full h-full brightness-75 group-hover:scale-105 group-hover:brightness-50 transition duration-300 ease-in-out"
          src={headNews[3].img}
          alt=""
        />
        <div className="absolute bottom-3 left-3 right-3 max-w-md">
            <h1 className="text-md text-white font-semibold md:line-clamp-3 line-clamp-2">{headNews[3].title}</h1>
        </div>
      </div>
    </div>
  );
}
