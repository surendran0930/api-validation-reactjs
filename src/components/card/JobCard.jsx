import React, { useEffect, useState } from "react";
// import cardImg from "../assets/images/card img.png";
import cardImg from "../../assets/images/card img.png";
import Button from "../Button/Button";

function JobCard({ data }) {
  // console.log(data, "datassssss");
  // console.log(data.companyName, "jijiijiiji");
  const {
    tittle,
    companyName,
    industry,
    location,
    applyType,
    minimumExperience,
    maximumExperience,
    minimumSalary,
    maximumSalary,
    totalEmployee,
  } = data;
  // console.log(tittle, "hiiiiiiiiiiiiiiiiii");

  return (
    <>

      {/* <Header/> */}

      {/* {datas.map((data) => ( */}
      

      <div
        className="flex gap-2 py-4 px-6 w-[40%] 
                         rounded-[10px] bg-[#FFF] border-[#DADEDF]"
      >
        <div>
          <img src={cardImg} alt="card-img" />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p>{tittle}</p>
            <p>{companyName}-{industry}</p>
            <p>
              {location}, Tamilnadu, India ({applyType})
            </p>
          </div>
          <div>
            <p>Part-Time (9.00 am - 5.00 pm IST)</p>
            <p>
              Experience ({minimumExperience} - {maximumExperience})
            </p>
            <p>
              INR (₹) {minimumSalary} -{maximumSalary}/ Month
            </p>
            <p>total-employe:{totalEmployee}</p>
          </div>
          <div>
            <Button btn="Apply" />
          </div>
        </div>
      </div>
      {/* ))} */}
    </>
  );
}

export default JobCard;
