import emailjs from "@emailjs/browser";
import {useRef} from "react"
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast()

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8babmim",    // 🔁 Replace with your actual service ID
        "template_i7hqe8q",   // 🔁 Replace with your actual template ID
        formRef.current!,
        "SUlPi3Tti5urH13Ld"     // 🔁 Replace with your actual public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          toast({
            title: "Success!",
            description: "Message sent successfully!"
          })
          formRef.current?.reset(); // Optional: reset form after success
        },
        (error) => {
          console.error("Email send error:", error.text);
          toast({
            variant: "destructive",
            title: "Error!",
            description: "Failed to send message. Please try again."
          })
        }
      );
  };

  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight">Contact TerraTech</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Get in touch with our team
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input name="from_name" placeholder="Name" required/>
            <Input name="from_email" placeholder="Email" required/>
          </div>
          <Input name="from_company" placeholder="Company" />
          <Textarea name="message" placeholder="Message" className="min-h-[150px]" required/>
          <div className="flex gap-4">
            <Button type="submit" className="w-1/2">Send Message</Button>
            <a href="https://www.linkedin.com/company/terratech-fzco/" target="_blank" rel="noopener noreferrer" className="w-1/2">
              <Button variant="outline" className="w-full" type="button">
                Connect on LinkedIn
              </Button>
            </a>
          </div>
        </form>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>📍 Dubai Digital Park</p>
          <p>📧 hello@terratech.cloud</p>
        </div>
      </div>
    </section>
  );
} 