import React from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import Tags from "../Tags";

interface Props {
  username: string;
  title: string;
  body: string;
  type: string;
  kudos: number;
  tags: string[]; // Add tags prop
}

export default function PostCard(props: Props) {
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
        <Typography variant="body2" sx={{ color: "#ccc" }}>
          {props.username}
        </Typography>
        <Typography variant="body2" sx={{ color: "#ccc" }}>
          {props.kudos} kudos
        </Typography>
      </Stack>

      {/* Content Section */}
      <Stack spacing={0.5}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
          {props.title}
        </Typography>

        <Typography variant="body2" sx={{ color: "#ccc" }}>
          {props.type}
        </Typography>
        {/* Display tags if they exist */}
        {props.tags && props.tags.length > 0 && <Tags tags={props.tags} />}

        <Typography variant="body2" sx={{ color: "#bbb" }}>
          {props.body}
        </Typography>
      </Stack>
    </Box>
  );
}
