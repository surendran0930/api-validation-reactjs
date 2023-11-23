import React, { useEffect, useState } from "react";
import Input from "./input/Input";
import Label from "./Label/Label";
import Button from "../Button/Button";
import Form2 from "./Form2";

const Form1 = ({
  form1Open,
  getvalues,
  handleChange,
  closeForm1,
  openForm2,
  
  errors,
  setErrors,
  
  onClick,
}) => {
  if (!form1Open) {
    return null;
  }
  console.log("valuesss", errors, getvalues);
  // console.log(disableButton);
  
  const [btnState, setBtnState] = useState(false);
  useEffect(() => {
    if (
      getvalues.tittle !== "" &&
      getvalues.companyName !== "" &&
      getvalues.industry !== "" &&
      getvalues.location !== "" &&
      getvalues.remoteType !== "" &&
      errors?.companyName === "" &&
      errors?.tittle === "" &&
      errors?.industry === "" &&
      errors?.location === "" &&
      errors?.remoteType===""
    ) {
      console.log("true btn");

      setBtnState(true);
    } else {
      console.log("false btn");
      setBtnState(false);
    }
  }, [
    getvalues.tittle,
    getvalues.companyName,
    getvalues.industry,
    getvalues.location,
    getvalues.remoteType,
    errors?.companyName,
    errors?.tittle,
    errors?.industry,
    errors?.location,
    errors?.remoteType,
  ]);
  // console.log(btnState,"check");

                       // next from validation
  const errorValidation = () => {
    console.log(getvalues);

    let check = false;
    if (getvalues.tittle === "") {
      setErrors((errors) => ({
        ...errors,
        tittle: true,
      }));
      check = true;
    }

    if (getvalues.companyName === "") {
      setErrors((errors) => ({
        ...errors,
        companyName: true,
      }));
      check = true;
    }

    if (getvalues.industry === "") {
      setErrors((errors) => ({
        ...errors,
        industry: true,
      }));
      check = true;
    }

    if (getvalues.location === "") {
      setErrors((errors) => ({
        ...errors,
        location: true,
      }));
      check = true;
    }

    if (getvalues.remoteType === "") {
      setErrors((errors) => ({
        ...errors,
        remoteType: true,
      }));
      check = true;
    }
    return check;
  };

      // ********* // button disabled validation
  const validationForm1 = () => {
    if(errors.tittle== false&&!errors.companyName&&!errors.industry&&!errors.location&&!errors.remoteType){
return false;
    }
    if (getvalues.tittle == "" && getvalues.companyName=="" && getvalues.industry=="" && getvalues.location=="" && getvalues.remoteType=="") {
      // console.log(getvalues.length);
      return true;
      // return
    }
if (getvalues.tittle == "" || getvalues.companyName.length < 3) {
    return true;
  }
    if (getvalues.companyName == "" || getvalues.companyName.length < 3) {
      return true;
    }
    if (getvalues.industry == "" || getvalues.industry.length < 3) {
      return true;
    }
    if (getvalues.location == "" || getvalues.location.length < 3) {
      return true;
    }
    if (getvalues.remoteType == "" || getvalues.remoteType.length < 3) {
      return true;}
     else return false;
  };

  // modal exceed function

  const modalExit =()=>{
    
      secOpenForm({ ...openForm, form1: false, form2: false })
    
  }

  return (
    <div
      onClick={onClick}
      className=" w-[100%] flex h-[100vh] items-center justify-center fixed top-1 right z-10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[577px]  flex justify-center p-8 bg-[#FFF] rounded-xl border-[1px] border-[#E6E6E6] "
      >
        <div className="w-[513px] flex flex-col gap-6">
          <div className="flex justify-between ">
            <div>
              <p>Create a job</p>
            </div>
            <div>
              <p>Step 1</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <Label id="job_tittle" label="Job title*" />
            </div>
            <div>
              <Input
                type="text"
                id="job_tittle"
                value={getvalues.tittle}
                placeholder="ex. UX UI Designer"
                onChange={handleChange}
                name="tittle"
                errValidation={errors?.tittle}
                errorStates={errors?.tittle}
              />
            </div>
            {/* {console.log(errors)}
            {errors.tittle === true ? (
              <p className="text-red-600">Title required</p>
            ) : (
              <></>
            )} */}
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <Label id="com_name" label="Company name*" />
            </div>
            <div>
              <Input
                type="text"
                id="com_name"
                placeholder="ex. Google"
                onChange={handleChange}
                name="companyName"
                value={getvalues.companyName}
                errValidation={errors?.companyName}
                errorStates={errors?.companyName}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <Label id="industry" label="Industry*" />
            </div>
            <div>
              <Input
                type="text"
                id="industry"
                placeholder="ex. Information Technology "
                onChange={handleChange}
                value={getvalues.industry}
                name="industry"
                errValidation={errors?.industry}
                errorStates={errors?.industry}
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-[50%] flex flex-col gap-1">
              <div>
                <Label id="location" label="Location*" />
              </div>
              <div>
                <Input
                  type="text"
                  id="location"
                  placeholder="ex.Chennai "
                  onChange={handleChange}
                  value={getvalues.location}
                  name="location"
                  errValidation={errors?.location}
                  // errorStates={errors?.location}
                />
              </div>
            </div>
            <div className="w-[50%] flex flex-col gap-1">
              <div>
                <Label id="remote_type" label="Remote type*" />
              </div>
              <div>
                <Input
                  type="text"
                  id="remote_type"
                  placeholder="ex. In-office "
                  onChange={handleChange}
                  value={getvalues.remoteType}
                  name="remoteType"
                  errValidation={errors?.remoteType}
                  errorStates={errors?.remoteType}
                />
                {/* {errors.remoteType === true ? (
                  <p className="text-red-600">Enter Correct Type</p>
                ) : (
                  <></>
                )} */}
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <Button type="click" btn="Back" onClick={closeForm1} />
            </div>
            <div>
              <Button
                type="click"
                btn="Next"
                disabled={validationForm1()}
                state={btnState ? "" : "primary"}
                onClick={() => {
                  if (errorValidation() === false) {
                    openForm2(true);
                    console.log("jiiii");
                  } else {
                    errorValidation();
                    console.log("hiiiiiiiiii");
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
export default Form1;
