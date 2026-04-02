import { useState } from "react";
import { useLocation } from "wouter";
import { MapPin } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const parishes = [
  {
    id: "mildenhall-high-town",
    name: "Mildenhall High Town",
    href: "/parishes/mildenhall-high-town",
    color: "#1e3a8a",
    hoverColor: "#2563eb",
    // Polygon points in viewBox="0 0 100 56" percentage coordinates
    points: "18,7 23,5 33,4 44,4 53,6 60,11 62,18 61,30 57,42 50,51 40,54 29,54 21,50 15,44 11,37 10,28 11,19 14,12",
    labelX: 36,
    labelY: 30,
  },
  {
    id: "barton-mills",
    name: "Barton Mills",
    href: "/parishes/barton-mills",
    color: "#166534",
    hoverColor: "#16a34a",
    points: "60,24 67,20 75,19 83,22 90,29 92,39 90,50 84,56 74,59 63,56 59,47 57,36 58,29",
    labelX: 76,
    labelY: 40,
  },
  {
    id: "worlington",
    name: "Worlington",
    href: "/parishes/worlington",
    color: "#92400e",
    hoverColor: "#d97706",
    points: "35,54 44,50 54,50 63,53 68,61 68,71 62,78 51,81 41,80 35,74 32,65",
    labelX: 51,
    labelY: 66,
  },
  {
    id: "freckenham",
    name: "Freckenham",
    href: "/parishes/freckenham",
    color: "#7f1d1d",
    hoverColor: "#dc2626",
    points: "4,58 13,54 21,52 29,55 33,63 32,73 27,81 17,83 7,81 3,73 2,64",
    labelX: 18,
    labelY: 68,
  },
];

export function InteractiveElectoralMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [, navigate] = useLocation();

  const hoveredParish = parishes.find((p) => p.id === hovered);

  return (
    <div className="w-full space-y-3">
      {/* Map container — preserves image aspect ratio */}
      <div
        className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20 cursor-crosshair"
        style={{ aspectRatio: "1024 / 564" }}
        role="navigation"
        aria-label="Interactive map of the Mildenhall Division parishes"
      >
        {/* Base image */}
        <img
          src={`${BASE}images/mildenhall-division-map.jpg`}
          alt="Electoral map of the Mildenhall Division — Mildenhall High Town, Barton Mills, Worlington, and Freckenham"
          className="absolute inset-0 w-full h-full object-fill"
          draggable={false}
        />

        {/* SVG clickable overlay */}
        <svg
          viewBox="0 0 100 56"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          {parishes.map((parish) => {
            const isHovered = hovered === parish.id;
            return (
              <g key={parish.id}>
                <polygon
                  points={parish.points}
                  fill={isHovered ? parish.hoverColor : parish.color}
                  fillOpacity={isHovered ? 0.35 : 0.05}
                  stroke={parish.color}
                  strokeWidth={isHovered ? 0.5 : 0.25}
                  strokeOpacity={isHovered ? 1 : 0.6}
                  className="transition-all duration-200"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHovered(parish.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => navigate(parish.href)}
                  role="link"
                  aria-label={`Go to ${parish.name} page`}
                />

                {/* Label visible on hover */}
                {isHovered && (
                  <text
                    x={parish.labelX}
                    y={parish.labelY - 1}
                    textAnchor="middle"
                    fill="white"
                    fontSize="2.8"
                    fontWeight="bold"
                    paintOrder="stroke"
                    stroke={parish.color}
                    strokeWidth="0.8"
                    className="pointer-events-none select-none"
                    style={{ fontFamily: "serif" }}
                  >
                    {parish.name}
                  </text>
                )}
                {isHovered && (
                  <text
                    x={parish.labelX}
                    y={parish.labelY + 2}
                    textAnchor="middle"
                    fill="white"
                    fontSize="1.8"
                    paintOrder="stroke"
                    stroke={parish.color}
                    strokeWidth="0.6"
                    className="pointer-events-none select-none"
                  >
                    Click to explore →
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Hover tooltip banner at bottom of map */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-200 ${
            hoveredParish ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-primary/90 backdrop-blur-sm text-white text-center py-2.5 px-4">
            <span className="font-serif font-bold text-base">{hoveredParish?.name}</span>
            <span className="text-white/70 text-sm ml-2">— Click to learn more</span>
          </div>
        </div>
      </div>

      {/* Instruction text */}
      <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
        <MapPin className="w-4 h-4 text-primary shrink-0" />
        <span>Hover over any parish area and click to explore that community</span>
      </div>
    </div>
  );
}
