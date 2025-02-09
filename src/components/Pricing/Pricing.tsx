import "./Pricing.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const Pricing = () => {
  return (
    <div
      className="section-pricing -mb-[150px] md:mb-[350px]  md:w-full lg:w-[1000px] mx-auto h-auto md:h-[550px]"
      id="pricing"
    >
      <h1 className="text-2xl font-bold pText mb-10">Pricing</h1>
      <div className="card-item">
        <div className="card card-one">
          <div className="card__side card__side--front">
            <div className="card__picture card__picture--1">&nbsp;</div>
            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--1">
                Basic <br />
                Package
              </span>
            </h4>
            <div className="card__details">
              <ul>
                <li>
                  <CloseIcon className=" font-bold  text-[#40DECF] text-2xl" />
                  Revisions
                </li>
                <li>
                  <CloseIcon className="  text-[#40DECF]  font-bold text-2xl" />
                  Server upload
                </li>
                <li>
                  <CheckIcon className="text-purple-700 font-bold text-2xl" />
                  Responsive design
                </li>
                <li>
                  <CheckIcon className="text-purple-700 font-bold text-2xl " />
                  Basic maximum 1 page
                </li>
                <li>
                  <CheckIcon className="text-purple-700 font-bold text-2xl " />
                  Browser compatibility
                </li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-1">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">$99</p>
              </div>
              <a href="" className="btn btn-white">
                Contact me!
              </a>
            </div>
          </div>
        </div>
        <div className="card card-two">
          <div className="card__side card__side--front">
            <div className="card__picture card__picture--2">&nbsp;</div>
            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--2">
                Standard <br />
                Package
              </span>
            </h4>
            <div className="card__details">
              <ul>
                <li>
                  <CloseIcon className="font-bold  text-[#40DECF] text-2xl" />
                  Revisions
                </li>
                <li>
                  <CheckIcon className="text-purple-700 font-bold text-2xl " />
                  Server upload
                </li>
                <li>
                  <CheckIcon className="text-purple-700 font-bold text-2xl " />
                  Responsive design
                </li>
                <li>
                  <CheckIcon className="text-purple-700 font-bold text-2xl " />
                  Standard maximum 2 page
                </li>
                <li>
                  <CheckIcon className="text-purple-700 font-bold text-2xl " />
                  Browser compatibility
                </li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-2 ">
            <div className="card__cta ">
              <div className="card__price-box ">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">$199</p>
              </div>
              <div>
                <button className="btn ">Contact me!</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-three">
          <div className="card__side card__side--front">
            <div className="card__picture card__picture--3">&nbsp;</div>
            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--3">
                Premium <br />
                Package
              </span>
            </h4>
            <div className="card__details">
              <ul>
                <li>
                  <CheckIcon className="text-purple-700 font-bold text-2xl " />3
                  Revisions
                </li>
                <li>
                  <CheckIcon className="text-purple-700 font-bold text-2xl " />
                  Server upload
                </li>
                <li>
                  <CheckIcon className="text-purple-700 font-bold text-2xl " />
                  Responsive design
                </li>
                <li>
                  <CheckIcon className="text-purple-700 font-bold text-2xl " />
                  Premium maximum 3 page
                </li>
                <li>
                  <CheckIcon className="text-purple-700 font-bold text-2xl " />
                  Browser compatibility
                </li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-3">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">$299</p>
              </div>
              <a href="" className="btn btn-white">
                Contact me!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
