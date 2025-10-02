interface CardData {
  name: string;
  currentPrice: number;
  priceChange: number;
  spikeProb: number;
}

export default function CardList({ cards }: { cards: CardData[] }) {
  return (
    <div className="space-y-4">
      {cards.length === 0 ? (
        <p className="text-gray-500">No data available yet</p>
      ) : (
        cards.map((card) => (
          <div
            key={card.name}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{card.name}</h3>
              <span className="text-lg font-bold">${card.currentPrice.toFixed(2)}</span>
            </div>
            <div className="mt-2 flex gap-4 text-sm">
              <span className={card.priceChange >= 0 ? 'text-green-600' : 'text-red-600'}>
                {card.priceChange >= 0 ? '+' : ''}{card.priceChange.toFixed(1)}%
              </span>
              <span className="text-gray-500">
                Spike Probability: {(card.spikeProb * 100).toFixed(0)}%
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
