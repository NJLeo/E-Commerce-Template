import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import TopMenu from "./components/TopMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.min.css";

//import ModalContato from './components/modals/ModalContato';
import {Button, Grid } from "@material-ui/core";

//import Dialog from '@mui/material';

//
//const Header = lazy(() => import("./components/Header"));
//const TopMenu = lazy(() => import("./components/TopMenu"));
const HomeView = lazy(() => import("./views/Home"));
const SignInView = lazy(() => import("./views/account/SignIn"));
const SignUpView = lazy(() => import("./views/account/SignUp"));
const ForgotPasswordView = lazy(() => import("./views/account/ForgotPassword"));
const OrdersView = lazy(() => import("./views/account/Orders"));
const WishlistView = lazy(() => import("./views/account/Wishlist"));
const NotificationView = lazy(() => import("./views/account/Notification"));
const MyProfileView = lazy(() => import("./views/account/MyProfile"));
const ProductListView = lazy(() => import("./views/product/List"));
const ProductDetailView = lazy(() => import("./views/product/Detail"));
const StarZoneView = lazy(() => import("./views/product/StarZone"));
const CartView = lazy(() => import("./views/cart/Cart"));
const CheckoutView = lazy(() => import("./views/cart/Checkout"));
const DocumentationView = lazy(() => import("./views/Documentation"));
const ContactUsView = lazy(() => import("./views/pages/ContactUs"));
const SupportView = lazy(() => import("./views/pages/Support"));

const NotFoundView = lazy(() => import("./views/pages/404"));
const InternalServerErrorView = lazy(() => import("./views/pages/500"));



// const BlogView = lazy(() => import("./views/blog/Blog"));
// const BlogDetailView = lazy(() => import("./views/blog/Detail"));

function App() {

  //const [openModalContato, setOpenModalContato] = useState(false);
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    console.log("chegou aqui");
    setOpen(true);
   };

  // const handleClose = () => {
  //   setOpen(false);
  // };


  return (
    <BrowserRouter>
      <React.Fragment>

        <Header />

        <Grid
          item xs={12} md={4}
          className="aeaeas"
          style={{
            width: '350px',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            className="aeaeae"
            //onClick={() => setOpenModalContato(true)}
            onClick={handleClickOpen}
            //onClick={() => console.log("clicou")}

          > Contato
          </Button>

          <Dialog
            open={open}
            //onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleClose} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>


        </Grid>

        {/* <ModalContato
          setOpenModalContato={() => setOpenModalContato(true)}
          //establishmentInfo={establishmentInfo}
          openModalContato={openModalContato}
          closeModalContato={() => setOpenModalContato(false)}
        /> */}

        <TopMenu />

        <Suspense
          fallback={
            <div className="text-white text-center mt-3">Loading...</div>
          }
        >
          <Switch>
            <Route exact path="/" component={HomeView} />

            <Route exact path="/account/profile" component={MyProfileView} />
            <Route exact path="/star/zone" component={StarZoneView} />
            <Route exact path="/account/orders" component={OrdersView} />
            <Route exact path="/account/wishlist" component={WishlistView} />
            <Route exact path="/account/notification" component={NotificationView} />
            <Route exact path="/support" component={SupportView} />

            <Route exact path="/account/signin" component={SignInView} />
            <Route exact path="/account/signup" component={SignUpView} />
            <Route exact path="/checkout" component={CheckoutView} />
            <Route exact path="/contact-us" component={ContactUsView} />

            {/* <Route exact path="/blog" component={BlogView} />
            <Route exact path="/blog/detail" component={BlogDetailView} /> */}

            <Route exact path="/account/forgotpassword" component={ForgotPasswordView} />
            <Route exact path="/category" component={ProductListView} />
            <Route exact path="/product/detail" component={ProductDetailView} />
            <Route exact path="/cart" component={CartView} />

            <Route exact path="/documentation" component={DocumentationView} />

            <Route exact path="/500" component={InternalServerErrorView} />
            <Route component={NotFoundView} />
          </Switch>
        </Suspense>

        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}




export default App;
