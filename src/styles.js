import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    marginTop: "100px",
    background: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "20px",
  },
  button: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px",
  },
  card: {
    heigh: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
    borderTop: "1px dotted #000",
  },
}));
