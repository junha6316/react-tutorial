import { useState, useEffect } from 'react';


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  const [dollars, setDollars] = useState(0)


  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=> response.json())
    .then((json)=> {
      setCoins(json);
      setLoading(false);
    })
  },[])

  const inputDollars = (event) =>{
    const current = event.target.value;
    setDollars(current);

  }


  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading</strong> : <input value={dollars} onChange={inputDollars} placeholder='How many dollars do you have?'/>}
      
      <ul>
        {coins.map(coin=>{
          return(
            dollars > 0 ?
            <li key={coin.id}>{coin.name}({coin.symbol}): { Math.round(dollars/coin.quotes.USD.price)}개</li>
            :<li key={coin.id}>{coin.name}({coin.symbol}): {coin.quotes.USD.price} USD</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;

