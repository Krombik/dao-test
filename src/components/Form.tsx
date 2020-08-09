import React, { FC, useState, ChangeEvent, useCallback } from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import { StyledForm, StyledFormActions } from "./styled";
import Button from "@material-ui/core/Button";
import CartIcon from "icons/CartIcon";
import Typography from "@material-ui/core/Typography";
import FormListItem from "./FormListItem";
import { action } from "@storybook/addon-actions";

const Form: FC = () => {
  const data = [
    { id: 0, type: "500 г", price: 500 },
    { id: 1, type: "100 г", price: 150 },
    { id: 2, type: "50 г", price: 90 },
  ];

  const [currIndex, setCurrIndex] = useState(0);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setCurrIndex(+event.target.value);
    action("set current index")(+event.target.value);
  }, []);

  const handleSubmit = () => {
    action("submit")(data[currIndex]);
  };

  return (
    <StyledForm>
      <Grid component={FormControl} container spacing={4}>
        <Grid item container justify="space-between">
          <Grid component={Typography} item variant="h6">
            Тип
          </Grid>
          <Grid component={Typography} item variant="h6">
            Ціна
          </Grid>
        </Grid>
        <Grid
          component={RadioGroup}
          container
          item
          spacing={3}
          value={currIndex}
          onChange={handleChange}
        >
          {data.map((item, index) => (
            <FormListItem
              key={index}
              active={index === currIndex}
              item={item}
              index={index}
            />
          ))}
        </Grid>
        <StyledFormActions
          item
          container
          alignItems="center"
          spacing={4}
          justify="center"
        >
          <Grid component={Typography} item variant="h5" align="right" xs={5}>
            {data[currIndex].price} грн
          </Grid>
          <Grid item xs={7}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<CartIcon />}
              onClick={handleSubmit}
            >
              До кошика
            </Button>
          </Grid>
        </StyledFormActions>
      </Grid>
    </StyledForm>
  );
};

export default Form;
