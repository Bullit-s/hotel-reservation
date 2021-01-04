import React, { useContext, useMemo } from "react";
import { RoomContext } from "../store/context";
import Title from "./Title";
import Loading from "./Loading";
import { Checkbox, Form, Select, Slider } from "antd";

interface IPropsRoomsFilter {
  rooms: any[];
}

const getUnique = (items: any[], value: any) => {
  return [...new Set(items.map(item => item[value]))];
};

export interface FilterValues {
  type?: string;
  capacity?: number;
  price?: [number, number];
  size?: [number, number];
  breakfast?: boolean;
  pets?: boolean;
}

export const filterInitialValues = {
  type: "Все",
  capacity: 1,
  price: [0, 1000],
  size: [0, 1000],
  breakfast: false,
  pets: false
};

const RoomsFilter = ({ rooms }: IPropsRoomsFilter) => {
  const [form] = Form.useForm<FilterValues>();
  const roomContext = useContext(RoomContext);

  const types = useMemo(
    () => [
      { value: "Все" },
      ...getUnique(rooms, "type").map(value => ({ value }))
    ],
    [rooms]
  );
  const capacity = useMemo(
    () => getUnique(rooms, "capacity").map(value => ({ value })),
    [rooms]
  );

  if (roomContext) {
    const { onChangeFilters } = roomContext;

    return (
      <section className="filter-container">
        <Title title="Найти номер" />
        <Form
          form={form}
          layout={"vertical"}
          initialValues={filterInitialValues}
          onValuesChange={onChangeFilters}
          requiredMark={true}
          className="filter-form"
        >
          <Form.Item label={"Тип"} name={"type"}>
            <Select style={{ width: 120 }} options={types} />
          </Form.Item>
          <Form.Item label={"Гостей"} name={"capacity"}>
            <Select style={{ width: 120 }} options={capacity} />
          </Form.Item>
          <Form.Item label={"Цена"} name={"price"}>
            <Slider
              range
              min={0}
              max={1000}
              tipFormatter={value => <div>Цена: {value}</div>}
            />
          </Form.Item>
          <Form.Item label={"Размер"} name={"size"}>
            <Slider
              range
              min={0}
              max={1000}
              tipFormatter={value => <div>Размер: {value}</div>}
            />
          </Form.Item>
          <div className="form-group">
            <Form.Item name={"breakfast"} valuePropName={"checked"}>
              <Checkbox>Завтрак</Checkbox>
            </Form.Item>
            <Form.Item name={"pets"} valuePropName={"checked"}>
              <Checkbox>Питомцы</Checkbox>
            </Form.Item>
          </div>
        </Form>
      </section>
    );
  } else {
    return <Loading />;
  }
};

export default RoomsFilter;
