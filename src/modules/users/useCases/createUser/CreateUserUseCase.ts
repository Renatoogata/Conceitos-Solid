import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../model/User";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailAlreadyExists = this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new Error("Email already exists");
    }

    const newUser = this.usersRepository.create({ email, name });

    return newUser;
  }
}

export { CreateUserUseCase };
