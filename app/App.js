'use client';
import React, {useState} from 'react';
import moment from 'moment-timezone';
import 'moment/locale/ko';
//hooks
//components
import EventHeader from './components/EventHeader';
import EventFooter from './components/EventFooter';
import Image from 'next/image';
//css
import './App.scss';

//images
import footerImage from './assets/images/footer.png';
import MainSwiper from "./components/MainSwiper";
import poodle from "./assets/images/poodle/poodle.webp";
import poodle1 from "./assets/images/poodle/poodle1.png";
import poodle2 from "./assets/images/poodle/poodle2.png";
import poodle3 from "./assets/images/poodle/poodle3.png";
import poodleComingSoon from "./assets/images/poodle/poodle-coming-soon.png";
import {Fade} from "react-awesome-reveal";
import useToast from "./hooks/useToast";
import Toast from "./components/Toast";
moment.tz.setDefault('Asia/Seoul');

function App() {
    const {toast, showToast, hideToast} = useToast();
    const [page, setPage] = useState('HOME');

    function copy(txt) {

        navigator.clipboard.writeText(txt);

        showToast('복사하였습니다.', '#4A89FF', '#fff');
    }

    return (

        <>
            <div className='event-page'>
                <EventHeader animate={true}/>
                {page === 'HOME' ?
                    <>
                        <div>
                            <Image src={poodle} alt={'poodle'}></Image>
                        </div>
                        <div className='poodle-home'>

                            <Fade cascade damping={1}>
                                <p>Hello, Friends !</p>
                                <p>I'm <strong> Poodle</strong>, Not Doodle !</p>
                            </Fade>
                        </div>

                        <MainSwiper key={0} sliderImages={[
                            {src: poodle1, title: 'poodle1'},
                            {src: poodle2, title: 'poodle2'},
                            {src: poodle3, title: 'poodle3'},
                        ]} delay={3000}/>

                        <div className='poodle-description'>
                            <Fade cascade damping={1}>
                                <p>Hello there, my favorite human!</p>
                                <p>Oh my gosh, I’ve been waiting for you all day!</p>
                                <p>Look at my tail—it’s wagging just for you!</p>
                                <p>Let’s have the best time ever!</p>
                            </Fade>
                        </div>

                        <div className='poodle-info'>
                            <Fade cascade damping={1}>
                                <p><strong>Poodle(PODL)</strong>is ON PancakeSwap</p>
                                <button style={{
                                    backgroundColor: '#A1D6B2',
                                    borderRadius: '6px',
                                    width: '30vw',
                                    height: '5vh'
                                }}
                                        onClick={() => {
                                            window.location.href = 'https://pancakeswap.finance/?outputCurrency=0x3FFD7a9c0be83c8f19780fE5f37AA92C2Be792bA&inputCurrency=ETH'
                                        }}>PancakeSwap
                                </button>
                            </Fade>
                            <Fade cascade damping={1}>
                                <p><strong>Poodle(PODL)</strong>is ON Uniswap</p>
                                <button style={{
                                    backgroundColor: '#A1D6B2',
                                    borderRadius: '6px',
                                    width: '30vw',
                                    height: '5vh'
                                }}
                                        onClick={() => {
                                            window.location.href = 'https://app.uniswap.org/explore/tokens/base/0x3ffd7a9c0be83c8f19780fe5f37aa92c2be792ba'
                                        }}>Uniswap
                                </button>
                            </Fade>
                        </div>
                    </>
                    :
                    <>
                    </>
                }
                {page === 'BRIDGE' ?
                    <>
                        <div className='poodle-coming-soon'>
                            <Image src={poodleComingSoon} alt={'poodleComingSoon'}></Image>
                        </div>
                    </>
                    :
                    <>
                    </>
                }
                {page === 'STAKING' ?
                    <>
                        <div className='poodle-coming-soon'>
                            <Image src={poodleComingSoon} alt={'poodleComingSoon'}></Image>
                        </div>
                    </>
                    :
                    <>
                    </>
                }
                {page === 'GAME' ?
                    <>
                        <div className='poodle-coming-soon'>
                            <Image src={poodleComingSoon} alt={'poodleComingSoon'}></Image>
                        </div>
                    </>
                    :
                    <>
                    </>
                }
                <EventFooter footerImage={footerImage} page={page} setPage={setPage}/>
            </div>
            {toast.isVisible &&
                <Toast message={toast.message} backgroundColor={toast.backgroundColor} color={toast.color}
                       onClose={hideToast}/>}
        </>
    );
}

export default App;
