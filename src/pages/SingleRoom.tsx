import React, { Component } from 'react';
import defaultImg from "../assets/images/room-1.jpeg";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../store/context';
import StyledCover from '../components/StyledCover';

interface IPropsSingleRoom {
    match: any;
    getRoom: (slug: string) => any;
}

interface IStateSingleRoom {
    slug: string;
    defaultbcg: string;
}

export default class SingleRoom extends Component<IPropsSingleRoom, IStateSingleRoom> {

    constructor(props: IPropsSingleRoom) {
        super(props)
    
        this.state = {
            slug: this.props.match.params.slug,
            defaultbcg: defaultImg
        }
    }

    // Providing Context
    static contextType = RoomContext;
    
    public render() {
        // console.log("props", this.props);
        const { getRoom } = this.context;
        const room: any = getRoom(this.state.slug);

        if (!room) {
            return (
                <div className="error">
                    <h3>no such room could be found...</h3>
                    <Link to="/rooms" className="btn-primary">Все номера</Link>
                </div>
            );
        }

        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
        const [mainImg, ...defaultImg] = images;
        return (
            <React.Fragment>
               <StyledCover img={mainImg || this.state.defaultbcg}>
                   <Banner title={`${name} room`} >
                       <Link to="/rooms" className="btn-primary">Все номера</Link>
                   </Banner>
               </StyledCover>
               <section className="single-room">
                   <div className="single-room-images">
                       {defaultImg.map((item: string, index: number) => {
                          return <img key={index} src={item} alt={name} />
                       })}
                   </div>
                   <div className="single-room-info">
                       <article className="desc">
                           <h3>Описание</h3>
                           <p>{description}</p>
                       </article>
                       <article className="info">
                           <h3>Информация</h3>
                           <h6>Цена : ${price}</h6>
                           <h6>Размеры : {size} кв.м.</h6>
                           <h6>Вмещаемость: { capacity > 1 ? `${capacity} гостей` : `${capacity} гость` }</h6>
                           <h6>{pets ? "Питомцы разрешены" : "Питомцы запрещены"}</h6>
                           <h6>{breakfast && "Бесплатный завтрак"}</h6>
                       </article>
                   </div>
               </section>
               <section className="room-extras">
                   <h6>Дополнительно</h6>
                   <ul className="extras">
                       {extras.map((item: string, index: number) => {
                           return <li key={index}>- {item}</li>
                       })}
                   </ul>
               </section>
            </React.Fragment>
        )
    }
}