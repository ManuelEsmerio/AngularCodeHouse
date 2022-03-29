enum Type {
  Error,
  Warning,
  Info,
  Success
}

export interface Message {
  img: string,
  type: Type,
  class: string[],
  alt: string,
  message: string,
}
