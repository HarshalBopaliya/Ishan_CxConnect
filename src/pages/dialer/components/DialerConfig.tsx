import React, { useEffect, useState } from "react";
import Skeleton from "../Skeleton";
// import Skeleton from "../Skeleton";
// import ErrorFallback from "../ErrorFallback";

const getTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) throw new Error("Failed to fetch todos");

  return res.json();
};

const DialerConfig: React.FC = () => {
  const [data, setData] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        if (isMounted) {
          setData(data);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setIsError(error instanceof Error ? error.message : String(error));
          setIsLoading(false);
        }
      }
    };

    fetchTodos();

    return () => {
      isMounted = false;
    };
  }, []);

  // if (isLoading) return <Skeleton />;
  // if (isError) return <ErrorFallback />;

  if (isLoading) return <Skeleton />;
  if (isError) return <div>Something went wrong</div>;

  return (
    <div>
      <h1>Dialer</h1>
      {data.map((d) => {
        // console.log("todo", d);
        return (
          <>
            <div key={d?.id} className="flex items-center gap-1">
              <span>{d?.title} -</span>
              <span>{d?.completed.toString()}</span>
              <button disabled={isLoading}>Click</button>
            </div>
            {/* <div>{data}</div> */}
          </>
        );
      })}
    </div>
  );
};

export default DialerConfig;
