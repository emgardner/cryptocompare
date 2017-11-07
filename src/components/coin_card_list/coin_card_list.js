import React, { Component } from 'react';

class CoinCard extends Component {

  render() {
    const { tencoin, list } = this.props;
    const coinImageLink = list.BaseImageUrl;
    const coinInfoLink = list.BaseLinkUrl;
    const symbolList = [];
    tencoin.map(coin =>
      symbolList.push(coin.symbol)
    );

    var obj = list.Data;

    const imageList = {};
    const urlList = {};

    for (var key in obj) {
      if (symbolList.includes(obj[key].Symbol)) {
        var sym =  obj[key].Symbol;
        var img = coinImageLink + obj[key].ImageUrl.toString();
        imageList[sym] = img;
      }
    }

    for (var key in obj) {
      if (symbolList.includes(obj[key].Symbol)) {
        var sym =  obj[key].Symbol;
        var url = coinInfoLink + obj[key].Url.toString();
        urlList[sym] = url;
      }
    }

    return (
      <div>
      <div className="row">
      { tencoin.map(coin =>
          <div className="col s12 m10 l4 xl3" key={coin.name}>
            <div className="card large">
              <div className="card-image">
                <img src={imageList[coin.symbol]} alt="coin" className="responsive-img"/>
                <span className="card-title">{coin.symbol}</span>
              </div>
              <div className="card-content">
                <p>{coin.name}</p>
                <p>${coin.price_usd}</p>
                <p>1 Hour Change: {coin.percent_change_1h}%</p>
                <p>24 Hour Change: {coin.percent_change_24h}</p>
                <p>1 week Change: {coin.percent_change_7d}</p>
              </div>
              <div className="card-action">
                <a href={urlList[coin.symbol]}>See More about {coin.name}</a>
                <button>Delete</button>
              </div>
            </div>
          </div>
        )
      }
      </div>
      </div>
    );
  }
}

export default CoinCard;
