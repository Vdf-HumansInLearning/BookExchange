import { Avatar, Chip, Rating, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import WhatshotIcon from "@mui/icons-material/Whatshot";

function UserInformation() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: 570 }}>
      <Avatar
        sx={{ alignSelf: "center" }}
        alt="Cindy Baker"
        src="/static/images/avatar/3.jpg"
      />
      <Typography sx={{ mt: 2, fontWeight: "bold" }}>Username</Typography>
      <Rating
        sx={{ alignSelf: "center", mt: 1 }}
        name="read-only"
        value={3}
        readOnly
      />
      <Typography
        component={"div"}
        sx={{ display: "flex", justifyContent: "center", m: 1 }}
      >
        <WhatshotIcon color="primary" />
        <Typography component={"p"} sx={{ pt: 0.5 }}>
          30 points
        </Typography>
      </Typography>
      <Typography
        component={"div"}
        sx={{ alignSelf: "flex-start", ml: 2, mt: 2, textAlign: "left" }}
      >
        <Typography component={"p"} sx={{ fontWeight: "bold" }}>
          Email address:
        </Typography>
        <Typography component={"p"}>john.doe@example.com</Typography>
      </Typography>
      <Typography
        component={"div"}
        sx={{ alignSelf: "flex-start", ml: 2, mt: 2, textAlign: "left" }}
      >
        <Typography component={"p"} sx={{ fontWeight: "bold" }}>
          Keywords:
        </Typography>
        <Stack direction="row" spacing={1} sx={{my:2}}>
          <Chip label="Drama" color="primary" variant="outlined" />
          <Chip label="Crime" color="success" variant="outlined" />
          <Chip label="Drama" color="primary" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={1} sx={{my:2}}>
          <Chip label="Crime" color="success" variant="outlined" />
          <Chip label="Drama" color="primary" variant="outlined" />
          <Chip label="Crime" color="success" variant="outlined" />
        </Stack>
      </Typography>
    </Box>
  );
}

export default UserInformation;
