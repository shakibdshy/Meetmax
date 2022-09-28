import { Avatar, Image, Indicator } from '@mantine/core'
import { IconPlus } from '@tabler/icons'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

const Story = () => {
    return (
        <>
            <div className='story-container' style={{ marginTop: "25px"}}>
                <Swiper slidesPerView={4} spaceBetween={8} navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className='story-item'>
                            <div className='story-img'>
                                <Image
                                    radius="md"
                                    height={198}
                                    fit="cover" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profile" />
                            </div>
                            <div className='create-story'>
                                <div className='story-icon'>
                                    <IconPlus />
                                </div>
                                <h4>Create Story</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='story-item'>
                            <div className='story-img'>
                                <Image
                                    radius="md"
                                    height={198}
                                    fit="cover" src="https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profile" />
                            </div>
                            <div className='story-content'>
                                <div className='story-user-pic'>
                                    <Indicator dot inline size={12} offset={5} position="bottom-end" color="green" withBorder>
                                        <Avatar style={{ border: '3px solid #2e89ff' }} size={40} src="https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=1600" radius={30} />
                                    </Indicator>
                                </div>
                                <h4>Adrienne Andersen</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='story-item'>
                            <div className='story-img'>
                                <Image
                                    radius="md"
                                    height={198}
                                    fit="cover" src="https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profile" />
                            </div>
                            <div className='story-content'>
                                <div className='story-user-pic'>
                                    <Indicator dot inline size={12} offset={5} position="bottom-end" color="green" withBorder>
                                        <Avatar style={{ border: '3px solid #2e89ff' }} size={40} src="https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=1600" radius={30} />
                                    </Indicator>
                                </div>
                                <h4>Joe Adam</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='story-item'>
                            <div className='story-img'>
                                <Image
                                    radius="md"
                                    height={198}
                                    fit="cover" src="https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profile" />
                            </div>
                            <div className='story-content'>
                                <div className='story-user-pic'>
                                    <Indicator dot inline size={12} offset={5} position="bottom-end" color="green" withBorder>
                                        <Avatar style={{ border: '3px solid #2e89ff' }} size={40} src="https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1600" radius={30} />
                                    </Indicator>
                                </div>
                                <h4>Gustavo Almeida</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='story-item'>
                            <div className='story-img'>
                                <Image
                                    radius="md"
                                    height={198}
                                    fit="cover" src="https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profile" />
                            </div>
                            <div className='story-content'>
                                <div className='story-user-pic'>
                                    <Indicator dot inline size={12} offset={5} position="bottom-end" color="green" withBorder>
                                        <Avatar style={{ border: '3px solid #2e89ff' }} size={40} src="https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1600" radius={30} />
                                    </Indicator>
                                </div>
                                <h4>Flávio Augusto</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Story