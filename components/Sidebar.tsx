import React, { useState } from "react";
import { SideBarItems } from "../utils";
import { NavLink } from "react-router-dom";
import { ChevronUp, ChevronDown, Dot } from "lucide-react";

const Sidebar: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const handleAccordion = (id: string) => {
    setOpenAccordion((prevId) => (prevId === id ? null : id));
  };

  return (
    <aside className="w-56 h-screen bg-blue-950 flex flex-col">
      <nav className="flex-1 overflow-y-auto no-scrollbar">
        {SideBarItems.map((item) => (
          <div key={item.id} className="w-full">
            {/* If item has children → behave like accordion button */}
            {item.children ? (
              // <NavLink
              //   to={item.path}
              //   onClick={() => handleAccordion(item.id)}
              //   className="flex items-center justify-between w-full px-3 py-2 cursor-pointer"
              // >
              //   <div className="flex items-center gap-2">
              //     {item.icon && <item.icon className="w-4 h-4" />}
              //     <span className="text-white">{item.label}</span>
              //   </div>
              //   {openAccordion === item.id ? (
              //     <ChevronUp size={16} className="text-white" />
              //   ) : (
              //     <ChevronDown size={16} className="text-white" />
              //   )}
              // </NavLink>
              <button onClick={() => handleAccordion(item.id)}>
                {item.label}{" "}
                {openAccordion === item.id ? (
                  <ChevronUp size={16} className="text-white" />
                ) : (
                  <ChevronDown size={16} className="text-white" />
                )}
              </button>
            ) : (
              <NavLink
                to={item.path}
                className="flex items-center gap-2 px-3 py-2"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span className="text-white">{item.label}</span>
              </NavLink>
            )}

            {/* Render children only if open */}
            {item.children && openAccordion === item.id && (
              <div className="ml-7 flex flex-col gap-1">
                {item.children.map((child) => (
                  <NavLink
                    key={child.id}
                    to={child.path}
                    className="flex items-center gap-2 px-2 py-1 text-sm rounded-md"
                  >
                    {({ isActive }) => (
                      <div className="flex items-center gap-2">
                        {isActive && (
                          <Dot className="text-orange-500 w-6 h-6" />
                        )}
                        <span
                          className={`hover:text-white transition-all ${
                            isActive ? "text-white" : "text-blue-800"
                          }`}
                        >
                          {child.label}
                        </span>
                      </div>
                    )}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
