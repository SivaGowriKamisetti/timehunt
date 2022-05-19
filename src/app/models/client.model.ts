export class Client {
  constructor(
    public name: string,
    public code: string,
    public email: string,
    public location: string,
    public projectname: string,
    public description: string,
    public users: string,
    public deadline: string,
    public id?: string
  ) {}
}
