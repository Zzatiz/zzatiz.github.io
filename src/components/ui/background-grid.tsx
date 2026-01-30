"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";

interface Cell {
  row: number;
  col: number;
}

export const BackgroundRippleEffect = ({
  className,
  cellSize = 60,
  rippleColor = "rgba(139, 0, 0, 0.1)",
  borderColor = "#1a1a1a",
}: {
  className?: string;
  cellSize?: number;
  rippleColor?: string;
  borderColor?: string;
}) => {
  const [activeCells, setActiveCells] = useState<Cell[]>([]);
  const [dimensions, setDimensions] = useState({ rows: 0, cols: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const rows = Math.ceil(window.innerHeight / cellSize) + 1;
      const cols = Math.ceil(window.innerWidth / cellSize) + 1;
      setDimensions({ rows, cols });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [cellSize]);

  const handleClick = useCallback(
    (row: number, col: number) => {
      const newCells: Cell[] = [];
      const maxDistance = 4;

      for (let dr = -maxDistance; dr <= maxDistance; dr++) {
        for (let dc = -maxDistance; dc <= maxDistance; dc++) {
          const distance = Math.abs(dr) + Math.abs(dc);
          if (distance <= maxDistance) {
            const newRow = row + dr;
            const newCol = col + dc;
            if (
              newRow >= 0 &&
              newRow < dimensions.rows &&
              newCol >= 0 &&
              newCol < dimensions.cols
            ) {
              setTimeout(() => {
                setActiveCells((prev) => [...prev, { row: newRow, col: newCol }]);
                setTimeout(() => {
                  setActiveCells((prev) =>
                    prev.filter((c) => !(c.row === newRow && c.col === newCol))
                  );
                }, 300);
              }, distance * 50);
            }
          }
        }
      }
    },
    [dimensions]
  );

  return (
    <div
      className={cn(
        "fixed inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      <div
        className="pointer-events-auto"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${dimensions.cols}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${dimensions.rows}, ${cellSize}px)`,
        }}
      >
        {Array.from({ length: dimensions.rows * dimensions.cols }).map(
          (_, index) => {
            const row = Math.floor(index / dimensions.cols);
            const col = index % dimensions.cols;
            const isActive = activeCells.some(
              (c) => c.row === row && c.col === col
            );

            return (
              <div
                key={index}
                onClick={() => handleClick(row, col)}
                className="relative cursor-pointer transition-colors duration-150"
                style={{
                  width: cellSize,
                  height: cellSize,
                  borderRight: `1px solid ${borderColor}`,
                  borderBottom: `1px solid ${borderColor}`,
                  backgroundColor: isActive ? rippleColor : "transparent",
                }}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export const GridBackground = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 pointer-events-none grid-pattern opacity-100",
        className
      )}
    />
  );
};
