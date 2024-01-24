import axios from './axios';

export const getTaskRequest= (id) => axios.get(`/tasks/${id}`);

export const getTasksRequest= () => axios.get(`/tasks`);

export const getAllTasks= () => axios.get('/admintasks');

export const createTaskRequest= (task) => axios.post(`/tasks`,task);

export const updateTaskRequest= (id,task) => axios.put(`/tasks/${id}`,task);

export const deleteTaskRequest= (id) => axios.delete(`/tasks/${id}`);