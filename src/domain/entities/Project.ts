export class Project {
  constructor(
    public name: string,
    public description: string,
    public communityLink: string,
    public applications: string[],
    public deliveryDate: Date,
    public type: string,
    public status?: string,
    public active?: string,
    public readonly ongId?: string,
    public readonly _id?: string,
  ) {}
}
