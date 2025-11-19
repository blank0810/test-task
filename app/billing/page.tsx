import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BillingPage() {
  return (
    <main className="flex-1 space-y-6 p-6">
      <div>
        <h2 className="text-lg font-semibold">Billing</h2>
        <p className="text-sm text-muted-foreground">Manage your subscription and credits</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Pro</div>
            <p className="text-xs text-muted-foreground">$49/month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,450</div>
            <p className="text-xs text-muted-foreground">Remaining</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Next Billing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Dec 19</div>
            <p className="text-xs text-muted-foreground">2025</p>
          </CardContent>
        </Card>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4">Purchase Credits</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="cursor-pointer transition-colors hover:bg-accent">
            <CardContent className="p-6">
              <div className="text-2xl font-bold mb-1">500</div>
              <div className="text-lg font-semibold mb-2">$25</div>
              <p className="text-xs text-muted-foreground">Small projects</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer border-2 transition-colors hover:bg-accent">
            <CardContent className="p-6">
              <div className="text-2xl font-bold mb-1">1,500</div>
              <div className="text-lg font-semibold mb-2">$65</div>
              <p className="text-xs text-muted-foreground">Most popular</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer transition-colors hover:bg-accent">
            <CardContent className="p-6">
              <div className="text-2xl font-bold mb-1">5,000</div>
              <div className="text-lg font-semibold mb-2">$200</div>
              <p className="text-xs text-muted-foreground">Best value</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
