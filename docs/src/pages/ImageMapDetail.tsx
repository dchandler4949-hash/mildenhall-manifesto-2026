import { useParams, Link } from "wouter";
import { useGetImageMap } from "@workspace/api-client-react";
import { Loader2, ArrowLeft, MousePointerClick } from "lucide-react";

export default function ImageMapDetail() {
  const { id } = useParams();
  const { data: map, isLoading, isError } = useGetImageMap(Number(id));

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center"><Loader2 className="w-12 h-12 animate-spin text-primary" /></div>;
  }

  if (isError || !map) {
    return <div className="text-center py-20 text-destructive font-bold">Failed to load interactive map.</div>;
  }

  return (
    <div className="w-full bg-background min-h-screen py-10">
      <div className="max-w-[1400px] mx-auto px-4">
        <Link href="/gallery" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all maps
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary">{map.title}</h1>
            <p className="text-muted-foreground mt-2 flex items-center gap-2">
              <MousePointerClick className="w-4 h-4" />
              Hover over points to see location names, click to learn more.
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-2xl border border-border">
          <div className="relative inline-block w-full overflow-hidden rounded-xl bg-gray-50 border border-gray-200">
            <img 
              src={map.imageUrl} 
              alt={map.title} 
              className="w-full h-auto block"
            />
            
            {/* Render Hotspots */}
            {map.hotspots.map((spot) => (
              <a 
                key={spot.id}
                href={spot.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute group z-10 block"
                style={{ left: `${spot.x}%`, top: `${spot.y}%`, transform: 'translate(-50%, -50%)' }}
              >
                {/* The Pin */}
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-destructive rounded-full border-2 border-white shadow-lg animate-pulse hover:animate-none hover:scale-125 transition-transform flex items-center justify-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-primary text-white px-4 py-2 rounded shadow-2xl text-sm md:text-base font-bold whitespace-nowrap pointer-events-none translate-y-2 group-hover:translate-y-0 before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-primary">
                  {spot.label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
