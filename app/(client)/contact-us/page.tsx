"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const contactDetails = [
  {
    label: "Email",
    value: "hello@njboilerplate.com",
    hint: "We usually reply within one business day.",
  },
  {
    label: "Office",
    value: "123 Tech Street, Silicon Valley",
    hint: "Available for on-site workshops and consultations.",
  },
  {
    label: "Support hours",
    value: "Mon–Fri, 9:00am – 6:00pm (IST)",
    hint: "Extended coverage available for teams on SLA.",
  },
];

export default function ContactUsPage() {
  return (
    <div className="container max-w-5xl py-12 space-y-12">
      {/* Hero */}
      <section className="space-y-4 text-center md:text-left">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Contact
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          Let&apos;s talk about your next{" "}
          <span className="text-primary">dashboard</span>.
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto md:mx-0">
          Share a bit about your project, and we&apos;ll help you figure out how
          NJ Boilerplate can save weeks of setup time for your team.
        </p>
      </section>

      {/* Main content */}
      <section className="grid gap-10 md:grid-cols-[1.6fr,1fr] items-start">
        {/* Form */}
        <div className="rounded-2xl border bg-card p-6 md:p-7 space-y-6 shadow-sm">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">
              Tell us about your project
            </h2>
            <p className="text-xs text-muted-foreground">
              A short description is enough to start. You can always share more
              details later.
            </p>
          </div>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="Your name" required />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="you@example.com" required />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium">Company or team</label>
              <Input placeholder="Optional" />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium">
                What are you planning to build?
              </label>
              <textarea
                className="min-h-[120px] w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Example: An internal analytics dashboard for our sales team..."
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium">Expected timeline</label>
              <Input placeholder="e.g. Next month, Q3, not sure yet" />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
              <p className="text-[11px] text-muted-foreground max-w-xs">
                By submitting this form, you agree that we may contact you about
                NJ Boilerplate and related services. No spam, ever.
              </p>
              <Button type="submit" size="sm">
                Submit message
              </Button>
            </div>
          </form>
        </div>

        {/* Contact details / Quick info */}
        <aside className="space-y-6">
          <div className="rounded-2xl border bg-card p-5 space-y-4">
            <h2 className="text-sm font-semibold">Contact details</h2>
            <div className="space-y-3 text-sm">
              {contactDetails.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="font-medium">{item.value}</p>
                  <p className="text-[11px] text-muted-foreground">
                    {item.hint}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-5 space-y-3 text-sm">
            <h2 className="text-sm font-semibold">Looking for support?</h2>
            <p className="text-xs text-muted-foreground">
              Already using this boilerplate? Check the docs or open an issue on
              the repository so we can help you faster.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Button size="sm" variant="outline">
                View documentation
              </Button>
              <Button size="sm" variant="ghost">
                Open GitHub issues
              </Button>
            </div>
          </div>

          <Separator />

          <p className="text-[11px] text-muted-foreground">
            Prefer email? Reach out directly at{" "}
            <span className="font-medium">hello@njboilerplate.com</span> and
            we&apos;ll get back to you.
          </p>
        </aside>
      </section>
    </div>
  );
}
