import { useState, useEffect } from "react";
import { Menu, X, Instagram, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Quem Somos", href: "#about" },
        { name: "Produtos", href: "#products" },
        { name: "Galeria", href: "#gallery" },
        { name: "Vantagens", href: "#benefits" },
        { name: "Depoimentos", href: "#testimonials" },
        { name: "Contato", href: "#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <a href="#" className="flex items-center gap-3 z-50 group">
                    <div className={cn(
                        "relative transition-all duration-300 group-hover:scale-105",
                        isScrolled ? "h-12 md:h-20" : "h-20 md:h-32"
                    )}>
                        <img
                            src="/images/logo-ribeiro-new.png"
                            alt="Ribeiro Secadores"
                            className="h-full w-auto object-contain"
                        />
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-accent relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full",
                                isScrolled ? "text-foreground" : "text-white"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <div className="flex gap-3 pr-4 border-r border-white/20">
                        <a
                            href="https://www.instagram.com/ribeirosecadoresdecafe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn("transition-colors hover:text-accent hover:scale-110 transform duration-200", isScrolled ? "text-primary" : "text-white")}
                        >
                            <Instagram size={20} />
                        </a>
                        <a
                            href="https://www.youtube.com/@ribeirosecadoresdecafe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn("transition-colors hover:text-accent hover:scale-110 transform duration-200", isScrolled ? "text-primary" : "text-white")}
                        >
                            <Youtube size={20} />
                        </a>
                    </div>
                    <a
                        href="https://wa.me/5532998119181?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20solicitar%20um%20or%C3%A7amento"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent text-white px-6 py-2.5 rounded-lg font-medium hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        Solicitar Orçamento
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn("lg:hidden z-50", isScrolled ? "text-primary" : "text-white")}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 lg:hidden animate-in slide-in-from-right">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-heading font-medium text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://wa.me/5532998119181?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20solicitar%20um%20or%C3%A7amento"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent text-white px-8 py-3 rounded-lg text-lg font-medium mt-4"
                        >
                            Solicitar Orçamento
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};
