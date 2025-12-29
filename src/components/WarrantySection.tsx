import { ShieldCheck, BookOpen, Headset, Wrench } from "lucide-react";

export const WarrantySection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="w-full lg:w-1/2 animate-fade-in-up">
                        <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
                            Pós-venda
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary leading-tight mb-6">
                            Compromisso com sua satisfação
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Nosso relacionamento não termina na venda. Oferecemos suporte completo para garantir o melhor desempenho do seu secador durante toda sua vida útil.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { icon: ShieldCheck, title: "Garantia de Fábrica", desc: "Equipamentos com garantia total direto do fabricante." },
                                { icon: BookOpen, title: "Manuais Técnicos", desc: "Documentação completa para instalação e operação." },
                                { icon: Headset, title: "Suporte Técnico", desc: "Contato direto com nossa equipe especializada." },
                                { icon: Wrench, title: "Peças de Reposição", desc: "Estoque permanente e envio rápido garantido." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="bg-primary/5 p-3 rounded-lg h-fit text-primary">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                        <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3" />
                        <img
                            src="/images/pos-venda.jpg"
                            alt="Equipe técnica Ribeiro"
                            className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};
