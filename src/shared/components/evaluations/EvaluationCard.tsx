import React from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import Tags from "../Tags";

interface Props {
  sender: string;
  receiver: string;
  body: string;
  kudos: number;
  post: number;
  post_title: string;
  post_type: string;
  post_tags: string[];
}

export default function EvaluationCard(props: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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
          alt={props.sender}
          src="https://via.placeholder.com/150" // Replace with actual image link
          sx={{ width: 64, height: 64, marginRight: 2 }}
        />
        <Typography variant="body2" sx={{ color: "#ccc" }}>
          {props.sender}
        </Typography>
              </Stack>

      {/* Content Section */}
      <Stack spacing={0.5} justifyContent={"center"}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
          {props.post_title}
        </Typography>

        <Typography variant="body2" sx={{ color: "#ccc" }}>
          {`${props.post_type} · ${props.kudos} kudos`}
        </Typography>
        {/* Display tags if they exist */}
        {props.post_tags && props.post_tags.length > 0 && <Tags tags={props.post_tags} />}

        <Typography variant="body2" sx={{ color: "#bbb" }}>
          {props.body}
        </Typography>
      </Stack>

      <Stack spacing={0.5} margin={1}>
        <Avatar
          alt={props.receiver}
          src="https://via.placeholder.com/150" // Replace with actual image link
          sx={{ width: 64, height: 64, marginRight: 2 }}
        />
        <Typography variant="body2" sx={{ color: "#ccc" }}>
          {props.receiver}
        </Typography>

      </Stack>
    </Box>
  );
}