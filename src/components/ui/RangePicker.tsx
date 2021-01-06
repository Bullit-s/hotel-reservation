import React from "react";
import { Button, DatePicker, Form } from "antd";
import { Moment } from "moment";
import styled from "styled-components";
import { disabledRange } from "../../core/helpers/dateHelpers";
import { required } from "../../core/helpers/formRules";

interface IProps {
  dateTo?: Moment;
  dateFrom?: Moment;
}

export const RangePicker = ({ dateTo, dateFrom }: IProps) => {
  const handleDisabledFrom = (current: Moment) => {
    return disabledRange({ current, dateTo, dateFrom, type: "from" });
  };

  const handleDisabledTo = (current: Moment) => {
    return disabledRange({ current, dateTo, dateFrom, type: "to" });
  };
  return (
    <>
      <RangeWrapper>
        <Form.Item colon={false} name={"dateFrom"} rules={[required()]}>
          <DatePicker
            size={"large"}
            disabledDate={handleDisabledFrom}
            placeholder={"Дата заезда"}
          />
        </Form.Item>
        <Form.Item colon={false} name={"dateTo"} rules={[required()]}>
          <DatePicker
            size={"large"}
            disabledDate={handleDisabledTo}
            placeholder={"Дата отъезда"}
          />
        </Form.Item>
      </RangeWrapper>
      <ButtonWrapper>
        <Button htmlType={"submit"}>Забронировать</Button>
      </ButtonWrapper>
    </>
  );
};

const RangeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
