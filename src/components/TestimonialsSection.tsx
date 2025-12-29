import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Luciano",
            role: "Produtor Rural",
            location: "Santana de Caldas, MG",
            content: "Recebi meu secador aqui em Santana de Caldas, estou muito satisfeito. Produto top e atendimento melhor ainda!",
            rating: 5
        },
        {
            name: "Ananias Nunes",
            role: "Produtor Rural",
            location: "Fazenda Furriel, Carangola",
            content: "A entrega foi rápida, atendimento excelente. Comprei com financiamento do Pronaf, deu tudo certo.",
            rating: 5
        },
        {
            name: "Carlos Mendes",
            role: "Cafeicultor",
            location: "Alto Jequitibá, MG",
            content: "Qualidade excepcional e suporte técnico muito bom. Recomendo para todos os produtores.",
            rating: 5
        },
        {
            name: "Maria Helena",
            role: "Produtora de Cafés Especiais",
            location: "Espera Feliz, MG",
            content: "Meu café especial nunca teve tanta qualidade na secagem. Investimento que vale cada centavo.",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
                        Depoimentos
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary leading-tight">
                        O que nossos clientes dizem
                    </h2>
                    <p className="text-lg text-gray-600 mt-4">
                        A satisfação de quem já transformou sua produção com a Ribeiro.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex gap-1 text-accent mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <div className="relative mb-6 flex-grow">
                                <Quote className="absolute -top-2 -left-2 text-primary/10 w-8 h-8 rotate-180" />
                                <p className="text-gray-700 relative z-10 italic leading-relaxed">
                                    "{item.content}"
                                </p>
                            </div>

                            <div className="mt-auto pt-4 border-t border-gray-200">
                                <p className="font-bold text-gray-900">{item.name}</p>
                                <p className="text-xs text-primary font-medium uppercase tracking-wide mt-0.5">{item.role}</p>
                                <p className="text-xs text-gray-500 mt-1">{item.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
