import React, { Component } from 'react';
import axios from 'axios';

import CoinCard from '../components/coin_card_list/coin_card_list';
//import Table from '../components/coin_table/coin_table';


class CoinChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cryptos: [],
      crypto: {},
      numField: '12'
    };

    this.onNumChange = this.onNumChange.bind(this);
  };

  onNumChange(event) {
    this.setState({ numField: event.target.value });
  }

  componentDidMount() {
    this.getTopCoinData();
    this.addCoinData();
  };

  getTopCoinData() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=12')
      .then(res => {
        const cryptos = res.data;
        this.setState({cryptos: cryptos});
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  addCoinData() {
    axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
    .then(res => {
      const crypto = res.data;
      this.setState({crypto: crypto});
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    return (
      <div>
        <div className="col s6 offset-s3">
          <div className="intro-line"><h1> Here You See the Top Ten Coins</h1></div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="number-form">
              <div className="number-label">
                Choose how many coins you want to see
              </div>
              <div className="input-field col s12">
                <form>
                  <input onChange={this.onNumChange} className="number-cards" value={this.state.numField} id="num_coins" type="number" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
        { this.state.cryptos && this.state.crypto &&
            <CoinCard
              tencoin = {this.state.cryptos}
              list = {this.state.crypto}
            />
        }
        </div>
      </div>
    )
  }
};



export default CoinChart;
