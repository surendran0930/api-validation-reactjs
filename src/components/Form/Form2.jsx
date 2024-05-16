import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Label from "./Label/Label";
import Input from "./input/Input";

import { useNavigate } from "react-router";

const Form2 = ({
  openForm2,
  getvalues,
  handleChange,
  closeForm2,
  closeForm1,
  setGetValues,
  errors,
  setErrors,
  onClick,callApi

}) => {
  if (!openForm2) {
    return null;
  }
  const [btnState2, setBtnState2] = useState(false);
  
  useEffect(() => {
    if (
      getvalues.minimumExperience !== "" &&
      getvalues.maximumExperience !== "" &&
      getvalues.minimumSalary !== "" &&
      getvalues.maximumSalary !== "" &&
      getvalues.totalEmpolyee !== ""&&
      errors?.minimumExperience === "" &&
      errors?.maximumExperience === "" &&
      errors?.minimumSalary === "" &&
      errors?.maximumSalary === "" &&
      errors?.totalEmpolyee === "" 

    ) {
      setBtnState2(true);
    } else {
      setBtnState2(false);
    }
  }, [
    getvalues.minimumExperience,
    getvalues.maximumExperience,
    getvalues.minimumSalary,
    getvalues.maximumSalary,
    getvalues.totalEmpolyee,
    errors.minimumExperience,
    errors.maximumExperience,
    errors.minimumSalary,
    errors.maximumSalary,
    errors.totalEmpolyee
  ]);

  const postRequest = () => {
    fetch("https://6530d94e6c756603295f269f.mockapi.io/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(getvalues),
    });
  };
  
    //  this function only check back and close form
  const form2Validation = () => {
    // debugger
    let check = false;
    if (getvalues.minimumExperience === 0) {
      setErrors((errors) => ({
        ...errors,
        minimumExperience: true,
      }));
      check = true;
    }
    if (getvalues.maximumExperience === 0) {
      setErrors((errors) => ({
        ...errors,
        maximumExperience: true,
      }));
      check = true;
    }
    if (getvalues.minimumSalary === 0) {
      setErrors((errors) => ({
        ...errors,
        minimumExperience: true,
      }));
      check = true;
    }
    if (getvalues.maximumSalary === 0) {
      setErrors((errors) => ({
        ...errors,
        minimumExperience: true,
      }));
      check = true;
    }
    if (getvalues.minimumExperience === 0) {
      setErrors((errors) => ({
        ...errors,
        minimumExperience: true,
      }));
      check = true;
    }
    if (getvalues.totalEmpolyee === 0) {
      setErrors((errors) => ({
        ...errors,
        totalEmpolyee: true,
      }));
      check = true;
    }
    // if (getvalues.applyType === 0) {
    //   setErrors2((errors) => ({
    //     ...errors,
    //     applyType: true,
    //   }));
    //   check = true;
    // }
    return check;
  };

  // this function error vaildation    
  const validationForm2 = () => {
    if (
      getvalues.minimumExperience == 0 ||
      getvalues.maximumExperience == "" ||
      Number(getvalues.minimumExperience) >= Number(getvalues.maximumExperience)
    ) {
    
      return true;
    }
 
    if (
      getvalues.minimumSalary == 0 ||
      getvalues.maximumSalary == "" ||
      Number(getvalues.minimumSalary) >= Number(getvalues.maximumSalary)
    ) {
      return true;
    }
    // if (getvalues.maximumExperience == 0) {
    //   return true;
    // }
    if (getvalues.totalEmpolyee == 0) {
      return true;
    }

    if (getvalues.applyType == 0) {
      return true;
    } else {
      return false;
    }
  }; 

  // const refresh=()=>{
  //   console.log("window refresh done");
  //   window.location.reload(true)
  // }

  return (
    <div onClick={onClick} className="w-[100%] flex  h-[100vh] items-center  justify-center fixed top-1 right-1 z-10">
      <div onClick={(e)=>e.stopPropagation()}  className="w-[577px] flex justify-center p-8 bg-[#FFF] rounded-xl border-[1px] border-[#E6E6E6]">
        <div className="w-[513px] flex flex-col gap-6">
          <div className="flex justify-between">
            <div>
              <p data-cy="cy-header-text-form2">Create a job</p>
            </div>
            <div>
              <p>Step 2</p>
            </div>
          </div>
          <div className="flex justify-center gap-6 w-[100%] ">
            <div className="w-[50%] flex flex-col gap-1">
              <div>
                <Label id="experienc_mine" label="Experience " />
              </div>
              <div>
                <Input
                  id="experience_min"
                  placeholder="Minimum"
                  onChange={handleChange}
                  name="minimumExperience"
                  // value={getValues.minimumExperience}
                  type="number"
                  // errValidation={"Enter mininmum exprenice"}
                  errValidation={errors?.minimumExperience}
                  datacy="cy-input-experience-min"
                />
              </div>
            </div>
            <div className="w-[50%] flex flex-col justify-end">
              {/* <Label id="tol_employe" label=" "/> */}
              <Input
                id="max-exp"
                placeholder="Maximum"
                onChange={handleChange}
                name="maximumExperience"
                type="number"
                // errValidation={"Enter Maximum Experience"}
                errValidation={errors?.maximumExperience}
                datacy="cy-input-experience-max"

              />
            </div>
          </div>
          <div className="flex justify-center gap-6 w-[100%]">
            <div className="w-[50%] flex flex-col gap-1">
              <Label id="min_sal" label="Salary" />
              <Input
                id="min_sal"
                placeholder="Minimum"
                onChange={handleChange}
                name="minimumSalary"
                type="number"
                // errValidation={"Enter Minimum Empolyee"}
                errValidation={errors?.minimumSalary}
                datacy="cy-input-salary-min"

              />
            </div>
            <div className="w-[50%]  flex flex-col justify-end">
              {/* <Label id="tol_employe" label="Total employee"/> */}
              <Input
                id="max-sal"
                placeholder="Maximum"
                onChange={handleChange}
                name="maximumSalary"
                type="number"
                // errValidation={"Enter Total Empolyee"}
                errValidation={errors?.maximumSalary}
                datacy="cy-input-salary-max"

              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Label id="tol_employe" label="Total employee" />
            </div>
            <div>
              <Input
                id="tol_employe"
                placeholder="ex. 100"
                onChange={handleChange}
                name="totalEmpolyee"
                type="number"
                // errValidation={"Enter Total Empolyee"}
                errValidation={errors?.totalEmpolyee}
                datacy="cy-input-total-employee"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <Label label="Apply Type" />
            </div>
            <div className="flex gap-4">
              <div className=" flex gap-1">
                <div>
                  <Input
                    type="radio"
                    name="applyType"
                    value="Quick Apply"
                    onChange={handleChange}
                    id="quickApply"
                    checked={getvalues.applyType === "Quick Apply"}
                  />
                </div>
                <div>
                  <Label label="Quick Apply"  id="quickApply" />
                </div>
              </div>
              <div className="flex gap-1">
                <div>
                  <Input
                    type="radio"
                    name="applyType"
                    onChange={handleChange}
                    checked={getvalues.applyType === "External Apply"}
                    value="External Apply" 
                    id="externalApply"
                  />
                </div>
                <div>
                  <Label label="External Apply"  id="externalApply" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <Button btn="Back" onClick={closeForm2} />
            </div>

            <div>
              {console.log(btnState2, "hihii")}
              <Button
                btn="Submit"
                dataCy="cy-submit-button"
                disabled={validationForm2()}
                state={btnState2 ? "" : "primary"}
                onClick={() => {
 if (form2Validation() === false) {
                   
                    console.log("helooooo");
                    callApi(true)
                    closeForm2(false);
                    closeForm1(false);
                    postRequest();
                    setGetValues({
                      tittle: "",
                      companyName: "",
                      industry: "",
                      location: "",
                      remoteType: "",
                      minimumExperience: "",
                      maximumExperience: "",
                      maximumSalary: "",
                      minimumSalary: "",
                      totalEmpolyee: "",
                      applyType: "",
                    });
                    // refresh()
                    
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form2;
