import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function GallerySection() {
  const [photos, setPhotos] = useState(null);
  useEffect(() => {
    base44.entities.Photo.list("-created_date", 40).then(setPhotos);
  }, []);

  if (photos && photos.length === 0) return null;

  return (
    <section id="gallery" className="scroll-mt-24 py-20 sm:py-28 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="uppercase tracking-[0.25em] text-xs font-semibold text-accent mb-4">Gallery</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold mb-10">Moments from our community</h2>
        {photos === null ? (
          <div className="h-72 rounded-2xl bg-card animate-pulse" />
        ) : (
          <Carousel opts={{ loop: true, align: "start" }} className="relative">
            <CarouselContent>
              {photos.map((p) => (
                <CarouselItem key={p.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <figure className="rounded-2xl overflow-hidden bg-card border border-border">
                    <img src={p.image_url} alt={p.title} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                    <figcaption className="px-4 py-3 text-sm font-medium truncate">{p.title}</figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-[42%]" />
            <CarouselNext className="right-2 top-[42%]" />
          </Carousel>
        )}
      </div>
    </section>
  );
}