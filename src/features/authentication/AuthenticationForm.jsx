import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLogin } from "./useLogin";
import { useSignup } from "./useSignup";
import Flame from "../../assets/Flame";
import Beans from "../../assets/Beans";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useUser } from "./useUser";

export default function AuthenticationForm() {
  const [register, setRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated, isLoading: isLoadingUser } = useUser();
  const { login, loggingIn } = useLogin();
  const { signup, signingUp } = useSignup();

  useEffect(() => {
    if (isAuthenticated) navigate("/menu", { replace: true });
  }, [isAuthenticated, navigate]);

  const isLoading = loggingIn || signingUp;
  async function submitHandler(e) {
    e.preventDefault();
    if (register) {
      signup({ name, email, password });
      setRegister(false);
    } else {
      login({ email, password });
    }
  }

  return (
    <>
      {!isLoadingUser ? (
        <div
          className="relative font-primary flex flex-col justify-center items-center
      text-white rounded-2xl max-w-3xl bg-light-coffee shadow-lg p-4 sm:p-16 w-3/4 m-16 overflow-hidden"
        >
          <div className="absolute z-20 text-2xl font-normal tracking-wide top-0 flex w-full justify-between">
            <button
              className={`w-full p-4  text-center ${
                register && "bg-dark-coffee"
              } duration-200`}
              onClick={() => setRegister(false)}
            >
              <h3>LOG IN</h3>
            </button>{" "}
            <button
              className={`w-full p-4  text-center ${
                !register && "bg-dark-coffee"
              } duration-200`}
              onClick={() => setRegister(true)}
            >
              <h3>SIGN UP</h3>
            </button>
          </div>
          <div className="flex z-20 flex-col p-8 space-y-4 justify-center items-center ">
            <div className="h-full max-w-md">
              <img className="w-full h-full " src="/named-logo.svg" />
            </div>
            {!isLoading ? (
              <form
                onSubmit={submitHandler}
                className="flex flex-col w-full 
        p-4 sm:p-8 space-y-2 sm:space-y-4 justify-center items-end
         bg-dark-coffee rounded-md  shadow-lg
           tracking-wide"
              >
                <p className="text-left w-full font-thin  text-sm">
                  {" "}
                  Email: guest@email.com <br /> Password: qwertyuiop
                </p>
                <AnimatePresence>
                  {register && (
                    <motion.div
                      key="name"
                      initial={{ height: "0", opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: "0", opacity: 0 }}
                      className="flex flex-col w-full justify-center items-start"
                    >
                      <label className="" id="name">
                        Full Name
                      </label>
                      <input
                        className="w-full rounded-sm text-night
                    p-1.5 mt-1 text-lg outline-none px-3"
                        name="name"
                        type="text"
                        autoFocus
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="flex flex-col w-full justify-center items-start">
                  <label className="" id="email">
                    Email Address
                  </label>
                  <input
                    className="w-full rounded-sm text-night
            p-1.5 mt-1 text-lg outline-none px-3"
                    name="email"
                    type="email"
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full justify-center items-start">
                  <label className="" id="password">
                    Password
                  </label>
                  <input
                    className="w-full rounded-sm text-night
            p-1.5 mt-1 text-lg outline-none px-3"
                    name="password"
                    type="password"
                    required
                    value={password}
                    minLength={8}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  className="bg-light-coffee text-lg tracking-wide
           rounded  p-2 px-4 hover:opacity-80 hover:shadow-2xl
            shadow duration-200 active:-translate-y-1"
                >
                  <p className="leading-none pt-1">
                    {isLoading
                      ? "Loading..."
                      : register
                      ? "SIGN UP"
                      : "SIGN IN"}
                  </p>
                </button>
              </form>
            ) : (
              <Spinner />
            )}
          </div>
          <Flame
            className={`absolute bottom-0 ${
              register ? "-right-1/4" : "-left-1/4"
            } z-0 h-4/5 duration-500`}
          />
          <div
            className={`absolute bottom-4  ${
              register ? "left-4 justify-start" : "right-4 justify-end"
            }  flex items-end    w-64 z-10`}
          >
            <Beans size={125} color={"dark-coffee-2"} />
          </div>
        </div>
      ) : (
        <div className="h-screen w-screen flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </>
  );
}
