import { Link } from "wouter";
import { useGetImageMaps } from "@workspace/api-client-react";
import { Map, Loader2, ArrowRight } from "lucide-react";
import { format } from "date-fns";

export default function ImageMaps() {
  const { data: maps, isLoading, isError } = useGetImageMaps();

  return (
    <div className="w-full bg-background min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Campaign Maps</h1>
          <p className="text-lg text-muted-foreground">
            Explore interactive maps of our planned infrastructure, housing projects, and environmental protections across the nation.
          </p>
        </div>

        {isLoading ? (
          <div className="flex h-[40vh] items-center justify-center">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
          </div>
        ) : isError ? (
          <div className="text-center text-destructive py-20 font-bold">Failed to load maps.</div>
        ) : maps?.length === 0 ? (
          <div className="text-center py-20 bg-muted rounded-xl border border-border border-dashed">
            <Map className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-2">No Maps Available</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maps?.map((map) => (
              <Link 
                key={map.id} 
                href={`/gallery/${map.id}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                <div className="h-64 relative overflow-hidden bg-gray-100">
                  <img 
                    src={map.imageUrl} 
                    alt={map.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                    {map.hotspots.length} Locations
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{map.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">Added {format(new Date(map.createdAt), "MMM d, yyyy")}</p>
                  <div className="mt-auto inline-flex items-center font-bold text-destructive group-hover:text-primary transition-colors">
                    Explore Map <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
