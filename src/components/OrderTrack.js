import '../styles/Baskets.css'


function OrderTrack(props) {
  return (
    <>
      <div className='track-box'>
        <div className='track-logo'>
          <img src={props.img} alt="Bus" />
        </div>
        <div className='track-info'>
          <p>{props.name}</p>
          <span>{props.int}</span>
        </div>
      </div>
    </>
  )
}

export default OrderTrack