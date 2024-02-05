import React, { useState } from "react";

export function FetchUsers() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[] | null>(null);
  const [error, setError] = useState();

  const handler = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };

  return (
    <div>
      {loading ? "loading" : null}
      {data ? (
        <div>
          {data.map((item) => (
            <p>{item.name}</p>
          ))}
        </div>
      ) : null}
      {error ? "error" : null}
      <div>
        <button onClick={handler}>fetch users</button>
      </div>
    </div>
  );
}

