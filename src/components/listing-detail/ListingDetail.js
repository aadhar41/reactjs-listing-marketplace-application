import React from 'react';
import './ListingDetail.css';

function ListingDetail() {
    return (
        <div className='listing-detail'>
            <div className='listing-detail-content'>
                <img className="listing-detail-img" src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=3352&h=2286&dpr=1' />
                <h1 className='listing-detail-title'>
                    Awesome Property
                    <div className='listing-detail-action'>
                        <i class="listing-detail-action-icon fa-solid fa-pen-to-square"></i>
                        <i class="listing-detail-action-icon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className='listing-detail-meta-info'>
                    <span className='listing-detail-author'>Author - <strong>John Doe</strong></span>
                    <span className='listing-detail-time'>1 day ago</span>
                </div>
                <p className='listing-detail-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laborum natus beatae molestias obcaecati sint dolorum atque, nam possimus enim! Distinctio natus accusamus explicabo nam, eius accusantium. Eos, mollitia ex.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quas dolore nostrum officia, atque possimus doloribus eius voluptatum tempore ratione earum dicta facere voluptate repudiandae a fugiat. Natus, harum nam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, a sed, nostrum, veniam ex eius id nam corporis ratione voluptatibus maxime cupiditate expedita est maiores aliquid cum minima quisquam labore?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto labore commodi eaque fugiat id? Omnis ea nisi voluptatum iure obcaecati, eveniet necessitatibus architecto, accusantium libero dolor perferendis! Doloribus, odio cumque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus commodi quo vero dignissimos perferendis ab voluptate obcaecati, quas fugiat cumque suscipit porro omnis esse fuga vitae voluptatum, voluptas iusto. Odio?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, officia? Vitae sunt inventore necessitatibus deserunt. Laboriosam vero consectetur iste ullam iure, quo porro quidem itaque quae omnis ea ducimus nulla.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, corporis officia? Molestiae alias rem provident mollitia, consequatur veniam cumque velit adipisci? Incidunt sapiente odit est quis repellat iure quasi commodi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam tempore maxime provident repellendus! Obcaecati ab dolorum eveniet ut mollitia? Laboriosam numquam nostrum perspiciatis corporis atque temporibus adipisci modi unde.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque error omnis consectetur autem labore? Ipsam, ipsa vel. Dolore neque veritatis ipsum dicta! Ducimus nostrum molestiae nam, odio quasi saepe tempora.
                </p>
            </div>
        </div>
    )
}

export default ListingDetail