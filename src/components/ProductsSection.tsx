import { ArrowRight, Flame, Leaf } from "lucide-react";

export const ProductsSection = () => {
    return (
        <section id="products" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
                        Nossos Modelos
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6">
                        Secadores para todas as necessidades
                    </h2>
                    <p className="text-lg text-gray-600">
                        Seja qual for o tamanho da sua produção, temos o equipamento ideal para garantir a qualidade do seu café.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* Product 1: Wood */}
                    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
                        <div className="h-64 overflow-hidden relative">
                            <div className="absolute top-4 left-4 z-10 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5">
                                <Leaf size={14} />
                                Tradicional
                            </div>
                            <img
                                src="/images/secador-lenha.jpg"
                                alt="Secador a Lenha"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-8 space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">Secadores a Lenha</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Modelo tradicional, robusto e econômico. Ideal para produtores que têm acesso à lenha na propriedade.
                                </p>
                            </div>

                            <ul className="space-y-3">
                                {[
                                    "Estrutura reforçada em aço",
                                    "Diversas capacidades disponíveis",
                                    "Fácil operação e manutenção",
                                    "Economia no custo de combustível"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://wa.me/5532998119181?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20tenho%20interesse%20no%20Secador%20a%20Lenha"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full border-2 border-primary text-primary font-bold py-3 rounded-xl hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 group/btn"
                            >
                                Solicitar Orçamento
                                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Product 2: Gas */}
                    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                        <div className="h-64 overflow-hidden relative">
                            <div className="absolute top-4 left-4 z-10 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5">
                                <Flame size={14} />
                                Lançamento
                            </div>
                            <img
                                src="/images/secador-gas-product.png"
                                alt="Secador a Gás"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-8 space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">Secadores a Gás</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Tecnologia avançada para secagem uniforme e controlada. Perfeito para cafés especiais e alta produtividade.
                                </p>
                            </div>

                            <ul className="space-y-3">
                                {[
                                    "Controle preciso de temperatura",
                                    "Secagem mais rápida e uniforme",
                                    "Menor emissão de fumaça",
                                    "Ideal para cafés especiais"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://wa.me/5532998119181?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20tenho%20interesse%20no%20Secador%20a%20G%C3%A1s"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-accent text-white font-bold py-3 pt-3.5 rounded-xl hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 group/btn"
                            >
                                Solicitar Orçamento
                                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
