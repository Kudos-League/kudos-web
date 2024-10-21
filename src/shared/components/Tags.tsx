import { Box, Chip } from "@mui/material";

interface Props {
  tags: string[];
}

export default function Tags(props: Props) {
  return (
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", marginTop: 1 }}>
      {props.tags.map((tag, index) => (
        <Chip
          key={index}
          label={tag}
          sx={{
            backgroundColor: "#444", // Dark background to match overall theme
            color: "#fff", // Light text for contrast
            borderRadius: 2,
          }}
        />
      ))}
    </Box>
  );
}
