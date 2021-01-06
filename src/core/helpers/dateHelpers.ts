import moment, { Moment } from "moment";

export const isFutureDate = (current: Moment) => {
  return current && current > moment().endOf("day");
};

interface DisabledRangeParams {
  current: Moment;
  type: "from" | "to";
  dateTo?: Moment;
  dateFrom?: Moment;
}

export const disabledRange = ({
  current,
  dateTo,
  dateFrom,
  type
}: DisabledRangeParams) => {
  if (!isFutureDate(current)) {
    return true;
  } else if (type === "from" && dateTo && dateTo <= current) {
    return true;
  } else if (type === "to" && dateFrom && dateFrom >= current) {
    return true;
  }
  return false;
};

export const toMomentFormattedDate = (date: string, format: string) =>
  moment(date).format(format);

export const dateFormats = {
  YearMonthDayDate: "YYYY-MM-DD",
  DayMonthYearDate: "DD-MM-YYYY"
};
