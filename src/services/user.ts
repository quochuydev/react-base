import { API } from '../utils/api';
import { USER_GET } from './endpoint';
import { compile } from '../utils/common';

export default {
  async list(): Promise<{ users: TODO[] }> {
    return { users: [] };
  },

  async getById(id: string): Promise<{ user: TODO }> {
    try {
      const result = await API.get(compile(USER_GET, { id }));
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    return { user: { id: id, first_name: 'first_name', email: 'user@gmail.com', gender: 2 } };
  },

  async create(data: TODO): Promise<TODO> {
    const result = { message: 'Update Success', success: true, user: { first_name: 'database' } };
    return result;
  },

  async update(query: TODO, data: TODO): Promise<TODO> {
    const result = { message: 'Update Success', success: true, user: { first_name: 'database' } };
    return result;
  },
};
