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

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  position: z.string().min(2, "Please specify the position"),
  experience: z.string().min(1, "Please specify your years of experience"),
  message: z.string().min(10, "Cover letter must be at least 10 characters"),
  resume: z
    .custom<FileList>()
    .refine((files) => files?.length === 1, "Resume is required")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "Max file size is 5MB"
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      "Only .pdf, .doc, and .docx formats are supported"
    ),
});

export default function CareersPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const formData = new FormData();
  
      // Append all form fields to the FormData object
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("position", data.position);
      formData.append("experience", data.experience);
      formData.append("message", data.message);
  
      // Append the resume file (FileList -> first file)
      if (data.resume && data.resume[0]) {
        formData.append("resume", data.resume[0]);
      }
  
      // Add hidden fields for FormSubmit functionality
      formData.append("_captcha", "false");
      formData.append("_template", "box");
      formData.append(
        "_autoresponse",
        "Thank you for submitting your application. We will review it and get back to you soon."
      );
  
      const response = await fetch("https://formsubmit.co/support@coreinsightsai.com", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        toast({
          title: "Application submitted!",
          description: "We'll review your application and get back to you soon.",
        });
      } else {
        toast({
          title: "Error submitting application",
          description: "There was an error submitting your application. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast({
        title: "Error submitting application",
        description: "There was an error submitting your application. Please try again.",
      });
    }    
    form.reset();
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground">
              Help us shape the future of data analytics
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Open Positions</h2>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">
                      Senior Data Scientist
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Lead advanced analytics projects and mentor junior team
                      members
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">ML Engineer</h3>
                    <p className="text-sm text-muted-foreground">
                      Build and deploy machine learning models at scale
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Apply Now</h2>
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
                        <FormLabel>Full Name</FormLabel>
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
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Senior Data Scientist"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Years of Experience</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" {...field} />
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
                        <FormLabel>Cover Letter</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about yourself and why you'd be a great fit..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="resume"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Resume</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => {
                              const fileList = e.target.files;
                              if (fileList) {
                                field.onChange(fileList); // Manually call onChange with the FileList
                              }
                            }}
                            //className="file-input-class" // Optional: Add your styling class
                          />
                        </FormControl>
                        <p className="text-sm text-muted-foreground">
                          Max file size: 5MB. Accepted formats: PDF, DOC, DOCX
                        </p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
