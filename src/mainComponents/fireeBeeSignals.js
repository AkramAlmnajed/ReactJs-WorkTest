import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import alert from "../assets/images/alert.png";
import bedtime from "../assets/images/bedtime.png";
import calm from "../assets/images/calm.png";
import deep_sleep from "../assets/images/deepsleep.png";
import relax from "../assets/images/relax.png";
import focus from "../assets/images/focus.png";
import happy from "../assets/images/happy.png";
import bee from "../assets/images/bee.png";
import stroke1 from "../assets/images/stroke1.png";
import stroke2 from "../assets/images/stroke2.png";

const signals = [
  {
    title: "Bedtime",
    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
    logo: bedtime,
  },
  {
    title: "Deep Sleep",
    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
    logo: deep_sleep,
  },
  {
    title: "Relax",
    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
    logo: relax,
  },
  {
    title: "Calm",
    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
    logo: calm,
  },
  {
    title: "Focus",
    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
    logo: focus,
  },
  {
    title: "Happy",
    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
    logo: happy,
  },
  {
    title: "Alert",
    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
    logo: alert,
  },
  {
    title: "Love",
    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
    logo: bee,
  },
];

const FireBeeSignals = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "32px",
        position: "relative",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <Box
        sx={{ position: "absolute", top: "-20px", left: "10px", zIndex: "-1" }}
      >
        <img src={stroke1} alt="Stroke 1" style={{ width: "400px" }} />
      </Box>

      <Typography variant="h4" gutterBottom>
        Firebee Signals
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        A signal for every situation
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        {signals.slice(0, 3).map((signal, index) => (
          <Card
            key={index}
            sx={{
              width: "32%",
              display: "flex",
              alignItems: "center",
              padding: "16px",
              backgroundColor: "#f8f9fa",
              boxShadow: "none",
            }}
          >
            <Box
              component="img"
              src={signal.logo}
              alt={`${signal.title} logo`}
              sx={{ width: "64px", height: "64px", marginRight: "16px" }}
            />
            <CardContent sx={{ textAlign: "left" }}>
              <Typography variant="h6">{signal.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {signal.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        {signals.slice(3, 6).map((signal, index) => (
          <Card
            key={index}
            sx={{
              width: "32%",
              display: "flex",
              alignItems: "center",
              padding: "16px",
              backgroundColor: "#f8f9fa",
              boxShadow: "none",
            }}
          >
            <Box
              component="img"
              src={signal.logo}
              alt={`${signal.title} logo`}
              sx={{ width: "64px", height: "64px", marginRight: "16px" }}
            />
            <CardContent sx={{ textAlign: "left" }}>
              <Typography variant="h6">{signal.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {signal.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <Box sx={{ width: "32%" }}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "16px",
              backgroundColor: "#f8f9fa",
              boxShadow: "none",
            }}
          >
            <Box
              component="img"
              src={signals[6].logo}
              alt={`${signals[6].title} logo`}
              sx={{ width: "64px", height: "64px", marginRight: "16px" }}
            />
            <CardContent sx={{ textAlign: "left" }}>
              <Typography variant="h6">{signals[6].title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {signals[6].description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ width: "32%" }}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "16px",
              backgroundColor: "#f8f9fa",
              boxShadow: "none",
            }}
          >
            <Box
              component="img"
              src={signals[7].logo}
              alt={`${signals[7].title} logo`}
              sx={{ width: "64px", height: "64px", marginRight: "16px" }}
            />
            <CardContent sx={{ textAlign: "left" }}>
              <Typography variant="h6">{signals[7].title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {signals[7].description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ width: "32%" }} />
      </Box>

      <Box sx={{ position: "absolute", bottom: "-40px", right: "20px" }}>
        <img
          src={stroke2}
          alt="Stroke 2"
          style={{ width: "400px", marginBottom: "30px" }}
        />
      </Box>
    </Box>
  );
};

export default FireBeeSignals;
