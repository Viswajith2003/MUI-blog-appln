import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";

import {
  avatarImages,
  galleryImages,
  conversationAvatars,
} from "../assets/images";

export default function Rightbar() {
  return (
    <Box
      // bgcolor="Blue"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position={"fixed"}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup total={avatarImages.length} sx={{ mr: 30 }}>
          {avatarImages.map((item, idx) => (
            <Avatar key={idx} alt={item.title} src={item.img} />
          ))}
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest photos
        </Typography>
        <ImageList
          sx={{ width: 500, height: 450 }}
          variant="standard"
          cols={3}
          gap={6}
        >
          {galleryImages.map((item, idx) => (
            <ImageListItem key={idx} cols={1} rows={1}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest conversation
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt={conversationAvatars[0].alt}
                src={conversationAvatars[0].src}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt={conversationAvatars[1].alt}
                src={conversationAvatars[1].src}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt={conversationAvatars[2].alt}
                src={conversationAvatars[2].src}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
