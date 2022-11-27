
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import React, {useState,useEffect} from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";
import MDInput from "components/MDInput";

import Button from "@material-ui/core/Button";
import db from "../../firebase/Config";
import { getStorage, ref, getDownloadURL,uploadBytes } from "firebase/storage";
const storage = getStorage();
function Tables() {
  const [imageUpload, setImageUpload] = useState(null);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setproductQuantity] = useState("");
  const allowedFiles = ['application/pdf'];
  const saveDatatoFirebase = (e) => {
    e.preventDefault();
    uploadFile();
    db.collection("products").add({
      productName: productName,
      productDescription: productDescription,
      productPrice: productPrice,
      productQuantity: productQuantity,
      productImage: imageUpload.name,
      productRating: "5"
    });
    alert("Data has been added successfully");
  }
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `productImages/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      console.log("Image has been uploaded")
    });
  };
  const uploadfiles = () => {
    document.getElementById("selectFile").click();
  };
  const handleInputChange = (event) => {
    setImageUpload(event.target.files[0]);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
      
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={15}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Add Product
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Add Product Details
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
            
            <MDInput value={productName} onChange={(e) => setProductName(e.target.value)} type="text" label="Product Name" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
            <MDInput value={productDescription} onChange={(e) => setProductDescription(e.target.value)} type="text" label="Product Description" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
            <MDInput value={productPrice} onChange={(e) => setProductPrice(e.target.value)} type="text" label="Product Price" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
            <MDInput value={productQuantity} onChange={(e) => setproductQuantity(e.target.value)} type="text" label="Product Quantity" variant="standard" fullWidth />
            </MDBox>
            <label>Product Image</label>
          
      <input type='file' onChange={(event)=>{setImageUpload(event.target.files[0])}} className="form-control"></input>
            <MDBox mt={4} mb={1}>
              <MDButton to="/authentication/sign-in" variant="gradient" color="info" fullWidth>
              Add Product
              </MDButton>
            </MDBox>
            
          
          </MDBox>
        </MDBox>
      </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
