import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`relative glass rounded-2xl p-6 ${
        hover ? "hover:scale-105 transition-transform cursor-pointer" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
