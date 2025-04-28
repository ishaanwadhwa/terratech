import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export function ContactSection() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight">Contact TerraTech</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Get in touch with our team
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl">
        <form className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
          </div>
          <Input placeholder="Company" />
          <Textarea placeholder="Message" className="min-h-[150px]" />
          <div className="flex gap-4">
            <Button className="flex-1">Send Message</Button>
            <Button variant="outline" className="flex-1">
              Connect on LinkedIn
            </Button>
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