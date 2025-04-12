
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Database,
  Cloud,
  Server,
  Layers
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "CTO, TechVision Inc.",
    company: "TechVision Inc.",
    industry: "Artificial Intelligence",
    quote: "Working with Vrahad Analytics has been transformative for our data operations. Their AWS expertise and data migration services helped us modernize our infrastructure with minimal disruption. The team's attention to detail and technical knowledge was impressive throughout the project.",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 5,
    service: "AWS Development & Data Migration"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Data Science Director",
    company: "Innovate AI",
    industry: "Machine Learning",
    quote: "The Databricks support we received from Vrahad Analytics was exceptional. Their team's deep knowledge and responsive service enabled us to fully leverage our data platform. They went above and beyond to ensure our specific needs were met, and the results have been outstanding.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5,
    service: "Databricks Development"
  },
  {
    id: 3,
    name: "Jessica Wong",
    title: "Operations Manager",
    company: "CloudPro Solutions",
    industry: "Cloud Services",
    quote: "Vrahad's cost optimization services saved us nearly 40% on our cloud expenses while improving performance. Their analytical approach and attention to detail were impressive. I appreciated their transparent communication throughout the process and their willingness to explain technical concepts in accessible terms.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
    service: "Cost Optimization"
  },
  {
    id: 4,
    name: "David Thompson",
    title: "VP of Engineering",
    company: "DataFlex Corp",
    industry: "Data Analytics",
    quote: "The big data processing solutions provided by Vrahad Analytics gave us insights we never thought possible. Their expertise in handling complex data workflows is unmatched. The team was highly collaborative and took the time to understand our specific business challenges before proposing solutions.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    service: "Big Data Processing"
  },
  {
    id: 5,
    name: "Amanda Johnson",
    title: "Chief Analytics Officer",
    company: "MetricStream",
    industry: "Business Intelligence",
    quote: "Implementing GenAI solutions with Vrahad Analytics has revolutionized how we approach customer service. Their team's expertise in both technical implementation and business strategy ensured our AI deployment was successful and delivered measurable ROI within months.",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 5,
    service: "GenAI Solutions"
  }
];

const clients = [
  {
    name: "TechVision Inc.",
    industry: "Artificial Intelligence",
    logo: <Database className="h-12 w-12" />,
    project: "Cloud infrastructure modernization and data migration to AWS"
  },
  {
    name: "Innovate AI",
    industry: "Machine Learning",
    logo: <Server className="h-12 w-12" />,
    project: "Databricks implementation and ML pipeline optimization"
  },
  {
    name: "CloudPro Solutions",
    industry: "Cloud Services",
    logo: <Cloud className="h-12 w-12" />,
    project: "Multi-cloud cost optimization and resource management"
  },
  {
    name: "DataFlex Corp",
    industry: "Data Analytics",
    logo: <Database className="h-12 w-12" />,
    project: "Big data processing architecture and implementation"
  },
  {
    name: "MetricStream",
    industry: "Business Intelligence",
    logo: <Layers className="h-12 w-12" />,
    project: "GenAI-powered customer service automation"
  },
  {
    name: "Quantum Systems",
    industry: "Technology",
    logo: <Server className="h-12 w-12" />,
    project: "Azure cloud migration and optimization"
  },
  {
    name: "Insight Analytics",
    industry: "Market Research",
    logo: <Database className="h-12 w-12" />,
    project: "Data warehouse modernization"
  },
  {
    name: "FutureScale Inc.",
    industry: "SaaS",
    logo: <Cloud className="h-12 w-12" />,
    project: "Scalable infrastructure implementation on AWS"
  }
];

const caseStudies = [
  {
    title: "Financial Services Data Transformation",
    client: "Global Banking Corporation",
    challenge: "Legacy data systems causing delays and compliance issues",
    solution: "Implemented a modern data lake architecture on AWS with automated governance",
    results: "90% faster reporting, complete compliance coverage, and $2.5M annual savings",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3"
  },
  {
    title: "Retail AI-Powered Customer Analytics",
    client: "NorthStar Retail Group",
    challenge: "Inability to leverage customer data for personalization at scale",
    solution: "Built a unified customer data platform with GenAI recommendation engine",
    results: "32% increase in conversion rate and 28% higher average order value",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3"
  },
  {
    title: "Healthcare Data Processing Pipeline",
    client: "MediCore Health Systems",
    challenge: "Processing massive volumes of patient data while ensuring HIPAA compliance",
    solution: "Designed secure, scalable data processing architecture on Azure with Databricks",
    results: "Reduced processing time by 75% while enhancing security and compliance",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3"
  }
];

const ClientsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeStudy, setActiveStudy] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextCaseStudy = () => {
    setActiveStudy((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const prevCaseStudy = () => {
    setActiveStudy((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-vrahad-blue/10 to-vrahad-purple/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clients</h1>
          <p className="text-slate-700 text-lg max-w-3xl mx-auto mb-8">
            We've partnered with leading companies across industries to deliver transformative data and AI solutions.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-gradient-to-r from-vrahad-blue to-vrahad-purple hover:from-vrahad-purple hover:to-vrahad-blue transition-all">
              <a href="#testimonials">Client Testimonials</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#case-studies">Case Studies</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Companies We've Worked With</h2>
            <p className="text-slate-600">
              We're proud to have collaborated with innovative organizations across various sectors to solve complex data challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {clients.map((client, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 mb-4 rounded-full bg-slate-100 flex items-center justify-center text-vrahad-blue">
                      {client.logo}
                    </div>
                    <h3 className="font-bold text-lg mb-1">{client.name}</h3>
                    <p className="text-sm text-slate-500 mb-3">{client.industry}</p>
                    <p className="text-sm text-slate-700">{client.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-slate-600">
              Explore how our data and AI solutions have helped organizations overcome challenges and achieve their goals.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden">
              <div className="relative">
                {caseStudies.map((study, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "transition-all duration-500",
                      activeStudy === idx
                        ? "opacity-100 block"
                        : "opacity-0 hidden"
                    )}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="order-2 lg:order-1">
                        <h3 className="text-2xl font-bold mb-4 text-vrahad-blue">{study.title}</h3>
                        <p className="font-medium text-lg mb-6">{study.client}</p>
                        
                        <div className="space-y-4 mb-8">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-1">Challenge</h4>
                            <p className="text-slate-700">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-1">Solution</h4>
                            <p className="text-slate-700">{study.solution}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-1">Results</h4>
                            <p className="text-slate-700">{study.results}</p>
                          </div>
                        </div>
                        
                        <Button asChild className="bg-gradient-to-r from-vrahad-blue to-vrahad-purple hover:from-vrahad-purple hover:to-vrahad-blue transition-all">
                          <Link to="/contact">Discuss Your Project</Link>
                        </Button>
                      </div>
                      
                      <div className="order-1 lg:order-2">
                        <div className="rounded-xl overflow-hidden shadow-lg">
                          <img
                            src={study.image}
                            alt={study.title}
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-10">
              <Button variant="outline" size="icon" onClick={prevCaseStudy} className="rounded-full">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex gap-2 items-center">
                {caseStudies.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStudy(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeStudy === idx ? "bg-vrahad-blue w-6" : "bg-slate-300"
                    }`}
                  >
                    <span className="sr-only">Case Study {idx + 1}</span>
                  </button>
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={nextCaseStudy} className="rounded-full">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-slate-600">
              Hear directly from our clients about their experiences working with Vrahad Analytics.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden relative h-[360px] md:h-[280px]">
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
                        <div className="text-slate-600 text-sm mb-1">{testimonial.title}, {testimonial.company}</div>
                        <div className="text-xs text-vrahad-blue font-medium">{testimonial.service}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
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
              <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-vrahad-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Partner with Vrahad Analytics to transform your data operations and achieve your business goals.
          </p>
          <Button asChild size="lg" className="bg-white text-vrahad-dark hover:bg-blue-100">
            <Link to="/contact">Start Your Success Story</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ClientsPage;
