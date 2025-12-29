import { Instagram } from "lucide-react";

export const DeliveryVideosSection = () => {
    const deliveries = [
        { city: "Carangola", uf: "MG", url: "https://www.instagram.com/reel/DCT-qV5u6Be/embed" },
        { city: "Espera Feliz", uf: "MG", url: "https://www.instagram.com/reel/DC3vazQRUrJ/embed" },
        { city: "Alto Jequitibá", uf: "MG", url: "https://www.instagram.com/reel/DDP8id-yp0l/embed" },
        { city: "Luisburgo", uf: "MG", url: "https://www.instagram.com/reel/DRdV-RYkQUk/embed" },
    ];

    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pattern-dotsPattern pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
                    <div className="max-w-2xl animate-fade-in-up">
                        <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
                            Entregas Realizadas
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading leading-tight">
                            Veja nossas entregas em todo o Brasil
                        </h2>
                    </div>
                    <div className="max-w-md text-white/80 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                        <p className="text-lg">
                            Acompanhe as montagens e entregas dos nossos secadores em diversas regiões.
                            Qualidade comprovada na prática!
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {deliveries.map((location, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up hover:scale-[1.02] transition-transform duration-300"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Header do Card */}
                            <div className="bg-[#1F2937] p-3 flex items-center justify-between border-b border-gray-700">
                                <div className="flex items-center gap-2">
                                    <div className="p-1 bg-white/10 rounded-full">
                                        <Instagram size={14} className="text-white" />
                                    </div>
                                    <span className="text-sm font-medium text-white">{location.city}/{location.uf}</span>
                                </div>
                            </div>

                            {/* Instagram Embed */}
                            <div className="relative aspect-[9/16] w-full bg-black">
                                <iframe
                                    src={location.url}
                                    className="absolute inset-0 w-full h-full border-0"
                                    allowFullScreen
                                    scrolling="no"
                                    title={`Entrega em ${location.city}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://www.instagram.com/ribeirosecadoresdecafe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-0.5"
                    >
                        Ver mais no nosso Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};
