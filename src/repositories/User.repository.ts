import {User} from '../models';
import {IUser} from '../utilities';

export class UserRepository {
  constructor() {}

  async getAllUsers() {
    return User.findAll();
  }

  async createUser(body: IUser) {
    return User.create(body);
  }

  async findUserById(id: number) {
    return User.findByPk(id);
  }

  async updateUser(body: IUser) {
    return User.update(body, {where: {id: body.id}});
  }
}
