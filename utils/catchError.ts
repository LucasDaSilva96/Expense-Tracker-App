export const catchError = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  } else {
    console.error(error);
    return 'An error occurred. See the console for more information.';
  }
};
