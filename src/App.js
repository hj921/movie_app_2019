import React from 'react';

function Food({name, picture}) {
  // console.log(props.fav);
  return <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://cdn.crowdpic.net/detail-thumb/thumb_d_CDC14868821FF3F20C77BC8BC15E6355.jpg"
  },
  {
    name: "Kimbab",
    image:
      "https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/201806/a8d34579-3939-498b-9254-6e3cfac4bfda.jpg"
  },
  {
    name: "Ramen",
    image:
      "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4IqY/image/pWLCAnbTwLA3G7TU8BkrCGurl4A.jpg"
  },
  {
    name: "Americano",
    image:
      "https://img.insight.co.kr/static/2018/01/08/700/9582pp72zb162gryb9t4.jpg"
  }
]; // food의 object의 배열

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
