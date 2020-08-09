import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import { StyledRadio, StyledFormListItem } from "./styled";
import RadioCheckedIcon from "icons/RadioCheckedIcon";
import RadioUncheckedIcon from "icons/RadioUncheckedIcon";
import { TeaData } from "type";

type Props = {
  item: TeaData;
  active: boolean;
  index: number;
};

const FormListItem: FC<Props> = ({ item, active, index }) => (
  <StyledFormListItem
    item
    container
    alignItems="center"
    justify="space-between"
    active={active}
  >
    <Grid item container spacing={4} alignItems="center" xs>
      <Grid item>
        <StyledRadio
          value={index}
          color="primary"
          icon={<RadioUncheckedIcon />}
          checkedIcon={<RadioCheckedIcon />}
        />
      </Grid>
      <Grid item>{item.type}</Grid>
    </Grid>
    <Grid item className="price">
      {item.price} грн
    </Grid>
  </StyledFormListItem>
);

export default FormListItem;
