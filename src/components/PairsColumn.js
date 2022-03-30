import { Grid, Menu, Segment, Transition } from "semantic-ui-react";

const PairsColumn = ({ randomizedData }) => {
  const componentArray = [];

  const renderPairs = () => {
    randomizedData.forEach((d, i) => {
      let index = Math.floor(i / 2);
      componentArray[index] = [
        ...(componentArray[index] || []),
        <Grid.Column key={i} className={i % 2 ? "column-right" : ""}>
          <Transition
            transitionOnMount={true}
            duration="200"
            animation={i % 2 ? "slide left" : "slide right"}
          >
            <Segment className="datum-segment">
              <Menu borderless className="datum-menu">
                <Menu.Item
                  fitted
                  position={i % 2 ? "left" : "right"}
                  className={i % 2 ? "datum-menu-item" : "datum-menu-item left"}
                >
                  {d}
                </Menu.Item>
              </Menu>
            </Segment>
          </Transition>
        </Grid.Column>,
      ];
    });

    return componentArray;
  };

  return (
    <Grid.Column className="pairs-column">
      <Grid columns={2} divided className="pairs">
        {renderPairs().map((comp, i) => (
          <Grid.Row key={i}>{comp}</Grid.Row>
        ))}
      </Grid>
    </Grid.Column>
  );
};

export default PairsColumn;
