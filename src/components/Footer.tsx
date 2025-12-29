
export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">
                        <img src="/images/logo-ribeiro-new.png" alt="Ribeiro" className="h-16 w-auto mb-4 mx-auto md:mx-0" />
                        <p className="text-gray-400 text-sm max-w-sm">
                            Indústria Metalúrgica Ribeiro – Referência nacional na fabricação de secadores de café.
                        </p>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-8">
                        {["Quem Somos", "Produtos", "Vantagens", "Depoimentos", "Contato"].map((link) => (
                            <a key={link} href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">
                                {link}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; 2025 Indústria Metalúrgica Ribeiro. Todos os direitos reservados.</p>
                    <p></p>
                </div>
            </div>
        </footer>
    );
};
