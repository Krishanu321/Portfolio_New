
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/919083108496?text=Hi%20Krishanu!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.', '_blank');
  };

  const handleEmailContact = () => {
    window.open('mailto:krisho.ca@gmail.com?subject=Project%20Inquiry&body=Hi%20Krishanu,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.', '_blank');
  };

  const handlePhoneContact = () => {
    window.open('tel:+919083108496', '_blank');
  };

  return (
    <section id="contact-section" className="py-20 bg-white dark:bg-gray-900/80 transition-colors duration-500">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Let's Talk</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  I'm always interested in new opportunities, collaborations, or just having a chat about technology and development.
                </p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                <div 
                  onClick={handleWhatsAppContact}
                  className="flex items-center p-6 bg-white dark:bg-purple-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-purple-700 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">WhatsApp</h4>
                    <p className="text-green-600 dark:text-green-400 font-medium">+91 9083108496</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Click to chat directly</p>
                  </div>
                </div>
                
                <div 
                  onClick={handleEmailContact}
                  className="flex items-center p-6 bg-white dark:bg-purple-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-purple-700 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Email</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">krisho.ca@gmail.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Click to send email</p>
                  </div>
                </div>
                
                <div 
                  onClick={handlePhoneContact}
                  className="flex items-center p-6 bg-white dark:bg-purple-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-purple-700 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Phone</h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">+91 9083108496</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Click to call</p>
                  </div>
                </div>
                
                <div className="flex items-center p-6 bg-white dark:bg-purple-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-purple-700">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center mr-6 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">India</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Kolkata (WB)</p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleWhatsAppContact}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
                <Button 
                  onClick={handleEmailContact}
                  variant="outline"
                  className="flex-1 border-2 border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-500 dark:hover:bg-purple-600 hover:text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white dark:bg-purple-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-purple-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800/50 dark:text-white focus:border-purple-500 dark:focus:border-purple-400 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800/50 dark:text-white focus:border-purple-500 dark:focus:border-purple-400 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Project Details</label>
                  <Textarea 
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800/50 dark:text-white focus:border-purple-500 dark:focus:border-purple-400 transition-colors resize-none"
                    placeholder="Tell me about your ..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
