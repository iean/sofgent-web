"use client";
import React, { useEffect, useRef, useState } from "react";

const WinGrid = () => {
  const gridRef = useRef(null);
  const [nearBy, setNearBy] = useState([]);

  useEffect(() => {
    const grid = gridRef.current;
    if (grid) {
      for (let i = 0; i < 1000; i++) {
        const newElement = document.createElement("div");
        newElement.classList.add("win-btn");
        newElement.id = i;
        grid.appendChild(newElement);
      }

      const offset = 49;
      const angles = []; // in deg
      for (let i = 0; i <= 360; i += 45) {
        angles.push((i * Math.PI) / 180);
      }

      const clearNearBy = () => {
        nearBy
          .splice(0, nearBy.length)
          .forEach((e) => (e.style.borderImage = null));
      };

      document.querySelectorAll(".win-btn").forEach((b) => {
        b.onmouseleave = (e) => {
          e.target.style.borderImage = null;
          e.target.style.border = "1px solid transparent";
        };

        b.onmouseenter = () => {
          clearNearBy();
        };

        b.addEventListener("mousemove", (e) => {
          const rect = e.target.getBoundingClientRect();
          const x = e.clientX - rect.left; // x position within the element.
          const y = e.clientY - rect.top; // y position within the element.
          e.target.style.borderImage = `radial-gradient(20% 65% at ${x}px ${y}px ,rgba(121, 74, 255,0.7),rgba(121, 74, 255,0.4),rgba(121, 74, 255,0),#eaebf0,transparent ) 9 / 2px / 0px stretch `;
        });
      });

      const handleMouseMove = (e) => {
        const x = e.clientX; // x position within the element.
        const y = e.clientY; // y position within the element.

        clearNearBy();
        const newNearBy = angles.reduce((acc, rad) => {
          const cx = Math.floor(x + Math.cos(rad) * offset);
          const cy = Math.floor(y + Math.sin(rad) * offset);
          const element = document.elementFromPoint(cx, cy);

          if (element !== null) {
            if (
              element.className === "win-btn" &&
              acc.findIndex((ae) => ae.id === element.id) < 0
            ) {
              const brect = element.getBoundingClientRect();
              const bx = x - brect.left; // x position within the element.
              const by = y - brect.top; // y position within the element.
              if (!element.style.borderImage)
                element.style.borderImage = `radial-gradient(${offset * 2}px ${
                  offset * 2
                }px at ${bx}px ${by}px ,rgba(121, 74, 255,0.7),rgba(121, 74, 255,0.1),transparent ) 9 / 1px / 0px stretch `;
              return [...acc, element];
            }
          }
          return acc;
        }, []);
        setNearBy(newNearBy);
      };

      const handleMouseLeave = () => {
        clearNearBy();
      };

      grid.addEventListener("mousemove", handleMouseMove);
      grid.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        grid.removeEventListener("mousemove", handleMouseMove);
        grid.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [nearBy]);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full win-grid"
      id="win-grid"
      ref={gridRef}
    ></div>
  );
};

export default WinGrid;
