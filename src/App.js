import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://cdn.crowdpic.net/detail-thumb/thumb_d_CDC14868821FF3F20C77BC8BC15E6355.jpg",
    rating: 4
  },
  {
    id: 2,
    name: "Kimbab",
    image:
      "https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/201806/a8d34579-3939-498b-9254-6e3cfac4bfda.jpg",
    rating: 4
  },
  {
    id: 3,
    name: "Ramen",
    image:
      "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4IqY/image/pWLCAnbTwLA3G7TU8BkrCGurl4A.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "Americano",
    image:
      "https://img.insight.co.kr/static/2018/01/08/700/9582pp72zb162gryb9t4.jpg",
    rating: "5"
  }
]; // food의 object의 배열

// function renderFood(dish) {
//   // console.log(dish);
//   return <Food name={dish.name} picture={dish.image} />
// }

function Food({name, picture, rating}) {
  // console.log(props.fav);
  return <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
}

Food.propTypes = {
  // 내가 얻고싶은 props에대한 설명
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
      {/* {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)} */}
    </div>
  );
}

export default App;
