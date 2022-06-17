import React, { useState } from "react";

import Art from "../Art/Art";

import { TextField, Button } from "@mui/material";

import { Artwork } from "../../types/artwork";

import { getArtworks } from "../../api/getArtworks";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [artworks, setArtworks] = useState([] as Artwork[] | undefined);

  const onChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const findArtworks = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await getArtworks(keyword);
    setArtworks(data);
  };

  return (
    <>
      <h1>Search artworks of painter which you licked</h1>
      <div className="search">
        <form onSubmit={findArtworks}>
          <TextField
            id="search-artworks"
            variant="outlined"
            onChange={onChangeKeyword}
            fullWidth
            value={keyword}
          />
          <Button variant="outlined" disabled={!keyword} type="submit">
            Search
          </Button>
        </form>
      </div>
      <div className="artworks">
        {artworks ? (
          artworks.map((artwork, i) => {
            return (
              <div key={i}>
                <Art artwork={artwork} />
              </div>
            );
          })
        ) : (
          <p>loading</p>
        )}
      </div>
    </>
  );
};

export default Search;
