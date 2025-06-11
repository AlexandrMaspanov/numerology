import React, { useState } from "react";
import NameForm from "./components/nameform/NameForm";
import Result from './components/result/Result';
import Loader from './components/UI/loader/Loader';

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
          {isLoading
            ?
            <div className='loaderContainer'>
              <Loader />
            </div>
            :
            <Result
              result={result}
              error={error}
            />
          }
        </div>
      </main>
    </>
  )
}

export default App
