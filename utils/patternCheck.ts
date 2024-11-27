// This function checks if the email is valid or not
export const checkIfIsEmail = (email: string) => {
  const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  return regex.test(email);
};
