import { useState, useEffect } from "react";

import "./App.css";

import Button from "./components/Button/Button";
import JobCard from "./components/card/JobCard";
import Form1 from "./components/Form/Form1";
import Form2 from "./components/Form/Form2";

function App() {
  const [callApi,setCallApi]=useState(false)
  const [datas, setDatas] = useState([]);
  const [nameValue, setNameValue] = useState({ name: "", value: "" });
  const [openForm, secOpenForm] = useState({ form1: false, form2: false });

  // const Navigate = useNavigate();
  useEffect(() => {
    fetch("https://6530d94e6c756603295f269f.mockapi.io/jobs").then((res) => {
      res.json().then((res) => {
        // console.log(res);
        setDatas(res);
        // console.log(user, "hello");
      });
    });
  }, [datas,callApi]);

  const [getvalues, setGetValues] = useState({
    tittle: "",
    companyName: "",
    industry: "",
    location: "",
    remoteType: "",
    minimumExperience: 0,
    maximumExperience: 0,
    maximumSalary: 0,
    minimumSalary: 0,
    totalEmpolyee: 0,
    applyType: "",
  });

  const [errors, setErrors] = useState({
    tittle: false,
    companyName: false,
    industry: false,
    location: false,
    remoteType: false,
    minimumExperience: false,
    maximumExperience: false,
    maximumSalary: false,
    minimumSalary: false,
    totalEmpolyee: false,
    applyType: false,
  });

  const openForm1 = () => {
    secOpenForm({ ...openForm, form1: true, form2: false });
    // console.log('Open form1')
  };

  const closeForm1 = () => {
    secOpenForm({ ...openForm, form1: false, form2: false });
    // console.log('closeForm1 form1 successfully')
  };

  const openForm2 = () => {
    secOpenForm({ ...openForm, form1: false, form2: true });
  };

  const closeForm2 = () => {
    secOpenForm({ ...openForm, form1: true, form2: false });
  };

  const handleChange = (e) => {
    const regex = /^[A-Za-z]+$/;
    const result = regex.test(e.target.value);
    console.log(result);
    const { name, value } = e.target;

    setGetValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setNameValue({ name: name, value: value });
  };

  useEffect(() => {
    errorHandeling();
  }, [getvalues]);
const handleCallApi=(data)=>{
setCallApi(data)
}
  const errorHandeling = () => {
    let { name, value } = nameValue;
    const regex = /^[A-Za-z\s]+$/;

    switch (name) {
      case "tittle":
        if (value) {
          setErrors((errors) => ({
            ...errors,
            tittle: regex.test(value) ? "" : "Enter Characters Only",
            // value.length <= 2 || value.length > 10 ? "min length 3-10" : "",
          }));
        } else {
          setErrors((errors) => ({
            ...errors,
            tittle: "Enter Tittle Name",
          }));
        }
        break;
      case "companyName":
        // console.log(value, "hi");
        if (value) {
          setErrors((errors) => ({
            ...errors,
            // companyName:
            // value.length <= 2 || value.length > 13 ? "min length 5-13" : "",
            companyName: regex.test(value) ? "" : "Enter Characters Only",
          }));
        } else {
          // console.log(value, "else");
          setErrors((errors) => ({
            ...errors,
            companyName: "Enter Company Name",
          }));
        }
        break;
      case "industry":
        // console.log(value, "hi");
        if (value) {
          setErrors((errors) => ({
            ...errors,
            // industry:
            // value.length <= 2 || value.length > 20 ? "min length 5-13" : "",
            industry: regex.test(value) ? "" : "Enter Characters Only",
          }));
        } else {
          // console.log(value, "else");
          setErrors((errors) => ({
            ...errors,
            industry: "Enter Industry Name",
          }));
        }
        break;

      case "location":
        // console.log(value, "hi");
        if (value) {
          setErrors((errors) => ({
            ...errors,
            // location:
            // value.length <= 2 || value.length > 15 ? "min length 5-15" : "",
            location: regex.test(value) ? "" : "Enter Characters Only",
          }));
        } else {
          // console.log(value, "else");
          setErrors((errors) => ({
            ...errors,
            location: "Enter Location Name",
          }));
        }
        break;
      case "remoteType":
        // console.log(value, "hi");
        if (value) {
          setErrors((errors) => ({
            ...errors,
            // remoteType:
            // value.length <= 2 || value.length > 15 ? "min length 5-15" : "",
            remoteType: regex.test(value) ? "" : "Enter Characters Only",
          }));
        } else {
          // console.log(value, "else");
          setErrors((errors) => ({
            ...errors,
            remoteType: "Enter Remote Name",
          }));
        }
        break;

      // ++++++++++++++++++======= min max  experience  validation

      case "minimumExperience":
      case "maximumExperience":
        if (
          getvalues.minimumExperience === "" ||
          getvalues.minimumExperience == 0
        ) {
          console.log("sadsadsad", getvalues.minimumExperience);
          setErrors((errors) => ({
            ...errors,
            minimumExperience: "Enter minimumExperience",
          }));
        } else if (
          getvalues.maximumExperience === "" ||
          getvalues.maximumExperience == 0
        ) {
          setErrors((errors) => ({
            ...errors,
            maximumExperience: "Enter maximumExperience",
          }));
        } else if (
          Number(getvalues.minimumExperience) >=
          Number(getvalues.maximumExperience)
        ) {
          setErrors((errors) => ({
            ...errors,
            minimumExperience: "min should be less than max",
            maximumExperience: "max should be greater than min",
          }));
        } else {
          setErrors((errors) => ({
            ...errors,
            minimumExperience: "",
            maximumExperience: "",
          }));
        }
        break;

      // ++++++++++++++++++======= min max  experience  validation

      case "minimumSalary":
      case "maximumSalary":
        if (getvalues.minimumSalary === "" || getvalues.minimumSalary == 0) {
          console.log("sadsadsad", getvalues.minimumExperience);
          setErrors((errors) => ({
            ...errors,
            minimumSalary: "Enter minimumSalary",
          }));
        } else if (
          getvalues.maximumSalary === "" ||
          getvalues.maximumSalary == 0
        ) {
          setErrors((errors) => ({
            ...errors,
            maximumSalary: "Enter maximumSalary",
          }));
        } else if (
          Number(getvalues.minimumSalary) >= Number(getvalues.maximumSalary)
        ) {
          setErrors((errors) => ({
            ...errors,
            minimumSalary: "min should be less than max",
            maximumSalary: "max should be greater than min",
          }));
        } else {
          setErrors((errors) => ({
            ...errors,
            minimumSalary: "",
            maximumSalary: "",
          }));
        }
        break;
      case "totalEmpolyee":
        // console.log(value, "hi");
        if (value) {
          setErrors((errors) => ({
            ...errors,
            totalEmpolyee: "",
            // value.length <= 2 || value.length > 15 ? "min length 5-15" : "",
          }));
        } else {
          // console.log(value, "else");
          setErrors((errors) => ({
            ...errors,
            totalEmpolyee: "Enter totalEmpolyee ",
          }));
        }
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <Form1
                onClick={() =>{

                  secOpenForm({ ...openForm, form1: false, form2: false })
                  setGetValues({ tittle: "",
                  companyName: "",
                  industry: "",
                  location: "",
                  remoteType: "",
                  minimumExperience: 0,
                  maximumExperience: 0,
                  maximumSalary: 0,
                  minimumSalary: 0,
                  totalEmpolyee: 0,
                  applyType: "",

                  })
                }
                 
                  
                 
                }
                form1Open={openForm.form1}
                getvalues={getvalues}
                handleChange={handleChange}
                closeForm1={closeForm1}
                openForm2={openForm2}
                // validation={validation}
                errors={errors}
                setErrors={setErrors}
              />
              <Form2
             callApi={handleCallApi}
                onClick={() =>{

                  secOpenForm({ ...openForm, form1: false, form2: false })
                  setGetValues({ tittle: "",
                  companyName: "",
                  industry: "",
                  location: "",
                  remoteType: "",
                  minimumExperience: 0,
                  maximumExperience: 0,
                  maximumSalary: 0,
                  minimumSalary: 0,
                  totalEmpolyee: 0,
                  applyType: "",

                  })
                }
                }
                openForm2={openForm.form2}
                closeForm2={closeForm2}
                handleChange={handleChange}
                closeForm1={closeForm1}
                getvalues={getvalues}
                setGetValues={setGetValues}
                errors={errors}
                setErrors={setErrors}
              />
            </div>
          </div>
        </div>

        <div
          className={`${
            openForm.form1 || openForm.form2
              ? "opacity-20 fixed flex overflow-scroll overflow-x-hidden"
              : ""
          } flex flex-col  `}
        >
          <div className="sticky h-[70px]  items-center flex justify-evenly bg-black top-0">
            <div className="text-white text-3xl">
              <h1>SURENDRAN.K</h1>
            </div>
            <div>
              <Button btn="Apply Card" onClick={openForm1} />
            </div>
          </div>
          <div className=" flex flex-wrap  bg-[#D8D8D8]  p-8 gap-8 justify-center align-center ">
            {datas.map((data, index) => {
              return <JobCard key={index} data={data} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
