
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  Calendar, 
  MessageSquare, 
  Clock 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const { toast } = useToast();
  
  const { 
    register, 
    handleSubmit, 
    setValue,
    formState: { errors } 
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // In a real app, you would send this data to your backend
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    setIsSubmitted(true);
  };

  const handleServiceChange = (value: string) => {
    setValue("service", value);
  };

  useEffect(() => {
    // Simulating map loading
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-vrahad-blue/10 to-vrahad-purple/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-slate-700 text-lg max-w-3xl mx-auto mb-8">
            Have questions about our services or want to discuss your project? Reach out to us and our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col items-center text-center">
              <div className="bg-vrahad-blue/10 p-4 rounded-full mb-4">
                <Mail className="h-8 w-8 text-vrahad-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-slate-600 mb-4">For general inquiries and information</p>
              <a
                href="mailto:contact@vrahadanalytics.com"
                className="text-vrahad-blue hover:text-vrahad-purple transition-colors font-medium"
              >
                contact@vrahadanalytics.com
              </a>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col items-center text-center">
              <div className="bg-vrahad-purple/10 p-4 rounded-full mb-4">
                <Phone className="h-8 w-8 text-vrahad-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-slate-600 mb-4">Speak directly with our consultants</p>
              <a
                href="tel:+11234567890"
                className="text-vrahad-purple hover:text-vrahad-blue transition-colors font-medium"
              >
                +1 (123) 456-7890
              </a>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col items-center text-center">
              <div className="bg-vrahad-teal/10 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-vrahad-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-slate-600 mb-4">Our headquarters location</p>
              <address className="not-italic text-vrahad-teal">
                123 Tech Avenue, Silicon Valley<br />
                CA 94025, USA
              </address>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 text-center">
                  <div className="bg-vrahad-teal/10 p-4 rounded-full inline-flex mb-4">
                    <CheckCircle className="h-10 w-10 text-vrahad-teal" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-slate-700 mb-6 max-w-md mx-auto">
                    Your message has been sent successfully. Our team will review your inquiry and get back to you shortly.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)} 
                    className="bg-gradient-to-r from-vrahad-blue to-vrahad-purple hover:from-vrahad-purple hover:to-vrahad-blue transition-all"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name *"
                        className={cn(
                          "bg-slate-50 border-slate-200",
                          errors.name && "border-red-500"
                        )}
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">Name is required</p>
                      )}
                    </div>
                    
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email *"
                        className={cn(
                          "bg-slate-50 border-slate-200",
                          errors.email && "border-red-500"
                        )}
                        {...register("email", { 
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">Valid email is required</p>
                      )}
                    </div>
                    
                    <div>
                      <Input
                        placeholder="Phone Number"
                        className="bg-slate-50 border-slate-200"
                        {...register("phone")}
                      />
                    </div>
                    
                    <div>
                      <Input
                        placeholder="Company Name"
                        className="bg-slate-50 border-slate-200"
                        {...register("company")}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Select onValueChange={handleServiceChange}>
                      <SelectTrigger className="bg-slate-50 border-slate-200">
                        <SelectValue placeholder="Service You're Interested In" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="aws-azure">AWS & Azure Development</SelectItem>
                          <SelectItem value="data-migration">Data Migration</SelectItem>
                          <SelectItem value="big-data">Big Data Processing</SelectItem>
                          <SelectItem value="databricks">Databricks Support</SelectItem>
                          <SelectItem value="genai">GenAI Solutions</SelectItem>
                          <SelectItem value="cost-optimization">Cost Optimization</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Your Message *"
                      rows={6}
                      className={cn(
                        "bg-slate-50 border-slate-200",
                        errors.message && "border-red-500"
                      )}
                      {...register("message", { required: true })}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">Message is required</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-vrahad-blue to-vrahad-purple hover:from-vrahad-purple hover:to-vrahad-blue transition-all"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
            
            {/* Map & Schedule */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Office</h2>
              
              <div className="bg-slate-100 rounded-xl overflow-hidden h-[300px] mb-8 relative">
                {!mapLoaded ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-vrahad-blue border-t-transparent"></div>
                  </div>
                ) : (
                  <iframe
                    title="Vrahad Analytics Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101425.91682055621!2d-122.18358233157347!3d37.44300759161612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sPalo%20Alto%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1617842212415!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                  ></iframe>
                )}
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-vrahad-blue mt-1" />
                    <div>
                      <h4 className="font-medium">Monday - Friday</h4>
                      <p className="text-slate-600">9:00 AM - 6:00 PM PST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-vrahad-purple mt-1" />
                    <div>
                      <h4 className="font-medium">Weekend</h4>
                      <p className="text-slate-600">Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-vrahad-teal mt-1" />
                    <div>
                      <h4 className="font-medium">Online Support</h4>
                      <p className="text-slate-600">24/7 for existing clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-vrahad-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data Strategy?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Our team of experts is here to help you leverage the full potential of your data with innovative solutions.
          </p>
          <div className="inline-flex gap-4">
            <Button asChild size="lg" className="bg-white text-vrahad-dark hover:bg-blue-100">
              <a href="tel:+11234567890">
                <Phone className="h-5 w-5 mr-2" />
                Call Us
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="mailto:contact@vrahadanalytics.com">
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
