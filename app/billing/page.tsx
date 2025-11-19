export default function BillingPage() {
  return (
    <main className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Billing</h2>
        <p className="text-gray-600">Manage your subscription and credits</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Plan</h3>
          <div className="text-3xl font-bold text-blue-600 mb-2">Pro</div>
          <p className="text-gray-600">$49/month</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Credits</h3>
          <div className="text-3xl font-bold text-green-600 mb-2">2,450</div>
          <p className="text-gray-600">Remaining</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Next Billing</h3>
          <div className="text-3xl font-bold text-gray-800 mb-2">Dec 19</div>
          <p className="text-gray-600">2025</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Purchase Credits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors cursor-pointer">
            <div className="text-2xl font-bold text-gray-800 mb-2">500</div>
            <div className="text-lg font-semibold text-blue-600 mb-2">$25</div>
            <p className="text-sm text-gray-600">Perfect for small projects</p>
          </div>
          <div className="border-2 border-blue-500 rounded-lg p-6 bg-blue-50 cursor-pointer">
            <div className="text-2xl font-bold text-gray-800 mb-2">1,500</div>
            <div className="text-lg font-semibold text-blue-600 mb-2">$65</div>
            <p className="text-sm text-gray-600">Most popular choice</p>
          </div>
          <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors cursor-pointer">
            <div className="text-2xl font-bold text-gray-800 mb-2">5,000</div>
            <div className="text-lg font-semibold text-blue-600 mb-2">$200</div>
            <p className="text-sm text-gray-600">Best value for teams</p>
          </div>
        </div>
      </div>
    </main>
  );
}
