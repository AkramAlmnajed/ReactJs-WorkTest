import React from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import women from "../assets/images/women.png";

const fireBeeInfo = () => {
  const benefits = [
    { text: "Can’t sleep? Turn on the deep sleep signal" },
    { text: "Feeling tired? Turn on the alert signal" },
    { text: "Feeling anxious? Turn on the calm signal" },
    { text: "Feeling unproductive? Turn on the focus signal" },
    { text: "Feeling blue? Turn on the happy signal" },
  ];

  return (
    <Box sx={{ padding: "2px" }}>
      <Box sx={{ marginBottom: "70px" }}>
        <Typography variant="h2" align="center" gutterBottom>
          What will Firebee do for me?
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          align="center"
          gutterBottom
        >
          Firebee will help you gently nudge yourself into a different mental
          state
        </Typography>
      </Box>

      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <img
            src={women}
            alt="Firebee benefits"
            style={{ width: "60%", borderRadius: "8px", marginLeft: "200px" }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <List>
            {benefits.map((benefit, index) => (
              <ListItem
                key={index}
                sx={{ marginBottom: "25px", paddingRight: "110px" }}
              >
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "#5EEA9F" }} />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="h6">{benefit.text}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default fireBeeInfo;
