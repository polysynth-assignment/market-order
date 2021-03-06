import React, { Fragment, useState, useEffect } from "react";
import {
  Container,
  Card,
  Box,
  TextField,
  Slider,
  Typography,
  Grid,
  Button,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Alert,
  AlertTitle,
} from "@mui/material";
import * as Yup from "yup";
import { FormikProvider, useFormik } from "formik";
import { FaWallet } from "react-icons/fa";
import { LoadingButton } from "@mui/lab";
import { Table } from "reactstrap";

const alertDiaStyle = {
  width: "max-content",
  textAlign: "center",
  margin: "auto",
  display: "flex",
  float: "right",
  marginRight: "1rem",
};
export default function Order() {
  const [formData, setformData] = useState({});
  const [showTable, setshowTable] = useState(false);
  const [showSuccess, setshowSuccess] = useState(false);
  const { amountUSDP, amountETH, leverage, slippageTolerance } = formData;

  const initialValues = {
    amountUSDP: "",
    amountETH: "",
    leverage: 1,
    slippageTolerance: 0.5,
    usdpAutoCalc: false,
    ethAutoCalc: false,
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
    onSubmit: () => {
      formik.setSubmitting(true);
      setTimeout(() => {
        formik.setSubmitting(false);
      }, 2000);
      setshowTable(true);
      setshowSuccess(true);
      setTimeout(() => {
        setshowSuccess(false);
      }, 2000);
      setformData(formik.values);
    },
  });
  const { isSubmitting } = formik;

  useEffect(() => {
    if (formik.values.ethAutoCalc) {
      formik.setFieldValue(
        "amountETH",
        (formik.values.amountUSDP * 1000) / formik.values.leverage
      );
    } else if (formik.values.usdpAutoCalc) {
      formik.setFieldValue(
        "amountUSDP",
        (formik.values.amountETH * formik.values.leverage) / 1000
      );
    }
  }, [formik.values.leverage]);

  return (
    <Fragment>
      {showSuccess && (
        <Alert severity="success" sx={alertDiaStyle}>
          <AlertTitle>Success</AlertTitle>
        </Alert>
      )}

      <Container sx={{ width: "fit-content" }}>
        <Card sx={{ mt: 4, backgroundColor: "#84a1ff", color: "white" }}>
          <Box sx={{ p: 4, width: 350 }}>
            <FormikProvider>
              <div className="col-md-6 col-sm-12">
                <div className="form-group">
                  <div>
                    <Grid container spacing={0}>
                      <Grid item>
                        <Typography gutterBottom sx={{ color: "#000" }}>
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
                      helperText={
                        <span>
                          <FaWallet /> $ abcd
                        </span>
                      }
                      type="number"
                      onChange={(e) => {
                        formik.handleChange(e);
                        formik.setFieldValue("usdpAutoCalc", false);
                        formik.setFieldValue("ethAutoCalc", true);
                        formik.setFieldValue(
                          "amountETH",
                          (e.target.value * 1000) / formik.values.leverage
                        );
                      }}
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
                        <Typography gutterBottom sx={{ color: "#000" }}>
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
                        type="number"
                        onChange={(e) => {
                          formik.handleChange(e);
                          formik.setFieldValue("ethAutoCalc", false);
                          formik.setFieldValue("usdpAutoCalc", true);
                          formik.setFieldValue(
                            "amountUSDP",
                            (e.target.value * formik.values.leverage) / 1000
                          );
                        }}
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
                          sx={{
                            borderRadius: "20px",
                            color: "#000",
                            height: "36px",
                          }}
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
                      disabled={
                        formik.values.amountETH === "" ||
                        formik.values.amountUSDP === ""
                      }
                      loading={isSubmitting}
                      variant="contained"
                      sx={{ mt: 3 }}
                      onClick={formik.handleSubmit}
                    >
                      Place Market Order
                    </LoadingButton>
                  </div>
                </div>
              </div>
            </FormikProvider>
          </Box>
        </Card>
      </Container>

      {showTable && (
        <Table style={{ display: "inline" }}>
          <TableHead>
            <TableRow>
              <TableCell>AmountUSDP</TableCell>
              <TableCell>AmountETH</TableCell>
              <TableCell>Leverage</TableCell>
              <TableCell>Slippage Tolerance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{amountUSDP}</TableCell>
              <TableCell>{amountETH}</TableCell>
              <TableCell>{leverage}</TableCell>
              <TableCell>{slippageTolerance}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
    </Fragment>
  );
}
