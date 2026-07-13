export default function RecentRequests({ history }) {

  if (history.length === 0) {
    return (
      <div className="history-card">
        <h2>🕒 Recent Requests</h2>
        <p>No requests yet.</p>
      </div>
    );
  }

  return (

    <div className="history-card">

      <h2>🕒 Recent Requests</h2>

      {history.map((item, index) => (

        <div
          className="history-item"
          key={index}
        >

          <div>

            <strong>{item.category}</strong>

            <p>{item.reason}</p>

          </div>

          <span>{item.confidence}%</span>

        </div>

      ))}

    </div>

  );

}