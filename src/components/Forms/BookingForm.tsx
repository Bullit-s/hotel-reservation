import React from "react";
import { FormInstance } from "antd/es/form";
import { BookingParams } from "../../api/booking/bookingRoom";
import { Form } from "antd";
import { RangePicker } from "../ui/RangePicker";
import { HandleFormChange } from "../../core/models/models";

export type BookingFormValues = Omit<BookingParams, "roomSlug">;

export interface BookingFormParams {
  values?: BookingFormValues;
  form: FormInstance;
  onSubmit: (values: BookingParams) => void;
  onValuesChange: HandleFormChange<BookingFormValues>;
}

export const BookingForm = ({
  values,
  form,
  onSubmit,
  onValuesChange
}: BookingFormParams) => {
  return (
    <Form
      form={form}
      onFinish={onSubmit}
      onValuesChange={onValuesChange}
      layout="vertical"
      name="auth-form"
      hideRequiredMark={true}
    >
      <RangePicker dateFrom={values?.dateFrom} dateTo={values?.dateTo} />
    </Form>
  );
};
