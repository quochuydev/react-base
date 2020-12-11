import { API } from '../utils/api';
import { USER_GET } from './endpoint';
import { compile } from '../utils/common';
import { IUser } from '../common/interfaces';

export default {
  async list(): Promise<{ users: IUser[] }> {
    return { users: [] };
  },

  async getById(id: string): Promise<{ user: IUser }> {
    try {
      const result = await API.get(compile(USER_GET, { id }));
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    return {
      user: {
        id: id,
        first_name: id,
        email: id === '1' ? 'user@gmail.com' : '',
        birthday: id === '1' ? new Date('1998-12-05T01:00:00.000Z') : null,
        gender: 2,
      },
    };
  },

  async create(data: TODO): Promise<TODO> {
    const result = { message: 'Update Success', success: true, user: { first_name: 'database' } };
    return result;
  },

  async update(query: TODO, data: TODO): Promise<TODO> {
    console.log({ query, data });
    const result = { message: 'Update Success', success: true, user: { ...data, first_name: 'database' } };
    return result;
  },
};
