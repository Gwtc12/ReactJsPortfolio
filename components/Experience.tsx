import React from "react";
import { workExperience } from "@/data";
import { GlowingEffect } from "./ui/GlowingEffect"; 

const Experience = () => {
  return (
    <div className="py-20 w-full">
       <h1 className="heading text-xl md:text-2xl lg:text-3xl">
        My {" "}
        <span className="text-purple text-2xl md:text-3xl lg:text-4xl">
         Career Path </span>
      </h1>
      <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {workExperience.map((card) => (
          <ExperienceCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ card }: { card: any }) => {
  return (
    <div className="w-full">
      <div className="relative h-full min-h-[280px] lg:min-h-[320px] rounded-[1.75rem] border border-neutral-200 dark:border-slate-800 p-2">
        
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={60}
          glow={true}
          disabled={false}
          proximity={80}
          inactiveZone={0.3}
          movementDuration={1.5}
          variant="default"
        />
        
        {/* layout*/}
        <div 
          className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.75rem-8px)] p-6 lg:p-8"
          style={{
            background: "rgb(4,7,29)",
            backgroundImage:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-lg lg:text-xl xl:text-2xl font-bold text-white leading-tight">
                {card.title}
              </h1>
            </div>
          </div>
          
          {/* Description */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-white-100 text-sm lg:text-base font-medium leading-relaxed">
              {card.desc}
            </p>
          </div>
          
        
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="flex justify-between items-center text-xs lg:text-sm text-white/60">
              <span>{card.startDate} - {card.endDate}</span>
            
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;