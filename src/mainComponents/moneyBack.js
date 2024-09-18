import { Box, Typography, Grid } from "@mui/material";
import logodays from "../assets/images/30days.png";

const MoneyBack = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 4, px: 2 }}>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={4}>
          <img
            src={logodays}
            alt="Firebee Logo"
            style={{ width: "60%", maxWidth: "210px", marginLeft: "250px" }}
          />
        </Grid>

        <Grid item xs={8}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ fontWeight: "bold[200]", marginRight: "150px" }}
          >
            30 Day Money Back Guarantee
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: "600px", whiteSpace: "pre-line" }}
          >
            At Firebee we believe in building quality products that actually
            work. Firebee and its partners have invested over $85 million in
            research and development to create the highest quality wearable for
            customers to enjoy. If for any reason you are not satisfied with
            your Firebee headband, we will happily refund your purchase.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MoneyBack;
