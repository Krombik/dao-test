import React from "react";
import Grid, { GridProps } from "@material-ui/core/Grid";
import styled, { ThemeProps, css } from "styled-components";
import Radio from "@material-ui/core/Radio";
import { Theme } from "@material-ui/core";

export const StyledRadio = styled(Radio)`
  padding: 0;
  height: 24px;
  width: 24px;
`;

export const StyledForm = styled.div`
  margin: auto;
  max-width: 335px;
  min-width: 320px;
  background: ${({ theme }: ThemeProps<Theme>) =>
    theme.palette.background.default};
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  padding: ${({ theme }: ThemeProps<Theme>) => theme.spacing(6, 6, 10)};
`;

export const StyledFormActions = styled(Grid)`
  padding-top: ${({ theme }: ThemeProps<Theme>) =>
    theme.spacing(6)}px !important;
`;

const greyMixin = css`
  color: ${({ theme }: ThemeProps<Theme>) => theme.palette.grey[100]};
`;
const boldMixin = css`
  .price {
    font-weight: bold;
  }
`;

type StyledFormListItemProps = { active: boolean };

export const StyledFormListItem = styled(
  ({ active, ...props }: GridProps & StyledFormListItemProps) => (
    <Grid {...props} />
  )
)`
  ${({ active }: StyledFormListItemProps) => (active ? boldMixin : greyMixin)}
  transition: ${({ theme }: ThemeProps<Theme>) =>
    theme.transitions.create(["color", "font-weight"])}  
`;
