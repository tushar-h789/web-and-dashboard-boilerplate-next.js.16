export default function AnalyticsPage() {
  const stats = [
    { label: "Total Revenue", value: "$45,678", trend: "+12.4%", positive: true },
    { label: "Active Users", value: "1,234", trend: "+4.1%", positive: true },
    { label: "New Orders", value: "890", trend: "-2.3%", positive: false },
    { label: "Conversion Rate", value: "3.8%", trend: "+0.6%", positive: true },
  ];

  const traffic = [
    { source: "Direct", value: "45%" },
    { source: "Search", value: "32%" },
    { source: "Social", value: "15%" },
    { source: "Referral", value: "8%" },
  ];

  const topProducts = [
    { name: "Wireless Headphones", revenue: "$12,340" },
    { name: "Mechanical Keyboard", revenue: "$9,870" },
    { name: "Monitor 27 inch", revenue: "$7,560" },
    { name: "Wireless Mouse", revenue: "$5,430" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Analytics Overview</h1>
        <p className="text-muted-foreground mt-2">
          Key metrics and performance insights for your store.
        </p>
      </div>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border bg-card p-4 space-y-2"
          >
            <p className="text-sm font-medium text-muted-foreground">
              {item.label}
            </p>
            <p className="text-2xl font-bold">{item.value}</p>
            <p
              className={`text-xs font-medium ${
                item.positive ? "text-emerald-600" : "text-red-600"
              }`}
            >
              {item.trend} vs last month
            </p>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Sources */}
        <div className="lg:col-span-2 rounded-lg border bg-card p-6 space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Traffic Sources</h2>
            <p className="text-sm text-muted-foreground">
              Distribution of traffic by source.
            </p>
          </div>

          <div className="space-y-3">
            {traffic.map((item) => (
              <div key={item.source} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.source}</span>
                  <span className="text-muted-foreground">{item.value}</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: item.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="rounded-lg border bg-card p-6 space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Top Products</h2>
            <p className="text-sm text-muted-foreground">
              Products generating the most revenue.
            </p>
          </div>

          <div className="space-y-3">
            {topProducts.map((product) => (
              <div
                key={product.name}
                className="flex items-center justify-between"
              >
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-sm text-muted-foreground">
                  {product.revenue}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
