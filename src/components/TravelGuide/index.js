import './index.css'

const TravelGuide = props => {
  const {details} = props
  const {name, imageUrl, description} = details

  return (
    <li className="list-elements">
      <img src={imageUrl} className="image" alt={name} />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}
export default TravelGuide
