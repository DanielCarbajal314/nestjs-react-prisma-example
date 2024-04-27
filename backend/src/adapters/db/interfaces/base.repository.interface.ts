export type Page = {
  pageSize?: number;
  page?: number;
};

export interface IBaseRespository<TItem, TCreate, TUpdate> {
  create(data: TCreate): Promise<TItem>;
  update(data: TUpdate): Promise<TItem>;
  list(data: Page): Promise<TItem[]>;
  delete(id: number): Promise<void>;
  find(id: number): Promise<TItem>;
}
