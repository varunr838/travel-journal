import Navbar from "./components/navbar";
import data from "../src/components/data";
import Card from "./components/card";
export default function App() {
  const cards = data.map(item => {
    return(
      <Card
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}
