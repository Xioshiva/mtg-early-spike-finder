interface TournamentData {
  name: string;
  date: string;
  format: string;
  topCards: string[];
}

export default function TournamentTrends({ tournaments }: { tournaments: TournamentData[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Recent Tournaments</h3>
      {tournaments.length === 0 ? (
        <p className="text-gray-500">No tournament data available yet</p>
      ) : (
        tournaments.map((tournament, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold">{tournament.name}</h4>
              <span className="text-sm text-gray-500">{tournament.format}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {tournament.date}
            </p>
            <div className="mt-3">
              <p className="text-sm font-medium mb-1">Top Cards:</p>
              <div className="flex flex-wrap gap-2">
                {tournament.topCards.map((card) => (
                  <span
                    key={card}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                  >
                    {card}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
