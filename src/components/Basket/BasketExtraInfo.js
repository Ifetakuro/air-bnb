
function BasketExtraInfo(props) {
  return (
    <>
      <div className='basket-extra'>
        <h3>{props.title}</h3>
        <p>{props.info}</p>
      </div>
    </>
  )
}

export default BasketExtraInfo