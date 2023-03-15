'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

// Define a React component called CreateWidget
export default function CreateWidgetPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  // Return a JSX element that contains a heading and a button
  const handleCreateWidget = async () => {
    console.log('Button Clicked : Creating new Widget');
    setIsFetching(true)
    const res = await fetch('http://localhost:3000/api/widgets', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    console.log(res)
    setIsFetching(false);

    startTransition(() => {
      router.push('/widgets');
    });
    console.log(res);
  }

  return (
    <>
      <h3>New Widget</h3>
      <div>
        <button onClick={() => handleCreateWidget()}>Click Me!</button>
      </div>
    </>
  );
}