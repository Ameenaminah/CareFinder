import { ThreeCircles } from "react-loader-spinner";

export const Spinner = () => {
  return (
    <ThreeCircles
      visible={true}
      height="150"
      width="150"
      color="var(--main-color)"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass="spinner"
      
    />
  );
};
