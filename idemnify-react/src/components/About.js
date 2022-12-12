import RobCoulter from "./images/RobCoulter-2.jpg";
import RobsSignature from "./images/RobsSignature.jpg";
import "../App.css";
const Home = (props) => {
  return (
    <div>
      <div className="container flex lg mx-auto overflow-x-hidden items-center justify-center bg-white">
        <div className="w-1/2 h-auto  md:block bg-cover bg-center opacity-100 mt-0 text-sm">
          <p className="mt-10">
            <strong>Idemnify</strong> are an insurance company like no other.
            Most insurance companies measure risk with a broad stroke using
            factors such as age, location and history. Here at{" "}
            <strong>Idemnify</strong>....we put you in the centre. We tailor
            your policy based on metrics from smart technology. We take into
            account specific location, activity and health and design a policy
            tailored to you. Your needs are as unique as you are, so we will
            design a bespoke policy for you.
          </p>
          <br></br>
          <p>
            When I was doing my around the world adventure tour in 2019 I had
            great difficulty in getting an insurance policy to match my needs.
            Thats when I decided to create my own company. I sold my portfolio
            of overseas properties and cashed in my investment bonds and
            launched <strong>Idemnify</strong>.{" "}
          </p>
          <br></br>
          <p>
            Now, we are trusted by over 2.1 Billion customers globally....we
            hope you will join us for our bespoke insurance package. Never let
            risk stop you,
          </p>

          <img src={RobsSignature} alt="pic" />
          <h3>
            <strong>Rob Coulter</strong> CEO
          </h3>
        </div>

        <div className="w-1/2 h-auto hidden md:block bg-cover bg-center sm:w-1/2 opacity-100 px-6 py-2 mt-10 mb-10">
          <div
            className="flex flex-col 
                    items-center justify-center"
          >
            <img src={RobCoulter} alt="pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
