import LoginEvents from "@/components/auth/login-event";
import { Box, Card, Divider, Stack, Typography } from "@mui/material";

const Login = () => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography gutterBottom variant="h5" component="div">
            Not Signed In
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
          Please signin to continue...
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <LoginEvents></LoginEvents>
      </Box>
    </Card>
  );
};

export default Login;
