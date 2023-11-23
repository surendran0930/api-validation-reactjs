import React, { useState } from 'react'
import Button from '../Button/Button'
import { useNavigate } from "react-router";
import Form1 from '../Form/Form1';
import Form2 from '../Form/Form2';

const Header = () => {
    // const Navigate = useNavigate()

   const [openModel1,setOpenModel1] =useState(false);
   const [openModel2,setOpenModel2] =useState(false);

   
   const openForm =()=>{
console.log("open worked");
setOpenModel1(true)
   }

   const closeForm = ()=>{
    console.log("closed worked");
    setOpenModel1(false)
  
   }
  const handleOpenModal2=(data)=>{
    setOpenModel1(false)
    setOpenModel2(data)

  }

  const handleBackModal1=(data)=>{
    setOpenModel1(true)
    setOpenModel2(data)

  }

  // if(e.target.name === "tittle" && e.target.value === ""  ) {
    //   setErrors(errors => ({
    //     ...errors,
    //     tittle: true
    //   }))
    // } else {
    //   setErrors(errors => ({
    //     ...errors,
    //     tittle: false
    //   }))
    // }
    // if (e.target.name === "companyName" && e.target.value === "") {
    //   setErrors((errors) => ({
    //     ...errors,
    //     companyName: true,
    //   }));
    // } else {
    //   setErrors((errors) => ({
    //     ...errors,
    //     companyName: false,
    //   }));
    // }
    // if (e.target.name === "industry" && e.target.value === "") {
    //   setErrors((errors) => ({
    //     ...errors,
    //     industry: true,
    //   }));
    // } else {
    //   setErrors((errors) => ({
    //     ...errors,
    //     industry: false,
    //   }));
    // }
    // if (e.target.name === "location" && e.target.value === "") {
    //   setErrors((errors) => ({
    //     ...errors,
    //     location: true,
    //   }));
    // } else {
    //   setErrors((errors) => ({
    //     ...errors,
    //     location: false,
    //   }));
    // }
    // if (e.target.name === "remoteType" && e.target.value === "") {
    //   setErrors((errors) => ({
    //     ...errors,
    //     remoteType: true,
    //   }));
    // } else {
    //   setErrors((errors) => ({
    //     ...errors,
    //     remoteType: false,
    //   }));
    // }

    // if (e.target.name === "minimumExperience" && e.target.value === "") {
    //   setErrors((errors) => ({
    //     ...errors,
    //     minimumExperience: true,
    //   }));
    // } else {
    //   setErrors((errors) => ({
    //     ...errors,
    //     minimumExperience: false,
    //   }));
    // }
    // if (e.target.name === "maximumExperience" && e.target.value === "") {
    //   setErrors((errors) => ({
    //     ...errors,
    //     maximumExperience: true,
    //   }));
    // } else {
    //   setErrors((errors) => ({
    //     ...errors,
    //     maximumExperience: false,
    //   }));
    // }
    // if (e.target.name === "minimumSalary" && e.target.value === "") {
    //   setErrors((errors) => ({
    //     ...errors,
    //     minimumSalary: true,
    //   }));
    // } else {
    //   setErrors((errors) => ({
    //     ...errors,
    //     minimumSalary: false,
    //   }));
    // }
    // if (e.target.name === "maximumSalary" && e.target.value === "") {
    //   setErrors((errors) => ({
    //     ...errors,
    //     maximumSalary: true,
    //   }));
    // } else {
    //   setErrors((errors) => ({
    //     ...errors,
    //     maximumSalary: false,
    //   }));
    // }
    // if (e.target.name === "totalEmpolyee" && e.target.value === "") {
    //   setErrors((errors) => ({
    //     ...errors,
    //     totalEmpolyee: true,
    //   }));
    // } else {
    //   setErrors((errors) => ({
    //     ...errors,
    //     totalEmpolyee: false,
    //   }));
    // }
    // if(e.target.name === "remoteType" && e.target.value === ""  ) {
    //   setErrors(errors => ({
    //     ...errors,
    //     remoteType: true
    //   }))
    // } else {
    //   setErrors(errors => ({
    //     ...errors,
    //     remoteType: false
    //   }))
    // }



    // case "maximumExperience":
        // if(+getvalues.minimumExperience>= +getvalues.maximumExperience){
        //   setErrors((errors) => ({
        //     ...errors,
        //     minimumExperience: "max should be greater than min",
        //   }));
        // }
      // if(getvalues.maximumExperience ===''|| +getvalues.maximumExperience===0){
      //   setErrors((errors) => ({
      //           ...errors,
      //           maximumExperience: "Enter minimumExperience",
      //         }));
      // }
      //   if (value) {
      //     setErrors((errors) => ({
      //       ...errors,
      //       minimumExperience:
      //         value.length < 1 || value.length > 20 ? "min length 1-13" : "",
      //         // value < maximumExperience.value
      //     }));
      //   } else {
      //     // console.log(value, "else");
      //     setErrors((errors) => ({
      //       ...errors,
      //       minimumExperience: "Enter minimumExperience",
      //     }));
      //   }
      //   break;
      // case "maximumExperience":
      //   if (value) {
      //     setErrors((errors) => ({
      //       ...errors,
      //       maximumExperience:
      //         value.length < 1 || value.length > 20 ? "min length 1-13" : "",
      //     }));
      //   } else {
      //     // console.log(value, "else");
      //     setErrors((errors) => ({
      //       ...errors,
      //       maximumExperience: "Enter maximumExperience",
      //     }));
      //   }
      //   break;
      // case "minimumSalary":
      //   if (value) {
      //     setErrors((errors) => ({
      //       ...errors,
      //       minimumSalary:
      //         value.length < 1 || value.length > 20 ? "min length 1-13" : "",
      //     }));
      //   } else {
      //     // console.log(value, "else");
      //     setErrors((errors) => ({
      //       ...errors,
      //       minimumSalary: "Enter minimumSalary",
      //     }));
      //   }
      //   break;
      // case "maximumSalary":
      //   if (value) {
      //     setErrors((errors) => ({
      //       ...errors,
      //       maximumSalary:
      //         value.length < 1 || value.length > 20 ? "min length 1-13" : "",
      //     }));
      //   } else {
      //     // console.log(value, "else");
      //     setErrors((errors) => ({
      //       ...errors,
      //       maximumSalary: "Enter maximumSalary",
      //     }));
      //   }
      //   break;
      // case "totalEmpolyee":
      //   if (value) {
      //     setErrors((errors) => ({
      //       ...errors,
      //       totalEmpolyee:
      //         value.length < 1 || value.length > 20 ? "min length 5-13" : "",
      //     }));
      //   } else {
      //     // console.log(value, "else");
      //     setErrors((errors) => ({
      //       ...errors,
      //       totalEmpolyee: "Enter totalEmpolyee",
      //     }));
      //   }
      //   break;


  return (
    <div className="" >
      <div>
        <h1>SURENDRAN.K</h1>
        {/* <Button btn="Apply-Form" onClick={()=>(Navigate("/form1"))}/> */}
        <Button btn="Apply Card"  onClick={openForm} />
        <div className=''>

        <Form1 isModalOpen={openModel1} isCloseModal={closeForm} handleOpenModal2={handleOpenModal2} />
        
        <Form2 openModal2={openModel2} handleBackModal1={handleBackModal1} />
        </div>
        </div>

    </div>
  )
}

export default Header