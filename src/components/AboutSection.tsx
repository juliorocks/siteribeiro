import { Check, Shield, MapPin, Award } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative group animate-fade-in-up">
                        <div className="absolute inset-0 bg-accent rounded-2xl transform rotate-3 translate-x-2 translate-y-2 opacity-20 transition-transform group-hover:rotate-6 group-hover:translate-x-4 group-hover:translate-y-4" />
                        <img
                            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop"
                            alt="Soldador fabricando secador de café"
                            className="relative rounded-2xl shadow-2xl w-full h-auto aspect-video md:aspect-auto md:h-[500px] object-cover hover:scale-[1.02] transition-transform duration-500"
                        />

                        {/* Validated Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-primary">
                                    <Shield size={24} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-lg">Qualidade</p>
                                    <p className="text-secondary-foreground text-sm">Garantida</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 space-y-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                        <div>
                            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
                                Sobre Nós
                            </span>
                            <h2 className="text-3xl lg:text-5xl font-bold font-heading text-primary leading-tight">
                                Tradição e inovação na fabricação de secadores
                            </h2>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            A <strong className="text-primary font-semibold">Indústria Metalúrgica Ribeiro</strong> é referência nacional na fabricação de secadores de café. Localizada em Muzambinho, no coração de Minas Gerais, desenvolvemos tecnologia própria há mais de 30 anos.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Nossa missão é oferecer equipamentos robustos, duráveis e eficientes, que atendam às necessidades de produtores de pequeno, médio e grande porte. Cada secador é fabricado com excelência, garantindo qualidade superior na secagem do café.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            {[
                                { icon: Award, label: "Experiência", value: "30+ Anos" },
                                { icon: MapPin, label: "Entrega", value: "Nacional" },
                                { icon: Check, label: "Fabricação", value: "100% Própria" },
                                { icon: Shield, label: "Clientes", value: "500+ Satisfeitos" },
                            ].map((stat, index) => (
                                <div key={index} className="flex gap-4 items-start p-4 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                                    <div className="bg-primary/5 p-2.5 rounded-lg text-primary mt-1">
                                        <stat.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{stat.value}</h4>
                                        <p className="text-sm text-gray-600">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
