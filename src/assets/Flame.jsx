import {motion} from "framer-motion";

export default function Flame(props) {
  // eslint-disable-next-line react/prop-types
  // const {color} = props;
  return (
    <motion.svg
      
      // eslint-disable-next-line react/prop-types
      height={props.size?props.size:"63"}
      viewBox="0 0 45 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.6524 38.4833C41.2145 34.0342 41.9853 31.9162 45 29.4919C39.9467 30.6736 38.5337 32.8593 37.0502 38.4833L36.1186 44.8372C34.6614 52.1095 32.675 55.3038 27.6098 60.7821C33.6343 58.6241 39.1631 54.7278 40.2798 44.8372C40.6524 41.4804 40.6524 38.4833 40.6524 38.4833Z"
        // fill='#733D26'
      />
      <path
        d="M21.8337 21.9391C31.2211 44.3518 30.6531 54.4281 18.8532 63C30.8394 52.39 24.4144 37.3945 17.3005 22.3587C13.3412 13.9903 13.9593 0.592414 29.3494 0C17.4177 6.62786 16.5578 11.8382 21.8337 21.9391Z"
        // fill='#733D26'
      />
      <path
        d="M12.5182 37.8839C7.33782 34.123 3.74012 31.3651 1.64928 25.7754C1.12704 24.3793 0.819183 23.4412 0.651204 22.8195C-1.12522 29.398 0.36727 33.7895 9.72333 40.941C15.4461 45.6316 17.0952 49.2852 17.3005 57.5452C20.2817 51.4909 19.5364 42.979 12.5182 37.8839Z"
        // fill='#733D26'
      />
    </motion.svg>
  );
}