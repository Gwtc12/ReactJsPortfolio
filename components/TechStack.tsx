"use client";

import React from "react";
import { companies } from "@/data";

interface Company {
  id: number;
  name: string;
  img?: string;
  nameImg?: string;
}

interface TechStackProps {
  className?: string;
}

const TechStack: React.FC<TechStackProps> = ({ 
  className = "" 
}) => {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 ${className}`}>
      {companies.map((company) => (
        <React.Fragment key={company.id}>
          <div className="flex md:max-w-60 max-w-32 gap-2">
            <img
              src={company.img}
              alt={company.name}
              className="md:w-10 w-5"
            />
            <img
              src={company.nameImg}
              alt={company.name}
              width={company.id === 4 || company.id === 5 ? 100 : 150}
              className="md:w-24 w-20"
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TechStack;