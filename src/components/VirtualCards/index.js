import './index.css'

const VirtualCards = props => {
  const {cardDetails} = props
  const {title, description, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <button className="sub-button" type="button">
        SUBSCRIPTION
      </button>
      <p className="text">Spent</p>
      <p className="text">Available to spent</p>
    </li>
  )
}

export default VirtualCards
