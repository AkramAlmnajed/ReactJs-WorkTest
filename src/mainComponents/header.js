import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { lightBlue } from "@mui/material/colors";
import Logo from "../assets/vectors/Vector.svg";
import MainImg from "../assets/images/image 16.png";
import LeftImg from "../assets/images/image 17.png";
import RightImg from "../assets/images/image 15.png";

const Header = () => {
  return (
    <>
      {/* الشريط العلوي مع الصورة الخلفية */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={{ position: "relative", minHeight: "100px", padding: 0 }}>
          <img
            src={MainImg}
            alt="Background"
            style={{
              width: "100%",
              height: "70px",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          />
          <img
            src={RightImg}
            alt="RightImg"
            style={{
              width: "40%",
              height: "70px",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />
          <img
            src={LeftImg}
            alt="LeftImg"
            style={{
              width: "40%",
              height: "70px",
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              zIndex: 1,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold" }}>
              BLACK FRIDAY SALE - SAVE $100
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* الشريط الثاني */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#fff", color: "#000", boxShadow: "none" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: { xs: "wrap", md: "nowrap" }, // لجعل المكونات تتكيف مع العرض الصغير
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            <img
              src={Logo}
              alt="Firebee Logo"
              style={{ marginRight: "10px" }}
            />
            <Typography variant="h6">firebee</Typography>

            <Box
              sx={{
                display: "flex",
                gap: { xs: 2, md: 4 }, // تعديل المسافات حسب الحجم
                paddingLeft: { xs: "10px", md: "20px" }, // تعديل الهوامش
                flexWrap: { xs: "wrap", md: "nowrap" }, // التكيف مع العرض الصغير
              }}
            >
              <Button color="inherit">How It Works</Button>
              <Button color="inherit">Signals</Button>
              <Button color="inherit">Reviews</Button>
              <Button color="inherit">Blog</Button>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", marginTop: { xs: "10px", md: "0" } }}> {/* التكيف مع العرض الصغير */}
            <Button
              sx={{
                backgroundColor: "#00c853",
                color: "#fff",
                borderRadius: "50px",
                width: "120px",
                height: "40px",
                "&:hover": { backgroundColor: "#00a152" },
              }}
              variant="contained"
            >
              Buy Now
            </Button>
            <IconButton color="inherit" sx={{ ml: 2 }}>
              <AccountCircleSharpIcon
                sx={{ color: lightBlue[500], fontSize: { xs: "40px", md: "50px" } }} // تقليل الحجم على الموبايل
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
