"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();

      // Append the form data
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("company", values.company);
      formData.append("message", values.message);

      // File input handling
      // const fileInput = document.getElementById("resume");
      // if (fileInput && fileInput.files.length > 0) {
      //   formData.append("resume", fileInput.files[0]);
      // }

      // Hidden fields
      formData.append("_captcha", "false");
      formData.append("_template", "box");
      formData.append(
        "_autoresponse",
        "Thank you for reaching out to us. We will get back to you as soon as possible."
      );

      // Submit the form
      try {
        const response = await fetch(
          //"https://formsubmit.co/00b6798db1e1379bbc1597334aa1cb11", surajsinghania82
          "https://formsubmit.co/support@coreinsightsai.com",
          {
            method: "POST",
            body: formData,
          }
        );
        if (response.ok) {
          toast({
            title: "Message sent!",
            description: "We'll get back to you as soon as possible.",
          });
        } else {
          toast({
            title: "Error submitting the form!",
            description: "There was an error submitting the form.",
          });
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
        toast({
          title: "Error submitting the form!",
          description: "There was an error submitting the form.",
        });
      }
    
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 lg:grid-cols-2"
        >
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter">
                GET IN
                <span className="block">TOUCH</span>
              </h2>
              <p className="text-2xl text-muted-foreground">
                Let's discuss how we can help transform your business
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Ready to unlock the power of your data? Our team of experts is
                here to help you navigate the world of advanced analytics and
                AI.
              </p>
              <div className="space-y-2">
                <p>Email: support@coreinsightsai.com</p>
                {/* <p>Phone: +1 (555) 123-4567</p>
                <p>Location: Tech City, TC 12345</p> */}
              </div>
            </div>
          </div>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} name="email"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Company Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
