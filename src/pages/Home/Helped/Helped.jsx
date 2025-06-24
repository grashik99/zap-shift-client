import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import start_people from "../../../assets/brands/start_people 1.png";
import start from "../../../assets/brands/start.png";
import Marquee from "react-fast-marquee";

const Helped = () => {
  return (
    <div className="py-10 border-b-2 border-blue-900 border-dashed">
      <h2 className="font-bold text-xl text-center text-black">
        We've helped thousands of sales teams
      </h2>
      <div className="mt-6">
        <Marquee>
          <div> <img className="h-6 mx-10" src={amazon} alt="Amazon" /> </div>
          <div> <img className="h-6 mx-10" src={amazon_vector} alt="Amazon" /> </div>
          <div> <img className="h-6 mx-10" src={casio} alt="Amazon" /> </div>
          <div> <img className="h-6 mx-10" src={moonstar} alt="Amazon" /> </div>
          <div> <img className="h-6 mx-10" src={start_people} alt="Amazon" /> </div>
          <div> <img className="h-6 mx-10" src={start} alt="Amazon" /> </div>
        </Marquee>
      </div>
    </div>
  );
};
export default Helped;
