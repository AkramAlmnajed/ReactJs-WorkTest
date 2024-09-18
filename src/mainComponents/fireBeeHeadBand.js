import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  Rating,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Grid";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import mainProduct from "../assets/images/mainProduct.png";
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import product5 from "../assets/images/product5.png";
import visa1 from "../assets/vectors/visa1.svg";
import visa2 from "../assets/vectors/visa2.svg";
import visa3 from "../assets/vectors/visa3.svg";
import visa4 from "../assets/vectors/visa4.svg";
import visa5 from "../assets/vectors/visa5.svg";
import visa6 from "../assets/vectors/visa6.svg";
import miniicon1 from "../assets/vectors/miniicon1.svg";
import miniicon2 from "../assets/vectors/miniicon2.svg";
import miniicon3 from "../assets/vectors/miniicon3.svg";
import miniicon4 from "../assets/vectors/miniicon4.svg";

const FireBeeHandBand = () => {
  return (
    <Box
      sx={{
        padding: "30px",
        marginTop: "-7px",
        backgroundColor: "#f8f9fa",
        marginLeft: "1px",
      }}
    >
      <Grid container spacing={2}>
        {/* Left section for images */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ display: "flex", gap: "10px", marginBottom: -3 }}>
            <img
              src={icon1}
              alt="icon1"
              style={{ width: "80px", height: "80px" }}
            />
            <img
              src={icon2}
              alt="icon2"
              style={{ width: "80px", height: "80px" }}
            />
          </Box>

          <Box
            sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}
          >
            <img
              src={mainProduct}
              alt="Main Product"
              style={{ width: "100%", maxWidth: "600px", height: "auto" }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "40px",
            }}
          >
            <img
              src={product1}
              alt="Product 1"
              style={{ width: "100%", maxWidth: "600px", height: "70px" }}
            />
            <img
              src={product2}
              alt="Product 2"
              style={{ width: "100%", maxWidth: "600px", height: "70px" }}
            />
            <img
              src={product3}
              alt="Product 3"
              style={{ width: "100%", maxWidth: "600px", height: "70px" }}
            />
            <img
              src={product4}
              alt="Product 4"
              style={{ width: "100%", maxWidth: "600px", height: "70px" }}
            />
            <img
              src={product5}
              alt="Product 5"
              style={{ width: "100%", maxWidth: "600px", height: "70px" }}
            />
          </Box>
          <Box sx={{ mt: 3, marginTop: "40px" }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={6}>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <img
                      src={miniicon3}
                      alt="Mini Icon 3"
                      style={{ width: "30%", padding: "5px" }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Box>
                      <Typography variant="body1"></Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <img
                      src={miniicon4}
                      alt="Mini Icon 4"
                      style={{ width: "30%", padding: "5px" }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Box>
                      <Typography variant="body1" sx={{ marginRight: "20px" }}>
                        Free Shipping within USA
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <img
                      src={miniicon2}
                      alt="Mini Icon 2"
                      style={{ width: "30%", padding: "5px" }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Box>
                      <Typography variant="body1">
                        {" "}
                        Signal CataloguUpdates Included
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <img
                      src={miniicon1}
                      alt="Mini Icon 1"
                      style={{ width: "30%", padding: "5px" }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Box>
                      <Typography variant="body1">
                        Customer Support via E-mail, Phone, and Chat
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "flex-end",
          }}
        >
          {/* Card 1 */}
          <Box sx={{ marginRight: "330px" }}>
            <Box sx={{ textAlign: "left", padding: "20px" }}>
              <Typography variant="h4" component="h1">
                Firebee Headband
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="left">
                <Rating
                  value={4.5}
                  readOnly
                  precision={0.5}
                  icon={
                    <StarIcon fontSize="inherit" style={{ color: "#FFC107" }} />
                  }
                  emptyIcon={
                    <StarIcon fontSize="inherit" style={{ opacity: 0.55 }} />
                  }
                />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  267 Reviews
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Order today and receive your Firebee by June 15th, 2021
              </Typography>
            </Box>
          </Box>
          <Card
            sx={{
              border: "2px solid #E0E0E0",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "80%",
              maxWidth: "750px",
            }}
          >
            <Chip
              label="MOST POPULAR KIT"
              color="primary"
              sx={{
                position: "absolute",
                top: "375px",
                left: "1135px",
                zIndex: 1,
                backgroundColor: "#304FFE",
                color: "white",
                fontSize: "12px",
                padding: "0 10px",
                borderRadius: "30px",
              }}
            />
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 5,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Firebee Starter Kit
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      textDecoration: "line-through",
                      color: "red",
                      marginRight: 2,
                    }}
                  >
                    $999.00
                  </Typography>
                  <Typography variant="h4">$379.00</Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                <CheckCircleIcon sx={{ color: "green" }} />
                <Typography variant="body1">
                  Access to 7 signals (and future signal releases)
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                <CheckCircleIcon sx={{ color: "green" }} />
                <Typography variant="body1">Firebee Headband</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                <CheckCircleIcon sx={{ color: "green" }} />
                <Typography variant="body1">
                  $19/month membership, first 2 months free
                </Typography>
              </Box>

              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginTop: 2 }}
              >
                The starter kit is the most affordable way to get started with
                Firebee. Pay $299 for the Firebee headband and access to the
                entire Firebee Signal Catalogue for only $19 a month.{" "}
                <strong>
                  Membership can be cancelled anytime. No contracts.
                  Satisfaction guaranteed.
                </strong>
              </Typography>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card
            sx={{
              border: "2px solid #E0E0E0",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "80%",
              maxWidth: "750px",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Founder's Kit
                </Typography>
                <Box sx={{ marginTop: 2 }}>
                  <Typography variant="h4">$799.00</Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                <CheckCircleIcon sx={{ color: "green" }} />
                <Typography variant="body1">
                  Access to 7 signals (and future signal releases)
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                <CheckCircleIcon sx={{ color: "green" }} />
                <Typography variant="body1">Firebee Headband</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                <CheckCircleIcon sx={{ color: "green" }} />
                <Typography variant="body1">No Monthly Membership</Typography>
              </Box>

              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginTop: 2 }}
              >
                The Founders kit allows you to get the Firebee headband and
                lifetime access to the entire Firebee Signal Catalogue for a
                one-time payment.
              </Typography>
            </CardContent>
          </Card>
          <Box sx={{ marginRight: "65px" }}>
            <Button
              sx={{
                paddingLeft: "100px",
                backgroundColor: "#00c853",
                color: "#fff",
                borderRadius: "80px",
                width: "600px",
                height: "60px",
              }}
            >
              <ArrowForwardIcon
                sx={{
                  marginLeft: "400px",
                  fontSize: "35px",
                  fontWeight: "bold",
                }}
              />
            </Button>
          </Box>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5px",
              marginRight: "85px",
            }}
          >
            <img
              src={visa1}
              alt="visa1"
              style={{ height: "50px", margin: "0 10px" }}
            />
            <img
              src={visa2}
              alt="visa2"
              style={{ height: "50px", margin: "0 10px" }}
            />
            <img
              src={visa3}
              alt="visa3"
              style={{ height: "50px", margin: "0 10px" }}
            />
            <img
              src={visa4}
              alt="visa4"
              style={{ height: "50px", margin: "0 10px" }}
            />
            <img
              src={visa5}
              alt="visa5"
              style={{ height: "50px", margin: "0 10px" }}
            />
            <img
              src={visa6}
              alt="visa6"
              style={{ height: "50px", margin: "0 10px" }}
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FireBeeHandBand;
