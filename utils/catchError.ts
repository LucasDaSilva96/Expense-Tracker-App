// The catchError function is used to catch errors and return a user-friendly error message. If the error is an instance of Error, it returns the error message. Otherwise, it logs the error to the console and returns a generic error message.
export const catchError = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  } else {
    console.error(error);
    return 'An error occurred. See the console for more information.';
  }
};
