let logData = { 1: "plain vite project", 2: "minor edit", 3: "add routing" };

function Log() {
  return (
    <>
      <div>Log Page</div>
      {Object.entries(logData).map(([key, value], index) => (
        <p key={index}>
          <strong>{key}: </strong>
          {value}
        </p>
      ))}
    </>
  );
}

export default Log;
