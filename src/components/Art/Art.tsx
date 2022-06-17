import React from "react";

import { Card } from "@mui/material";

import { Artwork } from "../../types/artwork";

type ArtProps = {
  artwork: Artwork;
};

const Art = ({ artwork }: ArtProps) => {
  return (
    <Card>
      <h2>{artwork.title}</h2>
      <img src={artwork.image_url}></img>
    </Card>
  );
};

export default Art;
