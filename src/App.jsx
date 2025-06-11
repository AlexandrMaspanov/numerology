import React, { useState } from "react";
import NameForm from "./components/nameform/NameForm";

function App() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <>
      <main>
        <div className='wrapper'>
          <NameForm
            setResult={setResult}
            setIsLoading={setIsLoading}
            setError={setError}
          />
        </div>
      </main>
    </>
  )
}

export default App
