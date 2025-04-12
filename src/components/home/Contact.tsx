
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // In a real app, you would send this data to your backend
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 bg-vrahad-dark text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-vrahad-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-vrahad-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Start Your Data Journey Together
            </h2>
            <p className="text-slate-300 mb-8 max-w-md">
              Ready to transform your data operations? Contact us today to discuss how our services can help your business thrive.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-vrahad-blue/20 p-2 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-vrahad-blue" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Expert Consultation</h3>
                  <p className="text-slate-300 text-sm">Get personalized advice from our technology consultants.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-vrahad-purple/20 p-2 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-vrahad-purple" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Quick Response</h3>
                  <p className="text-slate-300 text-sm">We pride ourselves on our fast and efficient communication.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-vrahad-teal/20 p-2 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-vrahad-teal" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Tailored Solutions</h3>
                  <p className="text-slate-300 text-sm">Every solution is customized to meet your specific needs.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/10">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="bg-vrahad-teal/20 p-3 rounded-full mb-4">
                  <CheckCircle className="h-10 w-10 text-vrahad-teal" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-slate-300 mb-6">
                  We've received your message and will get back to you shortly.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)} 
                  className="bg-white text-vrahad-dark hover:bg-blue-100"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className={cn(
                        "bg-white/5 border-white/10 text-white placeholder:text-slate-400",
                        errors.name && "border-red-500"
                      )}
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">Name is required</p>
                    )}
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className={cn(
                        "bg-white/5 border-white/10 text-white placeholder:text-slate-400",
                        errors.email && "border-red-500"
                      )}
                      {...register("email", { 
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">Valid email is required</p>
                    )}
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      className={cn(
                        "bg-white/5 border-white/10 text-white placeholder:text-slate-400",
                        errors.message && "border-red-500"
                      )}
                      {...register("message", { required: true })}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">Message is required</p>
                    )}
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-vrahad-blue to-vrahad-purple hover:from-vrahad-purple hover:to-vrahad-blue transition-all"
                >
                  Send Message
                </Button>
                
                <p className="text-xs text-slate-400 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
