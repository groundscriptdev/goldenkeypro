"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { InfiniteCarousel } from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const t = useTranslations("home");

  const testimonials = [
    {
      name: "Zhang Wei",
      location: "Shanghai, China",
      company: "Tech Entrepreneur",
      quote:
        "Panama Golden Key hizo que nuestro proceso de residencia fuera fluido y eficiente. Su experiencia en regulaciones panameñas y requisitos chinos fue invaluable. Hoy mi familia y yo disfrutamos de una calidad de vida excepcional.",
      rating: 5,
      avatar: "/images/avatars/zhang-wei.jpg",
      program: "Qualified Investor Visa",
    },
    {
      name: "Li Mei",
      location: "Beijing, China",
      company: "Investment Banker",
      quote:
        "El servicio personalizado que recibí fue excepcional. Me ayudaron a encontrar la propiedad perfecta en Panama Pacifico y gestionaron todo el proceso de inversión. El ROI ha sido mejor de lo esperado.",
      rating: 5,
      avatar: "/images/avatars/li-mei.jpg",
      program: "Real Estate Investment",
    },
    {
      name: "Wang Jian",
      location: "Guangzhou, China",
      company: "Manufacturing CEO",
      quote:
        "Como empresario, valoro la eficiencia y profesionalidad. Panama Golden Key entregó exactamente eso. Ahora tengo mi empresa establecida en Panamá con beneficios fiscales increíbles.",
      rating: 5,
      avatar: "/images/avatars/wang-jian.jpg",
      program: "Business Visa",
    },
    {
      name: "Chen Yu",
      location: "Shenzhen, China",
      company: "Medical Professional",
      quote:
        "El programa de turismo médico superó mis expectativas. Atención de clase mundial a una fracción del costo,加上 recuperación en un paraíso tropical. Recomendado 100%.",
      rating: 5,
      avatar: "/images/avatars/chen-yu.jpg",
      program: "Medical Tourism",
    },
    {
      name: "Liu Xiaoming",
      location: "Hangzhou, China",
      company: "Real Estate Developer",
      quote:
        "He invertido en propiedades en múltiples países, pero Panamá ofrece el mejor retorno. El equipo de Panama Golden Key conoce el mercado local y me conectó con las mejores oportunidades.",
      rating: 5,
      avatar: "/images/avatars/liu-xiaoming.jpg",
      program: "Property Investment",
    },
    {
      name: "Sun Wei",
      location: "Nanjing, China",
      company: "Retired Executive",
      quote:
        "Mi jubilación en Panamá ha sido un sueño hecho realidad. El programa de retiro con descuentos y beneficios fiscales me permite disfrutar de una vida cómoda y activa.",
      rating: 5,
      avatar: "/images/avatars/sun-wei.jpg",
      program: "Retirement Visa",
    },
    {
      name: "Huang Li",
      location: "Chengdu, China",
      company: "Education Consultant",
      quote:
        "La educación de mis hijos en Panamá ha sido excepcional. Colegios bilingües de primer nivel y preparación para universidades estadounidenses. Vale cada centavo invertido.",
      rating: 5,
      avatar: "/images/avatars/huang-li.jpg",
      program: "Educational Program",
    },
    {
      name: "Zhao Min",
      location: "Xi'an, China",
      company: "E-commerce Owner",
      quote:
        "Establecer mi negocio de e-commerce en Panamá fue la mejor decisión. Acceso a mercados globales, logística eficiente y ventajas fiscales que no encuentro en ningún otro lugar.",
      rating: 5,
      avatar: "/images/avatars/zhao-min.jpg",
      program: "Business Setup",
    },
  ];

  const TestimonialCard = ({
    testimonial,
    index,
  }: {
    testimonial: (typeof testimonials)[0];
    index: number;
  }) => (
    <Card className="h-full bg-white border-jade-green/10 hover:border-jade-green/30 transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex items-start mb-4">
          <Quote className="w-8 h-8 text-gold/30 mr-3 flex-shrink-0" />
          <div className="flex-1">
            <div className="flex mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              "{testimonial.quote}"
            </p>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-jade-green/10">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-jade-green/20 to-gold/20 rounded-full mr-4 flex items-center justify-center">
              <span className="text-jade-green font-semibold text-lg">
                {testimonial.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-jade-green">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-600">{testimonial.company}</p>
              <p className="text-xs text-gray-500">
                {testimonial.location} • {testimonial.program}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-jade-green/5 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-brand text-jade-green font-bold mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="relative">
          {/* Desktop: Grid view */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>

          {/* Mobile/Tablet: Carousel */}
          <div className="lg:hidden">
            <InfiniteCarousel
              autoPlay={true}
              interval={5000}
              showArrows={true}
              showDots={true}
              className="h-[400px]"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <TestimonialCard testimonial={testimonial} index={index} />
                </div>
              ))}
            </InfiniteCarousel>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur px-6 py-3 rounded-full border border-jade-green/20">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <div
                  key={index}
                  className="w-8 h-8 bg-gradient-to-br from-jade-green/20 to-gold/20 rounded-full border-2 border-white flex items-center justify-center"
                >
                  <span className="text-xs font-semibold text-jade-green">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-600 font-medium">
              +{testimonials.length} clientes satisfechos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
