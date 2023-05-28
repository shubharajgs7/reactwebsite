import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  const [menus, setMenu] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
      .then((response) => response.json())
      .then((results) => setMenu(results.meals));
  }, []);
  return (
    <Layout>
      {menus.length > 0 ? (
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {menus.map((menu) => (
            <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "400px" }}
                  component={"img"}
                  src={menu.strMealThumb}
                  alt={menu.strMeal}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {menu.strMeal}
                  </Typography>
                  <Typography variant="body2">{menu.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      ) : (
        <div style={{height:"100vh"}}><h3>Loading............................</h3></div>
      )}
    </Layout>
  );
};

export default Menu;
