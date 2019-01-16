import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import fishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  loadSampleFishes = () => {
    this.setState({ fishes: fishes });
  };
  addFish = fish => {
    var fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes: fishes });
  };
  addToOrder = key => {
    const order = { ...this.state.order };

    if (order[key]) {
      order[key] = order[key] + 1;
    } else {
      order[key] = 1;
    }

    this.setState({ order: order });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={100} />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                addToOrder={this.addToOrder}
                details={this.state.fishes[key]}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          loadSampleFishes={this.loadSampleFishes}
          addFish={this.addFish}
        />
      </div>
    );
  }
}

export default App;
