"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const stats = [
  { label: "Projects shipped", value: "120+" },
  { label: "Active teams", value: "35+" },
  { label: "Countries", value: "10+" },
];

const values = [
  {
    title: "Clarity over complexity",
    description:
      "We design dashboards that feel obvious to use, even on day one. Clear information, calm visuals, zero clutter.",
  },
  {
    title: "Speed as a feature",
    description:
      "From page load to daily workflows, everything is tuned to feel fast so teams can stay in flow.",
  },
  {
    title: "Built for real teams",
    description:
      "We focus on real-world use cases: analytics, reporting, collaboration and decision making.",
  },
];

const timeline = [
  {
    year: "2022",
    title: "The idea",
    description:
      "Started as an internal starter kit to help us spin up dashboards for clients in days, not weeks.",
  },
  {
    year: "2023",
    title: "Open to teams",
    description:
      "We turned the starter kit into a reusable boilerplate and shared it with product teams and agencies.",
  },
  {
    year: "Today",
    title: "A growing ecosystem",
    description:
      "NJ Boilerplate powers admin panels, internal tools and analytics dashboards across multiple industries.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="container max-w-5xl py-12 space-y-16">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-[1.6fr,1fr] items-center">
        <div className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            About NJ Boilerplate
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            We build the{" "}
            <span className="text-primary">foundation</span> so your product
            team can focus on the hard problems.
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl">
            NJ Boilerplate is a carefully crafted Next.js starter focused on
            real dashboards and internal tools. Clean architecture, opinionated
            UI and production-ready patterns—without getting in your way.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="sm">Start with this boilerplate</Button>
            <Button size="sm" variant="outline">
              View components
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-5 space-y-4 shadow-sm">
          <p className="text-sm font-medium text-muted-foreground">
            What you get out of the box
          </p>
          <ul className="text-sm space-y-2 text-muted-foreground">
            <li>• Auth-ready layouts for marketing and dashboards</li>
            <li>• Prebuilt navigation, tables and analytics views</li>
            <li>• Tailwind CSS 4, modern tokens and dark mode support</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-6 md:grid-cols-3 rounded-2xl border bg-card px-6 py-5">
        {stats.map((item) => (
          <div key={item.label} className="space-y-1">
            <p className="text-2xl font-semibold">{item.value}</p>
            <p className="text-xs text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </section>

      <Separator />

      {/* Values */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold">How we think</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mt-1">
            We treat dashboards as products, not just admin pages. That means
            focusing on the people who use them every single day.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border bg-card p-4 space-y-2"
            >
              <h3 className="text-sm font-semibold">{value.title}</h3>
              <p className="text-xs text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold">Our story</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mt-1">
            A small set of patterns that we refined on real projects, packaged
            into something teams can reuse with confidence.
          </p>
        </div>

        <div className="space-y-4 border-l pl-4 md:pl-6">
          {timeline.map((item, index) => (
            <div key={item.year} className="relative space-y-1 pl-4">
              <span className="absolute left-[-9px] top-1 h-2 w-2 rounded-full bg-primary" />
              <p className="text-xs font-semibold text-primary">{item.year}</p>
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-xs text-muted-foreground max-w-xl">
                {item.description}
              </p>
              {index < timeline.length - 1 && (
                <div className="absolute -left-px top-4 h-full w-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
