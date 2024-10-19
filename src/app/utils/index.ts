export const isValidDateTime = (dateTimeString: string): boolean => {
  const iso8601Regex =
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/;
  if (!iso8601Regex.test(dateTimeString)) {
    return false;
  }

  const date = new Date(dateTimeString);
  return !isNaN(date.getTime());
};
