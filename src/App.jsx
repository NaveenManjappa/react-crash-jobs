const App = () => {
  const name = 'John';
  const x = 10;
  const y = 20;
  const names = ['Brad','Mary','Joe'];
  const loggedIn = true;

  const styles = {
    color:'red',
    fontSize:'55px'
  }

  return (
    <>
      <div className='text-6xl'>App</div>
      <p style={styles}>Hello { name }</p>
      <p>The sum of {x} and {y} is {x+y}</p>
      <ul>
        {names.map((el,index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>

        { loggedIn && <h1>Hello Member</h1>}
    </>
  );
};

export default App