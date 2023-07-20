'use client';

import { MouseEvent, useState } from 'react';
import { Button } from 'ui';

const callAPI = async (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();

  const res = await fetch(`http://localhost:3002/api/hello`, {
    // method: 'GET',
    mode: 'no-cors',
  });
  const data = await res.json();
  console.log(data);
};

const getJsonAPI = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    method: 'GET',
  });
  const data = await res.json();
  console.log(data);
  console.log('DATA_API_KEY', process.env);

  return data;
};

export default function Home() {
  const [items, setItems] = useState([]);

  return (
    <main>
      admin root (WTF)
      <br />
      <Button />
      <br />
      <button onClick={async () => {
        const is = await getJsonAPI();
        console.log('items', is);
        setItems(is);
      }}>load</button>
      <button onClick={() => setItems([])}>clear</button>
      <br />
      {JSON.stringify(items, null, 2)}
    </main>
  );
}
