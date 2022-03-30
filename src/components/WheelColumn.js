import { Wheel } from "react-custom-roulette";
import { Button, Grid } from "semantic-ui-react";

const WheelColumn = ({
  mustSpin,
  prizeNumber,
  filteredData,
  handleSpinStart,
  handleSpinStop,
}) => (
  <Grid.Column className="wheel-column">
    <div className="wheel-column-wrapper">
      <div className="spin-btn-container">
        <Button
          circular
          icon="redo"
          size="massive"
          onClick={handleSpinStart}
          disabled={(mustSpin || filteredData.length === 2) && true}
        />
      </div>
      <div className="wheel-container">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={filteredData}
          outerBorderColor={["#f2f2f2"]}
          innerBorderColor={["#f2f2f2"]}
          radiusLineColor={["#dedede"]}
          radiusLineWidth={[2]}
          textColors={["#ffffff"]}
          fontSize={filteredData.length <= 10 ? [15] : [13]}
          backgroundColors={[
            "#F22B35",
            "#F99533",
            "#24CA69",
            "#514E50",
            "#46AEFF",
            "#9145B7",
          ]}
          onStopSpinning={() => {
            handleSpinStop();
          }}
        />
      </div>
    </div>
  </Grid.Column>
);

export default WheelColumn;
