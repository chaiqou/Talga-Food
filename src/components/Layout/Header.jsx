import MealsImg from "../../assets/meals.jpg";
import HeaderButton from "./HeaderButton";

const Header = ({ showCartHandler }) => {
  return (
    <>
      <header
        className="flex text-white justify-between items-center fixed top-0 left-0 w-full h-[5rem] 
      bg-yellow-900 py-0 px-[10%] z-10 shadow-normal "
      >
        <div>Talga Meals</div>
        <HeaderButton showCartHandler={showCartHandler} />
      </header>
      <div className="w-full z-0 overflow-hidden h-[22rem]">
        <img
          className="w-full h-full object-cover"
          alt="meals"
          src={MealsImg}
        />
      </div>
    </>
  );
};

export default Header;
