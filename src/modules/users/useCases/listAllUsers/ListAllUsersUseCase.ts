import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const checkAdmin = this.usersRepository.findById(user_id);

    if (!checkAdmin.admin) {
      throw new Error("The user is not an admin");
    }

    const listAll = this.usersRepository.list();

    return listAll;
  }
}

export { ListAllUsersUseCase };
