import React, { Component } from 'react';

class Table extends Component {

  render() {
    const { tencoin, list } = this.props;
    const coinImageLink = list.BaseImageUrl;
    const symbolList = [];
    tencoin.map(coin =>
      symbolList.push(coin.symbol)
    );

    var obj = list.Data;

    const imageList = {};

    for (var key in obj) {
      if (symbolList.includes(obj[key].Symbol)) {
        var sym =  obj[key].Symbol;
        var img = coinImageLink + obj[key].ImageUrl.toString();
        imageList[sym] = img;
      }
    }


    return (
      <div className="col s12">
        <table className="striped">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price ($USD)</th>
              <th>% Change 1H</th>
              <th>% Change 24H</th>
              <th>% Change 7D</th>
            </tr>
          </thead>
          <tbody>
          { tencoin.map(coin =>
              <tr key={coin.name}>
                <td><img src={imageList[coin.symbol]} alt="coin"/></td>
                <td>{coin.name}</td>
                <td>{coin.symbol}</td>
                <td>{coin.price_usd}</td>
                <td>{coin.percent_change_1h}</td>
                <td>{coin.percent_change_24h}</td>
                <td>{coin.percent_change_7d}</td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
