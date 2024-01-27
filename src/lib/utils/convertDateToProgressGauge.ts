export const convertDateToProgressGauge = (
  startDateStr: string,
  endDateStr: string,
) => {
  const currentDate = Date.now();
  const startDate = new Date(startDateStr).getTime();
  const endDate = new Date(endDateStr).getTime();

  if (startDate === endDate) {
    return 100;
  }

  return ((currentDate - startDate) / (endDate - startDate)) * 100;
};
