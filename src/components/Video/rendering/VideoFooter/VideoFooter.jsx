import React from "react";

interface VideoFooterProps {
  title: string;
  description: string;
}

function VideoFooter({
  title,
  description,
  handleShowResults, 
} : VideoFooterProps) {


  return (<>

    <div className="absolute bottom-0 w-full px-2 pb-5 bg-gradient-to-t from-black to-transparent z-5">
      <div className="relative mt-4 text-white md:mt-2 md:ml-2 md:mr-2 ">
        {/* Title Section */}
        <div className="flex items-center mb-3">
          <img alt="pic of course" src="https://www.atletiek.nu/img/basicDesign/athletics.app%20logo_white.png" className="object-cover w-8 h-8 rounded-full"/>
          <span className="ml-3 text-lg font-bold">{title}</span>
        </div>
        {/* Description Section */}
        <div className="mb-3 text-base font-medium transition-all">
          <p className={"leading-tight max-h-16 overflow-hidden"}
            style={{ display: "-webkit-box", WebkitLineClamp:  "3", WebkitBoxOrient: "vertical", overflow:  "hidden", textOverflow: "ellipsis"}}>
            {description}
          </p>
        </div>
        {/* Toggle Button */}
        <div className="inline-block font-semibold cursor-pointer" onClick={handleShowResults}>
          <strong>Show results</strong>
        </div>
      </div>
    </div>
    </>
  );
}

export default VideoFooter;
