"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye, Shield } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/constants";

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const categories = ["All", "Valet Services", "Management", "Healthcare", "Corporate", "Hospitality", "Events", "Facilities"];

  const filteredItems = filterCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filterCategory);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedItem]);

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex === null) return;
    const nextIdx = (selectedIndex + 1) % filteredItems.length;
    setSelectedIndex(nextIdx);
    setSelectedItem(filteredItems[nextIdx]);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    const prevIdx = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedIndex(prevIdx);
    setSelectedItem(filteredItems[prevIdx]);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F5F7FA] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A84F]/15 border border-[#D4A84F]/40 text-[#966F23] text-xs font-semibold uppercase tracking-wider mb-3">
            On-Site Operations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17202A] tracking-tight mb-4">
            Our Operations Gallery
          </h2>
          <p className="text-base sm:text-lg text-[#5B6573] leading-relaxed">
            A visual overview of our professional vehicle reception, marshaling standards, uniformed staff, and facility management in action.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filterCategory === cat
                  ? "bg-[#0B1F33] text-[#D4A84F] shadow-sm"
                  : "bg-white text-[#5B6573] hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item, index)}
              className="group relative rounded-2xl overflow-hidden bg-[#071521] aspect-[4/3] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/90 via-[#071521]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Overlay Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-[#D4A84F] text-[#071521] flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              {/* Text Info */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#D4A84F] mb-0.5">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white tracking-tight line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#071521]/95 backdrop-blur-xl p-4 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full bg-[#0B1F33] rounded-2xl overflow-hidden border border-[#D4A84F]/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#071521]">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#D4A84F]" />
                <span className="text-xs uppercase tracking-wider text-gray-300 font-medium">
                  {selectedItem.category} • Operations Overview
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image Stage */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#071521]/80 hover:bg-[#D4A84F] text-white hover:text-[#071521] border border-white/20 flex items-center justify-center transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#071521]/80 hover:bg-[#D4A84F] text-white hover:text-[#071521] border border-white/20 flex items-center justify-center transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="p-6 bg-[#0B1F33] text-white">
              <h3 className="text-xl font-bold text-[#D4A84F] mb-1">
                {selectedItem.title}
              </h3>
              <p className="text-sm text-gray-300">
                {selectedItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
