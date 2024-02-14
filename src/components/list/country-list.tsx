import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";

export default function CountryList({
  componentType,
}: {
  componentType: string | null;
}) {
  const router = useRouter();
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem
        alignItems="flex-start"
        style={{ cursor: "pointer" }}
        onClick={() => {
          router.push(componentType ? "/settings" : "/account");
        }}
      >
        <ListItemAvatar>
          <Avatar alt="India" />
        </ListItemAvatar>
        <ListItemText
          primary="India Admin"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                India Admin
              </Typography>
              {
                " — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem
        alignItems="flex-start"
        style={{ cursor: "pointer" }}
        onClick={() => {
          router.push(componentType ? "/settings" : "/account");
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Brazil" />
        </ListItemAvatar>
        <ListItemText
          primary="Brazil Admin"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Brazil Admin
              </Typography>
              {
                " — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.…"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem
        alignItems="flex-start"
        style={{ cursor: "pointer" }}
        onClick={() => {
          router.push(componentType ? "/settings" : "/account");
        }}
      >
        <ListItemAvatar>
          <Avatar alt="USA" />
        </ListItemAvatar>
        <ListItemText
          primary="USA Admin"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                USA Admin
              </Typography>
              {
                " — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
