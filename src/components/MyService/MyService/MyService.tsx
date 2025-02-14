"use client";

import { useEffect, useState } from "react";
import ServiceBox from "../ServiceBox/ServiceBox";
import { TService } from "@/utils/types/globalTypes";

const MyService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/service.json");
      const data = await res.json();
      setServices(data);
    };
    fetchData();
  }, []);

  // console.log("Services: ", services);
  return (
    <div>
      <h1 className="text-2xl font-bold pText mb-10">My Service</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service: TService, idx: number) => (
          <ServiceBox key={idx} service={service} />
        ))}
      </div>
    </div>
  );
};

export default MyService;
