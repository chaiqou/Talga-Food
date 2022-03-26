import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";

const App = () => {
  return (
    <>
      <Cart />
      <Header />

      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
