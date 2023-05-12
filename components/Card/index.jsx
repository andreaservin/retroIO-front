const Card = ({ title, color, children }) => {
  return (
    <div style={{ backgroundColor: '#EEEEEE' }}>
      <div style={{ backgroundColor: color, height: '5px' }}></div>
      <div className="p-2">
        <h5 className='fw-bold'>{title}</h5>
        {children}
      </div>
    </div>
  )
}

export default Card
