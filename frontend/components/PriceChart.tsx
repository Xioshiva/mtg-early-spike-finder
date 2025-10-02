export default function PriceChart({ cardName }: { cardName: string }) {
  // TODO: Implement chart with a library like recharts or chart.js
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Price History: {cardName}</h3>
      <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded">
        <p className="text-gray-500">Chart visualization coming soon</p>
      </div>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p>TODO: Add price history chart</p>
        <ul className="list-disc list-inside mt-2">
          <li>7-day moving average</li>
          <li>30-day price trend</li>
          <li>Volume indicators</li>
        </ul>
      </div>
    </div>
  );
}
