
// @mui material components
import Grid from "@mui/material/Grid";
import React, {useState, useEffect} from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import db from '../../firebase/Config';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import './viewPendingTable.scss';
const storage = getStorage();
function ViewPendingOrders() {
  const [productData, setProductData] = useState([]);
  var [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    db.collection("shoped_products").onSnapshot((snapshot) => {
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
    db.collection("products").doc(id).delete();
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
            <div class="col col-2">Delivery Point</div>
            <div class="col col-2">Pickup Point</div>
            <div class="col col-3">price</div>
          </li>
          
          {productData?.map(({ id, data }) => (
            <>
              
                  {data.status=='Pending'?<li class="table-row">
                    <div class="col col-1" data-label="Name">{data.productName}</div>
                    <div class="col col-2" data-label="City">{data.deliveryPoint}</div>
                    <div class="col col-2" data-label="City">{data.pickupPoint}</div>
                    <div class="col col-3" data-label="category">{data.productPrice}</div>
                  </li>:null}

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

export default ViewPendingOrders;
