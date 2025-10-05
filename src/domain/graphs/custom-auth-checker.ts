export class CustomAuthChecker implements AuthCheckerInterface<ContextType> {
  constructor(
    // Dependency injection
    private readonly userRepository: Repository<User>,
  ) { }

  check({ root, args, context, info }: ResolverData<ContextType>, roles: string[]) {
    const userId = getUserIdFromToken(context.token);
    // Use injected service
    const user = this.userRepository.getById(userId);

    // Custom logic, e.g.:
    return user % 2 === 0;
  }
}