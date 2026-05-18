// import Component from './components/props';
import Component from './components/events';

function App() {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        <h1 className="text-2xl font-bold ">
          Fundamentals Training for TyepScript
        </h1>

        {/* Props */}
        {/* <Component name="Franz" age={31} />
        <Component name="Vincent" age={30}>
          <p>Hello World</p>
        </Component> */}

        {/* State */}
        {/* <Component /> */}

        {/* Events */}
        <Component />
      </div>
    </div>
  );
}

export default App;
