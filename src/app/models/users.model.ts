export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    
    public email: string,
    public department: string,
    public phone:number,
   public id?:string
  ) {}
}
