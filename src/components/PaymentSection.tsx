import { Landmark, Wallet, Banknote, FileCheck } from "lucide-react";

export const PaymentSection = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
                        Facilidades
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary leading-tight">
                        Financiamento Descomplicado
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                        Não deixe a forma de pagamento ser um obstáculo. Oferecemos diversas opções de financiamento para que você adquira seu secador de forma tranquila e segura.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: FileCheck,
                            title: "Financiamento PRONAF",
                            desc: "Facilidade no processo via PRONAF Mais Alimentos.",
                            color: "bg-blue-100 text-blue-600"
                        },
                        {
                            icon: Landmark,
                            title: "Banco do Brasil",
                            desc: "Linhas de crédito rural com taxas diferenciadas.",
                            color: "bg-yellow-100 text-yellow-700"
                        },
                        {
                            icon: Wallet,
                            title: "À vista ou Parcelado",
                            desc: "Condições especiais para pagamento direto.",
                            color: "bg-green-100 text-green-700"
                        },
                        {
                            icon: Banknote,
                            title: "Consultoria Completa",
                            desc: "Apoio na análise de crédito e documentação.",
                            color: "bg-purple-100 text-purple-700"
                        },
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                                <item.icon size={28} />
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
