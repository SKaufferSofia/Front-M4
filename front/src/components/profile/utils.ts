const formatOrderDateTime = (dateStr: string) => {
  const date = new Date(dateStr);

  const optionsDate: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", optionsDate);

  return `${formattedDate}`;
};

export default formatOrderDateTime;
