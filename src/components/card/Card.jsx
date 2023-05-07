import './card.css';

export default function Card({img}) {
  return (
    <div className="card">
      <div className="cardImgContainer">
         <img src={img} alt="" className="cardImg"/>
      </div>
    </div>
  )
}
