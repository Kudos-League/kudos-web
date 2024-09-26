import React from "react";
import { Box, Typography, Avatar, Stack, Button } from "@mui/material";
import Tags from "../Tags";

interface Props {
  name: string;
  members: number;
  online: number;
  description: string;
  tags: string[]; // Add tags prop
}

export default function CommunityCard(props: Props) {
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
      <Avatar
        alt={props.name}
        src="https://via.placeholder.com/150" // Replace with actual image link
        sx={{ width: 64, height: 64, marginRight: 2 }}
      />

      {/* Content Section */}
      <Stack spacing={0.5}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
          {props.name}
        </Typography>

        {/* Display tags if they exist */}
        {props.tags && props.tags.length > 0 && <Tags tags={props.tags} />}

        <Typography variant="body2" sx={{ color: "#ccc" }}>
          {props.members} members · {props.online} online
        </Typography>

        <Typography variant="body2" sx={{ color: "#bbb" }}>
          {props.description}
        </Typography>
      </Stack>
      <Button sx={{ marginLeft: "auto", color: "#fff" }} variant="outlined">
        Join
      </Button>
    </Box>
  );
}
