import React from 'react';

const Banner = () => {
    const banners = [
        {
            id: 1,
            img: "https://i.ibb.co/hCD5Dvz/pexels-ron-lach-8466658-1.jpg",
            prev: 3,
            next: 2,
        },
        {
            id: 2,
            img: "https://i.ibb.co/w4nzSKf/pexels-taryn-elliott-4112600.jpg",
            prev: 1,
            next: 3,
        },
        {
            id: 3,
            img: "https://i.ibb.co/xmK40JK/pexels-polina-tankilevitch-5418581.jpg",
            prev: 2,
            next: 1,
        }
    ]
    return (
        <div>
            <div className="carousel w-full rounded-md ">
                {
                    banners.map(banner =>
                        <div id={`slide${banner.id}`} key={banner.id} className=" carousel-item relative w-full" >
                            < div className='w-full'  >
                                <img alt='logo' src={banner.img} className="brightness-50 w-full relative h-96" />
                                <div className='absolute left-0 top-0 bottom-0 right-0 w-3/5 mx-auto flex justify-center items-center'>
                                    <div className='text-center'>
                                        <h2 className='text-xl lg:text-5xl capitalize text-primary font-bold'>Old stuff doesn't mean give away, sell now</h2>
                                        <button className="btn btn-primary mt-3">buy now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href={`#slide${banner.prev}`} className="btn btn-circle">❮</a>
                                <a href={`#slide${banner.next}`} className="btn btn-circle">❯</a>
                            </div>
                        </div>)
                }


            </div >
        </div >
    );
};

export default Banner;