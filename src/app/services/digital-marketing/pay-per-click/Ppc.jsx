'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import ppcImage from '../../../../assets/ppc.png';
import { Button } from 'react-bootstrap';

export default function Ppc() {
    const router = useRouter();

    const handlebtn = () => {
        router.push('/contact');
    };

    return (
        <div>
            <div className='web-soln-top'>
                <div className='web-soln-top-img-container'>
                    <Image src={ppcImage} alt='Pay-Per-Click Advertising' priority />
                </div>
                <div className='web-soln-top-txt-container'>
                    <h1><span className='title-blue'>PAY-PER-CLICK (PPC)</span> <span className='title-orange'>ADVERTISING</span></h1>
                    <p>Precision and Impact: Transform Your Reach with Google Ads and Digital Advertising</p>
                    <p>Explore new horizons and reach your target audience with pinpoint accuracy through our Google Ads and Digital Advertising services. At Al Katef IT Solutions, we specialize in creating strategic campaigns that optimize ad spend, maximize ROI, and drive conversions.</p>
                    <p>Targeted Google Ads campaigns for increased visibility</p>
                    <p>Comprehensive digital advertising strategies tailored to your business goals</p>
                    <p>Continuous monitoring and optimization for optimal performance</p>
                    <p>Data-driven insights to refine and enhance future campaigns</p>
                    <Button onClick={handlebtn} variant="primary">Contact Us</Button>
                </div>
            </div>
        </div>
    );
}
