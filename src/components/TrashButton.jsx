/* eslint-disable */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';

const styles = theme => ({
  button: {
    margin: 0,
  },
  input: {
    display: 'none',
  },
});

const DeleteButton = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function IconButtons(props) {
  const { classes } = props;
  return <DeleteButton />;
}

export default withStyles(styles)(IconButtons);
