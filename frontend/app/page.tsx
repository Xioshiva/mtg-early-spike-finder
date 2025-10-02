export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">MTG Early Spike Finder</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Find Magic: The Gathering cards that are likely to spike in price
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {/* Price Trends Card */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Price Trends</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              View recent price fluctuations and historical data
            </p>
            <div className="text-sm text-gray-500">
              TODO: Implement price trends visualization
            </div>
          </div>

          {/* Tournament Analysis Card */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Tournament Analysis</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Track cards gaining popularity in tournaments
            </p>
            <div className="text-sm text-gray-500">
              TODO: Implement tournament data display
            </div>
          </div>

          {/* Spike Predictions Card */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Spike Predictions</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              AI-powered predictions of cards likely to spike
            </p>
            <div className="text-sm text-gray-500">
              TODO: Implement prediction display
            </div>
          </div>
        </div>

        <section className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
            <li>Configure API keys for data collection service</li>
            <li>Start the data collector to begin gathering price and tournament data</li>
            <li>Run the analysis service to process the data</li>
            <li>View predictions and insights in this dashboard</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
