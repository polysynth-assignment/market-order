import React, {
  Fragment,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import {
  Container,
  Card,
  Box,
  InputAdornment,
  TextField,
  Slider,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import * as Yup from "yup";
import { Field, Form, FormikProvider, useFormik } from "formik";
import { FaWallet } from "react-icons/fa";
import { alpha, styled } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";

export default function Order() {
  const initialValues = {
    amountUSDP: "",
    amountETH: "",
    leverage: 1,
    slippageTolerance: 0.5,
    customSlippageTolerance: "",
  };
  const validateSchema = Yup.object().shape({
    amountUSDP: Yup.string().required(),
    amountETH: Yup.string().required(),
    leverage: Yup.string().required(),
    slippageTolerance: Yup.string().required(),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validateSchema,
    onSubmit: () => console.log("Submitted form", formik.values),
  });

  const MainForm = () => {
    return (
      <Fragment>
        <div className="col-md-6 col-sm-12">
          <div className="form-group">
            <div>
              <Grid container spacing={0}>
                <Grid item>
                  <Typography
                    gutterBottom
                    sx={{ color: "#000" }}
                  >
                    Amount
                  </Typography>
                </Grid>
              </Grid>
              <TextField
                fullWidth
                name="amountUSDP"
                sx={{ mt: -3 }}
                variant="standard"
                InputProps={{
                  endAdornment: <p>USDP</p>,
                }}
                inputProps={{  inputMode: "numeric" }}
                helperText={
                  <span>
                    <FaWallet /> $ abcd
                  </span>
                }
                onChange={formik.handleChange}
                value={formik.values.amountUSDP}
              />
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="form-group">
            <div>
              <Grid container spacing={0} sx={{ mt: 1 }}>
                <Grid item>
                  <Typography
                    gutterBottom
                    sx={{ color: "#000" }}
                  >
                    Amount
                  </Typography>
                </Grid>
                <TextField
                  fullWidth
                  sx={{ mt: -3 }}
                  name="amountETH"
                  variant="standard"
                  InputProps={{
                    endAdornment: <p>ETH</p>,
                  }}
                  onChange={formik.handleChange}
                  value={formik.values.amountETH}
                />
              </Grid>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="form-group">
            <div>
              <Grid
                container
                spacing={2}
                sx={{ justifyContent: "space-between", mt: 1 }}
              >
                <Grid item>
                  <Typography
                    id="non-linear-slider"
                    gutterBottom
                    sx={{ color: "#000" }}
                  >
                    Leverage
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    id="non-linear-slider"
                    gutterBottom
                    sx={{ color: "#000" }}
                  >
                    {`${formik.values.leverage}x`}
                  </Typography>
                </Grid>
              </Grid>
              <Slider
                name="leverage"
                onChange={formik.handleChange}
                aria-label="Always visible"
                getAriaValueText={() => `${formik.values.leverage}x`}
                value={formik.values.leverage}
                scale={() => formik.values.leverage}
                min={1}
                step={1}
                max={10}
                marks={[
                  {
                    value: 1,
                    label: "1x",
                  },
                  {
                    value: 10,
                    label: "10x",
                  },
                ]}
                aria-labelledby="non-linear-slider"
              />
              {/* <Slider
                name="leverage"
                onChange={formik.handleChange}
                value={formik.values.leverage}
                min={1}
                step={1}
                max={10}
                // scale={() => formik.values.leverage++}
                getAriaValueText={() => `${formik.values.leverage}x`}
                // valueLabelFormat={() => `${formik.values.leverage}x`}
                valueLabelDisplay="auto"
                // aria-labelledby="non-linear-slider"
                marks={[
                  {
                    value: 1,
                    label: "1x",
                  },
                  {
                    value: 10,
                    label: "10x",
                  },
                ]}
              /> */}
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="form-group">
            <div>
              <Grid
                container
                spacing={2}
                sx={{ justifyContent: "space-between", mt: 0.5 }}
              >
                <Grid item>
                  <Typography
                    id="non-linear-slider"
                    gutterBottom
                    sx={{ color: "#000" }}
                  >
                    Slippage Tolerance
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    id="non-linear-slider"
                    gutterBottom
                    sx={{ color: "#000" }}
                  >
                    {`${formik.values.slippageTolerance}%`}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={0.2}
                sx={{ justifyContent: "space-between" }}
              >
                <Grid item>
                  <Button
                    variant="outlined"
                    name="slippageTolerance"
                    onClick={() => {
                      formik.setFieldValue("slippageTolerance", 0.1);
                      formik.setFieldValue("customSlippageTolerance", "");
                    }}
                    sx={{ borderRadius: "20px", color: "#000" }}
                  >
                    0.1%
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    name="slippageTolerance"
                    onClick={() => {
                      formik.setFieldValue("slippageTolerance", 0.5);
                      formik.setFieldValue("customSlippageTolerance", "");
                    }}
                    sx={{ borderRadius: "20px", color: "#000" }}
                  >
                    0.5%
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    name="slippageTolerance"
                    onClick={() => {
                      formik.setFieldValue("slippageTolerance", 1);
                      formik.setFieldValue("customSlippageTolerance", "");
                    }}
                    sx={{ borderRadius: "20px", color: "#000" }}
                  >
                    1%
                  </Button>
                </Grid>
                <Grid item sx={{ width: "34%" }}>
                  <Button
                    variant="outlined"
                    sx={{ borderRadius: "20px", color: "#000", height: "36px" }}
                  >
                    <TextField
                      variant="standard"
                      placeholder="Others"
                      name="slippageTolerance"
                      onChange={(e) => {
                        if (e.target.value >= 1 && e.target.value <= 5) {
                          e.preventDefault();
                          formik.handleChange(e);
                          formik.setFieldValue(
                            "customSlippageTolerance",
                            e.target.value
                          );
                        } else {
                          e.preventDefault();
                          formik.setFieldValue(
                            "slippageTolerance",
                            formik.values.slippageTolerance
                          );
                        }
                      }}
                      value={formik.values.customSlippageTolerance}
                      sx={{ outline: "none", border: "none" }}
                      InputProps={{
                        endAdornment: <p>%</p>,
                        disableUnderline: true,
                      }}
                      //   inputProps={{
                      //     type: "number",
                      //     min: 1,
                      //     max: 5
                      //   }}
                    />
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="form-group">
            <div>
              <LoadingButton
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
                onClick={formik.handleSubmit}
              >
                Place Market Order
              </LoadingButton>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <Container sx={{ width: "fit-content" }}>
      <Card sx={{ mt: 4, backgroundColor: "#84a1ff", color: "white" }}>
        <Box sx={{ p: 4, width: 350 }}>
          <FormikProvider value={formik}>
            <Form
              onSubmit={formik.handleSubmit}
              style={{ display: "contents" }}
            >
              <MainForm />
            </Form>
          </FormikProvider>
        </Box>
      </Card>
    </Container>
  );
}
