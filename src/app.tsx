import { useEffect, useState } from "react";
import "./styles/common.css";

const App = () => {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await (await fetch("/api/message")).json();
      console.log(response.body);
      setData(response?.body ?? "no data");
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>田部井登輝のぺーじだよ</h1>
      <p>ドメイン変更キター</p>
      <p>{data ? data : ""}</p>
    </div>
  );
};

export default App;
