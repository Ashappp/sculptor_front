import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://sculptor.goit.co.ua/api',
  // baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// set token to all request if Token have
const getToken = JSON.parse(localStorage.getItem('user'));
if (getToken) {
  axios.defaults.headers.common.Authorization = `Bearer ${getToken.token}`;
}

const register = ({ email, password, name }) =>
  axiosInstance
    .post('/register', {
      email,
      password,
      name,
    })
    .then(res => res.data)
    .catch(err => err);

const login = ({ username, password }) =>
  axiosInstance
    .post('/login', {
      username,
      password,
    })
    .then(res => ({
      userId: res.data.userId,
      token: res.data.token,
    }))
    .catch(err => err);

const getGoals = ({ userId, token }) =>
  axiosInstance
    .get(`/goal/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => res.data);

const newGoal = ({ data }) => {
  return axiosInstance.post('/goal', data).then(res => res.data);
};

const updateGoal = ({ goalId, fields }) =>
  axiosInstance.put(`/goal/${goalId}`, fields).then(res => res.data);

const deleteTaskInEditGoal = taskID => axiosInstance.delete(`/task/${taskID}`);

const updateTaskActiveDates = ({ taskId, taskActiveDates }) =>
  axiosInstance.put(
    `/task/dates/${taskId}`,
    JSON.stringify({
      taskActiveDates,
    }),
  );

const deleteGoalFromDb = goalId => axiosInstance.delete(`/goal/${goalId}`);

const updateAllGoalInfo = (goalId, updateObject) =>
  axiosInstance.put(`/goal/${goalId}`, JSON.stringify(updateObject));

const deleteOneTaskActiveDate = ({ taskActiveDayId, taskId }) =>
  axiosInstance
    .delete(`/task/active/${taskId}`, {
      data: {
        taskActiveDayId,
      },
    })
    .then(res => res.data);

const changeStatusOneTaskActiveDate = ({ taskActiveDayId, isDone, taskId }) =>
  axiosInstance
    .put(`/task/active/${taskId}`, {
      taskActiveDayId,
      isDone,
    })
    .then(res => res.data);

export default {
  register,
  login,
  getGoals,
  newGoal,
  updateGoal,
  deleteTaskInEditGoal,
  updateTaskActiveDates,
  deleteGoalFromDb,
  updateAllGoalInfo,
  deleteOneTaskActiveDate,
  changeStatusOneTaskActiveDate,
};
