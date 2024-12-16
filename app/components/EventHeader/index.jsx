'use client'
import Image from 'next/image';
import logo from '../../assets/images/logo.png';
import { Fade } from "react-awesome-reveal";
import React, {useCallback, useEffect, useRef} from "react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function EventHeader({animate}) {
    SwiperCore.use([Autoplay, Navigation]);

    return (
        <>
            <div className='event-header'>
                <div className='header-tab-nav-container'>
                    <div className='header-tab'>
                        <Image src={logo} alt={'logo'} style={{width: '10vw', borderRadius:'16px'}}></Image>
                        <p> &nbsp;Poodle</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default EventHeader;
