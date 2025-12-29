import { Flame, Timer, Coffee, TrendingDown, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const LaunchSection = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

    const images = [
        "/images/gas/secadro-de-cafe-gas-1.png",
        "/images/gas/secadro-de-cafe-gas-2.png",
        "/images/gas/secadro-de-cafe-gas-3.png",
        "/images/gas/secadro-de-cafe-gas-4.png",
        "/images/gas/secadro-de-cafe-gas-5.png",
    ];

    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pattern-dotsPattern" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 text-white space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 bg-accent text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            Lançamento Exclusivo
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold font-heading leading-tight">
                            Secador de Café <br />
                            <span className="text-accent">a Gás</span>
                        </h2>

                        <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                            Conheça a mais nova inovação da Ribeiro: o secador de café a gás.
                            Desenvolvido para produtores que buscam máxima eficiência, economia e qualidade na secagem do café.
                        </p>

                        <div className="space-y-4">
                            {[
                                { icon: Flame, title: "Controle térmico preciso", desc: "Temperatura uniforme durante todo o processo." },
                                { icon: Timer, title: "Secagem mais rápida", desc: "Reduza significativamente o tempo de processamento." },
                                { icon: Coffee, title: "Ideal para cafés especiais", desc: "Preserva as características sensoriais do grão." },
                                { icon: TrendingDown, title: "Menos perdas", desc: "Secagem uniforme sem desperdício de produto." },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="p-2 rounded-lg bg-accent text-white shrink-0">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                        <p className="text-white/70 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://wa.me/5532998119181?text=Ol%C3%A1%2C%20queria%20saber%20mais%20sobre%20o%20secador%20a%20g%C3%A1s"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2 mt-4 w-fit"
                        >
                            Quero conhecer o Secador a Gás
                            <ArrowRight size={20} />
                        </a>
                    </div>

                    {/* Image Side - Now with Slider */}
                    <div className="w-full lg:w-1/2 relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                        {/* Glowing Effect Behind */}
                        <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />

                        <div className="relative z-10 bg-gradient-to-br from-white/10 to-transparent border border-white/20 p-2 rounded-3xl backdrop-blur-sm overflow-hidden">

                            {/* Embla Carousel */}
                            <div className="overflow-hidden rounded-2xl aspect-[4/5]" ref={emblaRef}>
                                <div className="flex touch-pan-y">
                                    {images.map((src, index) => (
                                        <div className="flex-[0_0_100%] min-w-0 relative" key={index}>
                                            <img
                                                src={src}
                                                alt={`Secador de Café a Gás - Foto ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Feature Float Card */}
                            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur text-primary p-4 rounded-xl shadow-lg animate-pulse hidden sm:block pointer-events-none">
                                <p className="font-bold text-lg">Alta Tecnologia</p>
                                <p className="text-xs text-secondary-foreground">Padrão Exportação</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
