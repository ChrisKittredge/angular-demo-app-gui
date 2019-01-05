export interface UserArgs {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;

  constructor(args: UserArgs) {
    this.id = args.id;
    this.firstName = args.firstName;
    this.lastName = args.lastName;
    this.email = args.email;
  }
}