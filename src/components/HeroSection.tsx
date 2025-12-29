import { ArrowRight, Check } from "lucide-react";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-44 md:pt-32 overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-black/80" />
                <img
                    src="https://chb.com.br/user-files/support/redactor-imgs/plantacao-de-cafe-5830.jpg"
                    alt="Fazenda de café"
                    className="w-full h-full object-cover animate-pulse-slow"
                />
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="max-w-3xl animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-3 py-1 md:px-4 md:py-1.5 mb-6">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-accent-foreground font-medium text-xs md:text-sm">Tecnologia em secagem</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-heading leading-tight mb-6">
                        Seque seu café com <br />
                        <span className="text-accent">eficiência</span> e <span className="text-accent">qualidade</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                        Somos referência nacional na fabricação de secadores de café. Equipamentos robustos, tecnologia própria e suporte completo para produtores de todo o Brasil.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button className="bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/20 flex items-center justify-center gap-2 w-full sm:w-auto">
                            Solicitar Orçamento
                            <ArrowRight size={20} />
                        </button>
                        <a
                            href="https://wa.me/5532998119181?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all items-center justify-center w-full sm:w-auto"
                        >
                            Falar com Atendimento
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
                        {[
                            "Entrega em todo Brasil",
                            "Fabricação própria",
                            "Garantia de fábrica"
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3 text-white">
                                <div className="w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center text-accent">
                                    <Check size={16} strokeWidth={3} />
                                </div>
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating Stat Card */}
                <div className="hidden lg:block absolute bottom-32 right-8 bg-white/95 backdrop-blur rounded-2xl p-6 shadow-2xl max-w-xs animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-primary text-xl font-bold">
                            100+
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-lg">Clientes Satisfeitos</p>
                            <p className="text-gray-600 text-sm leading-relaxed mt-1">
                                Produtores de norte a sul do Brasil confiam em nossa tecnologia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
