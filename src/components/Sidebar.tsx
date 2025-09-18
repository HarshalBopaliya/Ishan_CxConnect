import React, { useState, useEffect } from "react";
import { SideBarItems } from "../utils";
import { NavLink } from "react-router-dom";
import { ChevronUp, ChevronDown, Dot } from "lucide-react";
import { useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    SideBarItems.forEach((item) => {
      if (item.children) {
        const match = item.children.some(
          (child) => child.path === location.pathname
        );
        if (match) {
          setOpenAccordion(item.id);
        }
      }
    });
  }, [location.pathname]);

  const handleAccordion = (id: string) => {
    setOpenAccordion((prevId) => (prevId === id ? null : id));
  };

  return (
    <aside className="w-56 h-screen bg-blue-950 flex flex-col">
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        {SideBarItems.map((item) => (
          <div key={item.id} className="w-full mb-1">
            {item.children ? (
              <>
                {/* Label - Parent */}
                <div
                  onClick={() => handleAccordion(item.id)}
                  className={
                    "flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors select-none hover:bg-blue-900"
                  }
                >
                  <item.icon className="text-white w-5 h-5" />
                  <span className="ml-2 text-white font-medium">
                    {item.label}
                  </span>
                  <span className="ml-auto">
                    {openAccordion === item.id ? (
                      <ChevronUp size={18} className="text-white" />
                    ) : (
                      <ChevronDown size={18} className="text-white" />
                    )}
                  </span>
                </div>

                {/* Child of Parent */}

                {openAccordion === item.id && (
                  <div className="ml-7 flex flex-col gap-1 mt-1">
                    {item.children.map((child) => {
                      // console.log("child", child);
                      return (
                        <NavLink
                          key={child.id}
                          to={child.path}
                          className={
                            "flex items-center gap-2 px-2 py-1 text-sm rounded-md transition-colors text-white hover:bg-blue-900"
                          }
                        >
                          {({ isActive }) => (
                            <>
                              {isActive && (
                                <Dot className="text-orange-500 w-5 h-5" />
                              )}
                              <span className="font-medium">{child.label}</span>
                            </>
                          )}
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </>
            ) : (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors font-medium text-white hover:bg-blue-900  ${
                    isActive ? "bg-blue-900" : ""
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="ml-2">{item.label}</span>
              </NavLink>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
