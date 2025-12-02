export default function UserDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s your overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-sm font-medium text-muted-foreground">
            My Projects
          </h3>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-sm font-medium text-muted-foreground">Tasks</h3>
          <p className="text-2xl font-bold mt-2">34</p>
        </div>
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-sm font-medium text-muted-foreground">Reports</h3>
          <p className="text-2xl font-bold mt-2">8</p>
        </div>
      </div>
    </div>
  );
}

