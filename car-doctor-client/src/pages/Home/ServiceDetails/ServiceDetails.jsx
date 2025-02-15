import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
    const service = useLoaderData();
    const {img, title, price, description} = service;
    console.log(service);

  return (
    <div>
        <div>
            {/* <img src={img} alt="" /> */}
        </div>
    </div>
  );
};

export default ServiceDetails;
