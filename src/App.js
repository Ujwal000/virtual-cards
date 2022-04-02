import VirtualCards from './components/VirtualCards'

import './App.css'

const cardsList = [
  {
    id: 1,
    title: 'Mix Max',
    description: 'Vishal + Software Subscription',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'Quickbooks',
    description: 'Rajesh + Software Subscription',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'Motion',
    description: 'Ranjith + Software Subscription',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'Pandadoc',
    description: 'Mayanak + Software Subscription',
    className: 'card-4',
  },
  {
    id: 5,
    title: 'Xero',
    description: 'Mayanak + Software Subscription',
    className: 'card-5',
  },
  {
    id: 6,
    title: 'Mookambika',
    description: 'Ranjith + Miscellaneous',
    className: 'card-6',
  },
]

const App = () => (
  <div className="cards-app-container">
    <div className="cards-list-container">
      <h1 className="heading">Virtual Cards</h1>
      <ul className="cards-list">
        {cardsList.map(eachCard => (
          <VirtualCards cardDetails={eachCard} key={eachCard.id} />
        ))}
      </ul>
    </div>
  </div>
)

export default App
