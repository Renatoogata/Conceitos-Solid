import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("The user do not exists!");
    }

    const updateUser = this.usersRepository.turnAdmin(user);

    return updateUser;
  }
}

export { TurnUserAdminUseCase };
