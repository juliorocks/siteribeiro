
export const VideoSection = () => {
    return (
        <section className="py-20 bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
                        Apresentação
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight">
                        Veja a Tecnologia Ribeiro em Ação
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-700 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/KJtbXr-jogM?si=JhowClient&autoplay=0"
                        title="Apresentação Ribeiro Secadores"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};
