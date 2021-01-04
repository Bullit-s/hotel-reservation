import React, { Component } from "react";
import { IStateContext, HandleFormChange, RoomsObject } from "../models/models";
import { items } from "./data";
import { FilterValues } from "../components/RoomsFilter";

const RoomContext = React.createContext<RoomsObject | null>(null);

class RoomProvider extends Component<{}, IStateContext> {
  public readonly state: Readonly<IStateContext> = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };

  public componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room: any) => room.featured === true);

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
    });
  }

  public render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          onChangeFilters: this.onChangeFilters
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }

  private formatData = (items: any) =>
    items.map((item: any) => {
      let id = item.sys.id;
      let images = item.fields.images.map(
        (image: any) => image.fields.file.url
      );

      return { ...item.fields, images, id };
    });

  private getRoom = (slug: string) => {
    const tempRooms = [...this.state.rooms];
    return tempRooms.find((room: any) => room.slug === slug);
  };

  private onChangeFilters: HandleFormChange<FilterValues> = (_, values) => {
    const { rooms } = this.state;
    const { type, capacity, price, size, breakfast, pets } = values;
    let tempRooms = [...rooms];

    if (type && type !== "Все") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }

    if (capacity && capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }

    if (price) {
      const [minPrice, maxPrice] = price;
      tempRooms = tempRooms.filter(
        room => room.price >= minPrice && room.size <= maxPrice
      );
    }

    if (size) {
      const [minSize, maxSize] = size;
      tempRooms = tempRooms.filter(
        room => room.size >= minSize && room.size <= maxSize
      );
    }

    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }

    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }

    this.setState({
      sortedRooms: tempRooms
    });
  };
}

const RoomConsumer = RoomContext.Consumer;

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const withRoomConsumer = <P extends {}>(
  Component: React.ComponentClass<P> | React.StatelessComponent<P>
): React.FC<any> => props => {
  return (
    <RoomConsumer>
      {value => <Component {...props} context={value} />}
    </RoomConsumer>
  );
};

export { RoomProvider, RoomConsumer, RoomContext };
