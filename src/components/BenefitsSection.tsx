import { ShieldCheck, Zap, HeartHandshake, Sprout } from "lucide-react";

export const BenefitsSection = () => {
    return (
        <section id="benefits" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
                        Vantagens
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary leading-tight">
                        Por que escolher a Ribeiro?
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: ShieldCheck, title: "Durabilidade Extrema", desc: "Equipamentos feitos para durar gerações com manutenção mínima." },
                        { icon: Zap, title: "Alta Tecnologia", desc: "Sistemas de secagem inteligentes que economizam energia." },
                        { icon: HeartHandshake, title: "Suporte Completo", desc: "Assistência técnica especializada em todo o território nacional." },
                        { icon: Sprout, title: "Cuidado com o Grão", desc: "Preservação total da qualidade e sabor do seu café." },
                    ].map((benefit, index) => (
                        <div key={index} className="bg-primary p-8 rounded-2xl hover:bg-primary/95 transition-colors group text-center hover:-translate-y-1 duration-300 animate-fade-in-up shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="w-16 h-16 bg-white/10 rounded-full mx-auto flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform mb-6">
                                <benefit.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-xl text-white mb-3">{benefit.title}</h3>
                            <p className="text-white/80 leading-relaxed text-sm">
                                {benefit.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
