import React from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import Tags from "../Tags";

interface Props {
  username: string;
  body: string;
}

export default function ChatCard(props: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#333",
        padding: 2,
        borderRadius: 3,
        color: "#fff",
        border: "1px solid #333",
        overflow: "hidden",
        marginRight: 1,
      }}
    >
      {/* Profile Image */}
      <Stack spacing={0.5} margin={1}>
        <Avatar
          alt={props.username}
          src="https://via.placeholder.com/150" // Replace with actual image link
          sx={{ width: 64, height: 64, marginRight: 2 }}
        />
      </Stack>

      {/* Content Section */}
      <Stack>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
          {props.username}
        </Typography>

        <Typography variant="body2" sx={{ color: "#bbb" }}>
          {props.body}
        </Typography>
      </Stack>
    </Box>
  );
}
