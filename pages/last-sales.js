import { useEffect, useState } from "react";
// import useSWR from "swr";

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sale);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://nextjs-course-38af5-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(true);
        const trnasformData = [];
        for (const key in data) {
          trnasformData.push({
            id: key,
            name: data[key].name,
            volume: data[key].volume,
          });
        }
        setSales(trnasformData);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading.........</p>;
  }

  if (!sales) {
    return <p>No data yet.</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.name} - {sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://nextjs-course-38af5-default-rtdb.firebaseio.com/sales.json"
  );

  const data = await response.json();
  const trnasformData = [];
  for (const key in data) {
    trnasformData.push({
      id: key,
      name: data[key].name,
      volume: data[key].volume,
    });
  }

  return {
    props: {
      sales: trnasformData,
    },
    revalidate: 10,
  };
}

export default LastSalesPage;
