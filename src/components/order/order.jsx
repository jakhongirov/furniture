// import Image from "next/image";
// import Link from "next/link";
// import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useSelector } from "react-redux";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper";
import { Sliders } from '../../assets/data'

function Order({ elModal }) {
  const {
    count: { lang },
  } = useSelector((state) => state);

  const { order: o } = Content[lang];

  return (
    <>
      <section className="order" id="order">
        {/* <div className="container"> */}

        <Box>
          <Grid
            // container
            justifyContent={{ xs: "center", sm: "center", md: "center", lg: "center" }}
          >
            <Grid item lg={11} md={12} sm={11} xs={11}>
              <Swiper
                navigation={true}
                loop={true}
                modules={[Navigation, Autoplay]}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
              >
                {Sliders.map((v, i) => (
                  <SwiperSlide key={i}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: {
                          xs: "center",
                          sm: "center",
                          md: "center",
                          lg: "space-between",
                        },
                        flexWrap: "wrap",
                        alignItems: "center",
                        p: { xs: 3, sm: 4, md: 8, lg: 10 },
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{ width: "450px" }}
                        className="animate__animated animate__backInLeft"
                      >
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "20px",
                              sm: "22px",
                              md: "36px",
                              lg: "54px",
                            },
                            fontFamily: "Inter",
                            fontWeight: "600",
                            color: "#fff",
                          }}
                        >
                          {o.heading}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: {
                              sm: "14px",
                              md: "16px",
                              lg: "18px",
                            },
                            fontFamily: "Inter",
                            fontWeight: "500",
                            color: "#fff"
                          }}
                        >
                          {o.desc}
                        </Typography>

                        <Button
                          variant="outlined"
                          sx={{ borderColor: "ec7f00", mt: 5, color: "#fff", background: "#ec7f00" }}
                          className="animate__animated animate__bounceInUp"
                          onClick={() => {
                            elModal.current.style.display = "flex";
                          }}
                        >
                          {o.submit}
                        </Button>
                      </Box>

                      <Box
                        sx={{
                          width: { xs: "100%", sm: "100%", md: "60%", lg: "60%" },
                          textAlign: "start",
                        }}
                      >
                        <img
                          width={"100%"}
                          style={{
                            objectFit: "cover",
                            maxHeight: "450px",
                            borderRadius: "10px",
                          }}
                          src={v.img}
                          alt=""
                        />
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>
        </Box>

        {/* </div> */}
      </section>
    </>
  );
}

export default Order;
