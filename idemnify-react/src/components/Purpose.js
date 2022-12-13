import RobCoulter from "./images/RobCoulter-2.jpg";
import PurposeImage from "./images/purpose_image.png";
import "../App.css";


const Purpose = () => {
  return (
    <div>
      <div className="container flex lg mx-auto overflow-x-hidden items-center justify-center bg-white">
        <div className="w-1/2 h-auto  md:block bg-cover bg-center opacity-100 mt-0 text-sm">
          <p className="mt-10">
            Last year Indemnity spent 58.2% of its revenue on call time looking after claims under $500.  
          </p>
          <br></br>
          <p>
            Automation and AI are the future of insurance. We are building an AIn machine that will be able to make decisions on claims in seconds.  This is a 2 step programme and in order to gather data a new system has been designed.  This system is called Quikclaim.
          </p>
          <br></br>
          <p>
            Your involvement is critical as we streamline our claim process serving our 2.1 Billion customers globally.
          </p>

          {/* <img src={RobsSignature} alt="pic" /> */}
          <h3>
            <strong>Rob Coulter</strong> CEO
          </h3>
        </div>

        <div className="w-1/2 h-auto hidden md:block bg-cover bg-center sm:w-1/2 opacity-100 px-6 py-2 mt-10 mb-10">
          <div
            className="flex flex-col 
                    items-center justify-center"
          >
            <img src={PurposeImage} alt="pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
