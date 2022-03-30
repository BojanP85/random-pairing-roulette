import { useState } from "react";
import { Grid, Container, Header } from "semantic-ui-react";

import "../style/style.css";
import { data } from "../data/data";
import PairsColumn from "./PairsColumn";
import WheelColumn from "./WheelColumn";

const App = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [filteredData, setFilteredData] = useState(data);
  const [randomizedData, setRandomizedData] = useState([]);

  const handleSpinStart = () => {
    if (!mustSpin && randomizedData.length) {
      setFilteredData((filteredData) =>
        filteredData.filter(
          (datum) => datum.id !== filteredData[prizeNumber].id
        )
      );
    }

    const newPrizeNumber = Math.floor(
      Math.random() * (filteredData.length - 1)
    );
    setPrizeNumber(newPrizeNumber);
    setMustSpin(filteredData.length === 3 ? false : true);
  };

  const handleSpinStop = () => {
    setRandomizedData([...randomizedData, filteredData[prizeNumber].option]);
    setMustSpin(false);
  };

  return (
    <Container fluid>
      <Header as="h1">random pairing roulette</Header>
      <hr />
      <Grid columns={2} divided stackable>
        <Grid.Row>
          <WheelColumn
            mustSpin={mustSpin}
            prizeNumber={prizeNumber}
            filteredData={filteredData}
            handleSpinStart={handleSpinStart}
            handleSpinStop={handleSpinStop}
          />
          <PairsColumn randomizedData={randomizedData} />
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default App;
