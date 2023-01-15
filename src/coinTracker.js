import {useState, useEffect} from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selected, setSelected] = useState("");
  const [USDollar, setUSDollar] = useState(0);
  const [selectedState, setSelectedState] = useState(false);

  const onChangeUSD = (event) => {
    setUSDollar(event.target.value);
  }
  
  const onChange = (event) => {
    setSelected(JSON.parse(event.target.value));
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  },[]);

  useEffect(() => {
    if (loading === false) {
        setSelected(coins[0]);
        setSelectedState(true);
    }
  },[loading]);

  
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`} </h1>
      {loading ? <strong>loading...</strong> : 
        <div>
            <select value={JSON.stringify(selected)} onChange={onChange}>
            {coins.map((coin) => (
                <option value={JSON.stringify(coin)} key={coin.id}>{coin.name} ({coin.symbol}) </option>
            ))}
            </select>
            <hr />
            <h1>USD to {selected.name}</h1>
            <div>
                <input value={USDollar} onChange={onChangeUSD} placeholder="Input number" type="number" /> USD
            </div>
            <div>
                <input disabled value={selectedState ? USDollar / selected.quotes.USD.price : 0} type="number" /> {selected.name}
                {console.log('selected Things: ',selected)}
            </div>
        </div>
      }
      
      {console.log(coins)}
    </div>
  );
}

export default CoinTracker;