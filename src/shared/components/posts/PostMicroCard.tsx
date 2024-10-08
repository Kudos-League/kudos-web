import React from "react";
import { Box, Typography, Avatar, Stack, Button } from "@mui/material";
import Tags from "../Tags";

interface Props {
  name: string;
  type: string
  description: string;
  tags: string[]; // Add tags prop
}

export default function PostMicroCard(props: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
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
        sx={{ width: 48, height: 48, marginRight: 2 }}
      />

      {/* Content Section */}
        <Typography  sx={{ fontWeight: "bold", color: "#fff" }} style={{ marginRight: "10px" }}>
          {props.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "#bbb" }}>
          · {props.type} · 
        </Typography>

        {/* Display tags if they exist */}
        {/* {props.tags && props.tags.length > 0 && <Tags tags={props.tags} />}
 */}
        <Typography variant="body2" sx={{ color: "#bbb" }} style={{ marginLeft: "10px" }}>
          {props.description}
        </Typography>
    </Box>
  );
}