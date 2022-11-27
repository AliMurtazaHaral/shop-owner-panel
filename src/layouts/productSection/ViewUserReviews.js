
// @mui material components
import Grid from "@mui/material/Grid";
import React, {useState, useEffect} from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import { Navigate, useNavigate } from 'react-router-dom';
// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import db from '../../firebase/Config';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import './viewPendingTable.scss';
const storage = getStorage();
function ViewUserReviews() {
  const [productData, setProductData] = useState([]);
  var [imgUrl, setImgUrl] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      setProductData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  const getImg = (s) => {
    const starsRef = ref(storage, 'profileImages/' + s);
    getDownloadURL(starsRef)
      .then((url) => {
        // Insert url into an <img> tag to "download"
        setImgUrl(url);
      });
    return imgUrl;
  }
  const deleteData = (id) => {
    <Navigate to = '/reviewPage'/> 
  };
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
      <>
      <div class="container-view">
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-1">Name</div>
            <div class="col col-2">Quantity</div>
            <div class="col col-3">price</div>
            <div class="col col-5">Action</div>
          </li>
          
          {productData?.map(({ id, data }) => (
            <>
              
                  <li class="table-row">
                    <div class="col col-1" data-label="Name">{data.productName}</div>
                    <div class="col col-2" data-label="City">{data.productQuantity}</div>
                    <div class="col col-3" data-label="category">{data.productPrice}</div>
                    <div class="col col-5" data-label="Action"><button onClick={() => { deleteData(id); }}>
                      View
                    </button></div>
                  </li>
                

            </>
          ))}
        </ul>
      </div>
    </>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ViewUserReviews;
