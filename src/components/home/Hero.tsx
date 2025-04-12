
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-vrahad-dark to-vrahad-blue/90 text-white min-h-[90vh] flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-vrahad-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-vrahad-blue/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Data into 
                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"> Business Value</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-xl">
                Vrahad Analytics empowers your organization with cutting-edge data solutions and GenAI technologies to drive innovation and growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-vrahad-dark hover:bg-blue-100 transition-colors">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-blue-200 font-medium mb-3">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-8 items-center">
                {['Amazon', 'Microsoft', 'Google', 'Oracle', 'IBM'].map((company) => (
                  <div key={company} className="text-white/70 font-semibold text-lg">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-lg animate-fade-in">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-vrahad-purple/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-vrahad-blue/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-vrahad-teal/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-3xl font-bold">Data Visualization</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-lg flex items-center justify-center">
                        <span className="font-semibold">AI Models</span>
                      </div>
                      <div className="h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                        <span className="font-semibold">Cloud Solutions</span>
                      </div>
                    </div>
                    <div className="h-24 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <span className="font-semibold">Data Processing Pipeline</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
