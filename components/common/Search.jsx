const Search = ({ value = '', setSearch }) => {
  const style = {
    color: '#ccc',
    border: 'solid #ccc',
    borderRadius: '15px',
    padding: '3px',
  }

  const handleChange = (e) => {
    //onSearch(e.target.value)
  }

  return (
    <div className='d-flex' style={style}>
      <i className='bi bi-search'></i>
      <input
        type='search'
        name='searchIntput'
        placeholder='Filter your cards...'
        value={value}
        onChange={(e) => setSearch(e.target.value)}
        style={{ outline: 'none', border: 'none', marginLeft: '5px' }}
      />
    </div>
  )
}

export default Search
