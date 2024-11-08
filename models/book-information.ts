export class BookInformation {
  constructor(
    public statusBook?: String,
    public bookTitle?: String,
    public authorName?: String,
    public rating?: String,
    public abstract?: String,
    public image?: String,
    public textStyle?: textStyle[],
  ) {}
}

export class textStyle {
  constructor(
    public label?: string,
  ) {}
}