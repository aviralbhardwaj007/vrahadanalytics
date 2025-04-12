
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "CTO, TechVision Inc.",
    quote: "Working with Vrahad Analytics has been transformative for our data operations. Their AWS expertise and data migration services helped us modernize our infrastructure with minimal disruption.",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Data Science Director, Innovate AI",
    quote: "The Databricks support we received from Vrahad Analytics was exceptional. Their team's deep knowledge and responsive service enabled us to fully leverage our data platform.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Jessica Wong",
    title: "Operations Manager, CloudPro Solutions",
    quote: "Vrahad's cost optimization services saved us nearly 40% on our cloud expenses while improving performance. Their analytical approach and attention to detail were impressive.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    title: "VP of Engineering, DataFlex Corp",
    quote: "The big data processing solutions provided by Vrahad Analytics gave us insights we never thought possible. Their expertise in handling complex data workflows is unmatched.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients Speak</h2>
          <p className="text-slate-600 text-lg">
            Don't just take our word for it. Hear what our clients have to say about our services and solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden relative h-[340px] md:h-[280px]">
            {testimonials.map((testimonial, idx) => (
              <Card
                key={testimonial.id}
                className={cn(
                  "absolute w-full transition-all duration-500 ease-in-out",
                  activeIndex === idx
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
                )}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-vrahad-blue"
                      />
                    </div>
                    <div>
                      <div className="flex gap-1 mb-2">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < testimonial.rating 
                                  ? "fill-yellow-400 text-yellow-400" 
                                  : "text-slate-300"
                              }
                            />
                          ))}
                      </div>
                      <blockquote className="text-slate-700 italic mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-slate-600 text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === idx ? "bg-vrahad-blue w-6" : "bg-slate-300"
                  }`}
                >
                  <span className="sr-only">Testimonial {idx + 1}</span>
                </button>
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
