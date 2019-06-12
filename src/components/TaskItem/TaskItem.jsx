/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircle from '@material-ui/icons/CheckCircle';

import { changeTaskToDone, deleteTaskFromThisDay } from './cardTaskItemAction';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  cursor: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/happy.png'),
    auto;
`;

// icon status
const ItemStatus = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: ${props => props.color || '#fff'};
  border: 1px solid ${props => props.color || '#ccc'};
`;
// text
const ItemDescription = styled.p`
  padding-left: 1.5rem;
  color: #454545;
  font-size: 1.4rem;
  font-family: 'Roboto Light';
  flex: 1;
  text-decoration: ${props => (props.isDone ? 'line-through' : 'none')};
`;

const MoveToTrash = styled.div`
  opacity: 0.3;
  transition: 0.5s;

  ${Item}:hover & {
    opacity: 1;
    transition: 0.5s;
  }
`;

const StyledCheckBox = styled(Checkbox)`
  && {
    color: ${prop => prop.color};
  }
`;

const TaskItem = ({ data, changeTaskToDone, deleteTaskFromThisDay }) => {
  return (
    <Item
      isDone={data.isDone}
      onClick={() =>
        changeTaskToDone({
          taskId: data.taskId,
          taskActiveDayId: data.taskActiveDateId,
          isDone: !data.isDone,
          goalId: data.goalId,
        })
      }
    >
      <StyledCheckBox
        color={data.color}
        checked={data.isDone}
        icon={<RadioButtonUnchecked fontSize="small" />}
        checkedIcon={<CheckCircle fontSize="small" />}
      />

      <ItemDescription isDone={data.isDone}>{data.title}</ItemDescription>
      <MoveToTrash>
        <IconButton
          aria-label="Delete"
          size="small"
          tabIndex={0}
          onClick={e => {
            e.stopPropagation();
            deleteTaskFromThisDay({
              taskId: data.taskId,
              taskActiveDayId: data.taskActiveDateId,
              goalId: data.goalId,
            });
          }}
        >
          <DeleteIcon fontSize="small" size="small" />
        </IconButton>
      </MoveToTrash>
    </Item>
  );
};

const mdtp = dispatch => ({
  changeTaskToDone: ({ taskId, taskActiveDayId, isDone, goalId }) =>
    dispatch(changeTaskToDone({ taskId, taskActiveDayId, isDone, goalId })),
  deleteTaskFromThisDay: ({ taskId, taskActiveDayId, goalId }) =>
    dispatch(deleteTaskFromThisDay({ taskId, taskActiveDayId, goalId })),
});

export default connect(
  null,
  mdtp,
)(TaskItem);
