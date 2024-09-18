import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const questions = [
  {
    question: "Is Firebee Safe?",
    answer:
      "Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP (International Commission on Non-Ionizing Radiation Protection). Firebee is 3000x less powerful than your average smartphone. Firebee uses an ultra-low signal that is completely safe for home use. The technology behind Firebee has been rigorously safety tested and has over 300,000 hours tested by users for efficacy and safety. ",
  },
  {
    question: "How Does Firebee work?",
    answer: (
      <>
        <Typography paragraph>
          Firebee uses safe ultra-low energy magnetic signals to gently nudge
          you into a different mental state.
        </Typography>
        <Typography paragraph>
          Every Firebee signal is made by studying real world magnetic
          signatures. Did you know caffeine has a unique one of a kind magnetic
          signature? It’s a relatively unknown fact that every molecule on earth
          actually has a unique magnetic signature.
        </Typography>
        <Typography paragraph>
          Firebee using patented technology is able to take a magnetic signature
          and play it back through the Firebee headband. When you use the alert
          signal with Firebee you are actually playing back the magnetic
          signature of caffeine which our bodies already recognize.
        </Typography>
        <Typography paragraph>
          Within minutes of feeling the ultra-low magnetic signal of caffeine
          our body begins to feel more alert and awake.
        </Typography>
        <Typography paragraph>
          Firebee signal is 3000 times less powerful than a smartphone and
          completely safe to use.
        </Typography>
      </>
    ),
  },
  {
    question: "Will Firebee Fit on My Head?",
    answer:
      "Firebee has a fully adjustable headband you can adjust to fit comfortably and snug on your head.",
  },
  {
    question: "What If I want the signal to stop?",
    answer:
      "Firebee is designed to be used on command. If you wish to turn off a signal, the effects wear off within minutes.",
  },
  {
    question: "How do you charge Firebee?",
    answer:
      "Firebee comes with a charging dock and a charging cable. Just set up the charging dock on a nightstand and plug it in. ",
  },
];

const AskedQuestions = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        width: "50%",
        margin: "0 auto",
        marginTop: "20px",
        marginBottom: "30px",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Frequently Asked Questions
      </Typography>
      <Divider
        sx={{
          width: "100%",
          marginBottom: "20px",
          borderBottomWidth: 3,
          backgroundColor: "#3F3631",
          marginTop: "50px",
        }}
      />

      {questions.map((item, index) => (
        <div key={index}>
          <Accordion
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{
              boxShadow: "none",
              margin: "0",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
          {index < questions.length - 1 && (
            <Divider
              sx={{ borderBottomWidth: 3, backgroundColor: "#3F3631" }}
            />
          )}
        </div>
      ))}
    </Box>
  );
};

export default AskedQuestions;
