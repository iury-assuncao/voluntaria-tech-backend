export class Application {
  constructor(
    public voluntaryId: string,
    public status: string,
    public readonly projectId: string,
    public readonly id?: string,
  ) {}
}
