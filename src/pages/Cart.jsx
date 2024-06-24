import { useDispatch, useSelector } from "react-redux";
import CartItemList from "../components/cart/CartItemList";
import { useNavigate } from "react-router";
import { clearCart } from "../store";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  return (
    <div
      className="w-screen min-h-screen bg-cover flex justify-center pt-32 p-4 items-center font-primary tracking-wide"
      style={{ backgroundImage: "url(/wall.jpg)" }}
    >
      <div
        className="flex flex-col justify-center items-center rounded min-h-[400px]
       bg-black/90 p-2 py-4 sm:p-8 sm:py-16 w-full space-y-8 max-w-4xl md:p-10"
      >
        <h2 className="sm:text-left text-center sm:self-start text-white/95 capitalize border-b-2 tracking-wide text-3xl sm:ml-2   md:text-5xl">
          your cart
        </h2>
        <div
          className={`flex flex-col lg:${
            cart.totalQuantity > 0 && "flex-row lg:space-x-4 lg:items-start"
          }  justify-center  items-center w-full`}
        >
          {cart.totalQuantity > 0 ? (
            <CartItemList cart={cart} />
          ) : (
            <p className="text-white/80  m-8 mb-16">Your Cart is Empty.</p>
          )}
          <div className="flex flex-col w-[250px] mt-8 justify-center space-y-1 lg:space-y-2 text-white/80 text-lg items-center">
            {cart.totalQuantity > 0 && (
              <button
                className="p-2 active:translate-y-0.5 hover:bg-dark-coffee
           rounded-sm w-full tracking-widest duration-200 bg-light-coffee "
                onClick={() => {
                  dispatch(clearCart({cart}));
                  navigate("/menu");
                }}
              >
                CLEAR ALL
              </button>
            )}
            <button
              className="p-2 active:translate-y-0.5 hover:bg-dark-coffee
           rounded-sm w-full tracking-widest duration-200 bg-light-coffee "
              onClick={() => navigate("/menu")}
            >
              BACK TO MENU
            </button>
            <button
              className="p-2 active:translate-y-0.5 hover:bg-dark-coffee
           rounded-sm w-full tracking-widest duration-200  bg-coffee "
              onClick={() => navigate("/order/new")}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

