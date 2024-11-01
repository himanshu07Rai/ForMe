const useFetchWithAbort = (url: string) => {
    const [users, setUsers] = useState<
      | {
          id: number;
          name: string;
          username: string;
        }[]
      | []
    >([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    useEffect(() => {
      setLoading(true);
      const controller = new AbortController();
      const signal = controller.signal;
      fetch(url, { signal })
        .then((response) => response.json())
        .then((users) => {
          setUsers(users);
          console.log(users);
        })
        .catch((error) => {
          setError(error.message);
          console.error("Error:", error.message);
        })
        .finally(() => {
          setLoading(false);
        });
  
      return () => {
        console.log("aborting");
        controller.abort();
      };
    }, []);
  
    return { users, loading, error };
  };