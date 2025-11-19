import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CreditCard, TrendingUp, Calendar, Check } from 'lucide-react';

export default function BillingPage() {
  const creditPackages = [
    { credits: 500, price: 25, description: 'Perfect for small projects', popular: false },
    { credits: 1500, price: 65, description: 'Most popular choice', popular: true },
    { credits: 5000, price: 200, description: 'Best value for teams', popular: false },
  ];

  return (
    <main className="flex-1 space-y-6 p-6 bg-gradient-to-br from-background to-muted/20">
      <div>
        <h2 className="text-2xl font-bold">Billing</h2>
        <p className="text-sm text-muted-foreground">Manage your subscription and credits</p>
      </div>

      {/* Current Plan Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">Current Plan</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="text-3xl font-bold">Pro</div>
              <p className="text-sm text-muted-foreground">$49/month</p>
              <Badge variant="secondary" className="mt-2">
                Active
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">Credits Available</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-blue-600">2,450</div>
              <p className="text-sm text-muted-foreground">Remaining</p>
              <p className="text-xs text-green-600 font-medium mt-2">+500 this month</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">Next Billing</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="text-3xl font-bold">Dec 19</div>
              <p className="text-sm text-muted-foreground">2025</p>
              <p className="text-xs text-muted-foreground mt-2">Auto-renew enabled</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Plan Features */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Your Plan Includes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-green-100 p-1">
                <Check className="h-3 w-3 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">500 Monthly Credits</p>
                <p className="text-xs text-muted-foreground">Rollover unused credits</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-green-100 p-1">
                <Check className="h-3 w-3 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Priority Rendering</p>
                <p className="text-xs text-muted-foreground">Faster render times</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-green-100 p-1">
                <Check className="h-3 w-3 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">70GB Storage</p>
                <p className="text-xs text-muted-foreground">For media library</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-green-100 p-1">
                <Check className="h-3 w-3 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Email Support</p>
                <p className="text-xs text-muted-foreground">24-hour response time</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Purchase Credits */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Purchase Additional Credits</h3>
          <p className="text-sm text-muted-foreground">One-time credit packages</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {creditPackages.map((pkg) => (
            <Card
              key={pkg.credits}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                pkg.popular ? 'border-2 border-blue-500 shadow-md' : ''
              }`}
            >
              {pkg.popular && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-1 text-xs font-semibold">
                  Most Popular
                </div>
              )}
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="text-3xl font-bold">{pkg.credits.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Credits</p>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">${pkg.price}</div>
                  <p className="text-xs text-muted-foreground">${(pkg.price / pkg.credits * 1000).toFixed(2)} per 1000 credits</p>
                </div>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
                <Button className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                  Purchase
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
