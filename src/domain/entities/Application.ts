export class Application {
  constructor(
    public voluntaryId: string,
    public status: string,
    public readonly projectId: string,
    public availability: string,
    public description: string,
    public readonly _id?: string,
  ) {}
}
