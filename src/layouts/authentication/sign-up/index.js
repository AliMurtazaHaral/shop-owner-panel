
// react-router-dom components
import { Link, Navigate } from "react-router-dom";
import React, { useState } from "react";
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { Navigation } from "@mui/icons-material";
import db from '../../../firebase/Config';
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
const storage = getStorage();
function Cover() {

  const [productName, setProductName] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [shopImageUpload, setShopImageUpload] = useState(null);
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [shopName, setShopName] = useState("");
  const [shopRegistrationNumber, setShopRegistrationNumber] = useState("");
  const [cnic, setCNIC] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const auth = getAuth();
  const saveDatatoFirebase = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    uploadFile();
    db.collection("users").add({
      fullName: fullName,
      email: email,
      address: address,
      city: city,
      shopName: shopName,
      shopRegistrationNumber: shopRegistrationNumber,
      mobileNumber: mobileNumber,
      password: password,
      profileImageReference: imageUpload,
      profession: "Vendor",
      status: "Not Checked",
      cnic: cnic,
      rating: "0",
      shopImageReference: shopImageUpload
    });
    alert("Data has been added successfully");
  }
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `profileImages/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      setImageUpload(imageUpload.name);
      console.log("Image has been uploaded")
    });
  };
  const uploadShopImage = () => {
    if (shopImageUpload == null) return;
    const imageRef = ref(storage, `shopImages/${shopImageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      setShopImageUpload(shopImageUpload.name);
    });
  };
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput value={productName} onChange={(e) => setProductName(e.target.value)} type="text" label="Name" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" label="Email" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="CNIC" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Mobile Number" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="City" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Shop Name" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Shop Registration Number" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="file" label="Profile Image" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="file" label="Shop Image" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Name" variant="standard" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton onClick={() => {
                navigateTo();
              }} variant="gradient" color="info" fullWidth>
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="light"
                  fontWeight="medium"
                  textGradient
                >
                  Sign Up
                </MDTypography>
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
