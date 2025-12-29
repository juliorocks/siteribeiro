import { MapPin, Phone, Instagram, Youtube, ArrowRight } from "lucide-react";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">

                    {/* Form / CTA Side */}
                    <div className="w-full lg:w-3/5 p-8 lg:p-16 relative overflow-hidden">
                        {/* Pattern */}
                        <div className="absolute inset-0 opacity-10 pattern-dotsPattern pointer-events-none text-white" />

                        <div className="relative z-10 text-white">
                            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6">
                                Pronto para solicitar seu orçamento?
                            </h2>
                            <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-xl">
                                Não perca mais tempo! Solicite agora e descubra como os secadores Ribeiro podem transformar a qualidade e eficiência da secagem do seu café.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/5532998119181?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 text-center"
                                >
                                    Falar no WhatsApp
                                    <ArrowRight size={20} />
                                </a>

                            </div>

                            <div className="mt-16 pt-8 border-t border-white/10 grid sm:grid-cols-2 gap-8">
                                <div className="flex gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg h-fit">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-sm mb-1">Telefone / WhatsApp</p>
                                        <p className="font-bold text-lg">(32) 99811-9181</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Map / Info Side */}
                    <div className="w-full lg:w-2/5 bg-gray-100 min-h-[400px] lg:min-h-full relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118318.5796914777!2d-46.61868472477543!3d-21.36531393665398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b6385108ec73d3%3A0x6334f59798782054!2sMuzambinho%20-%20MG%2C%2037890-000!5e0!3m2!1spt-BR!2sbr!4v1709564858000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        {/* Overlay Info */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200">
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="text-accent" />
                                <div>
                                    <p className="font-bold text-gray-900">Muzambinho, MG</p>
                                    <p className="text-sm text-gray-500">Capital do Café</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <a href="https://www.instagram.com/ribeirosecadoresdecafe/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://www.youtube.com/@ribeirosecadoresdecafe" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors">
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
