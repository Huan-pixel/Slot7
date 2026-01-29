import { useState } from 'react';

function QuantityManager() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
      <input type="number" value={count} readOnly style={{ width: '40px', textAlign: 'center' }} />
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}