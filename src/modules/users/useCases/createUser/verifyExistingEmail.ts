import { UsersRepository } from "../../repositories/implementations/UsersRepository";

function verifyExistingEmail(request, response, next) {
  const usersRepository = UsersRepository.getInstance();

  const { email } = request.body;

  const emailAlreadyExists = usersRepository.findByEmail(email);

  if (emailAlreadyExists) {
    return response.status(400).json({ error: "Email already exists" });
  }

  return next();
}

export { verifyExistingEmail };
