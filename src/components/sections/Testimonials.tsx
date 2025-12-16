"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { InfiniteCarousel } from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const t = useTranslations("home");

  const testimonialKeys = [0, 1, 2, 3, 4, 5, 6, 7];

  const testimonials = testimonialKeys.map((key) => ({
    name: t(`testimonials.items.${key}.name`),
    location: t(`testimonials.items.${key}.location`),
    company: t(`testimonials.items.${key}.company`),
    quote: t(`testimonials.items.${key}.quote`),
    rating: 5,
    avatar: [
      "/images/avatars/zhang-wei.jpg",
      "/images/avatars/li-mei.jpg",
      "/images/avatars/wang-jian.jpg",
      "/images/avatars/chen-yu.jpg",
      "/images/avatars/liu-xiaoming.jpg",
      "/images/avatars/sun-wei.jpg",
      "/images/avatars/huang-li.jpg",
      "/images/avatars/zhao-min.jpg",
    ][key],
    program: t(`testimonials.items.${key}.program`),
  }));

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
    <section id="testimonials" className="py-20 bg-gradient-to-br from-jade-green/5 to-white">
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
