export type ApiResponseType<Type> = {
  error: {
    code: number;
    message: string;
  };
  payload: Type;
};
