const App = () => {
  const name = 'John';
  const x = 10;
  const y = 20;
  const names = ['Brad','Mary','Joe'];
  return (
    <>
      <div className='text-6xl'>App</div>
      <p>Hello { name }</p>
      <p>The sum of {x} and {y} is {x+y}</p>
      <ul>
        {names.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </>
  );
};

export default App