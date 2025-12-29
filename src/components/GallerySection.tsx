import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { X, ZoomIn } from "lucide-react";

export const GallerySection = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const [emblaRef] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
    }, [
        Autoplay({ delay: 3000, stopOnInteraction: false })
    ]);

    const images = [
        "/images/gallery/secador-1.jpg",
        "/images/gallery/secador-2.jpg",
        "/images/gallery/secador-3.jpg",
        "/images/gallery/secador-4.jpg",
        "/images/gallery/secador-5.jpg",
    ];

    const openLightbox = (src: string) => {
        setSelectedImage(src);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = "unset";
    };

    return (
        <section className="py-24 bg-white border-t border-gray-100" id="gallery">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
                        Galeria
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary leading-tight">
                        Nossos Equipamentos em Detalhes
                    </h2>
                </div>

                {/* Carousel */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-4">
                        {images.map((src, index) => (
                            <div key={index} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 pl-4">
                                <div
                                    className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
                                    onClick={() => openLightbox(src)}
                                >
                                    <img
                                        src={src}
                                        alt={`Secador Ribeiro ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <div className="bg-white/90 p-3 rounded-full text-primary shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                                            <ZoomIn size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox / Modal */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
                        onClick={closeLightbox}
                    >
                        <X size={32} />
                    </button>

                    <img
                        src={selectedImage}
                        alt="Zoom da galeria"
                        className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 select-none"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};
