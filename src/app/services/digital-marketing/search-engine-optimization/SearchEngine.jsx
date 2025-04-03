'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SerImg from '../../../../assets/search-engine.png';
import { Button } from 'react-bootstrap';
import "../DigiMrkt.css";

export default function SearchEngine() {
    const router = useRouter();

    const handlebtn = () => {
        router.push('/contact');
    };

    return (
        <div>            
            <div className='web-soln-top'>
                <div className='web-soln-top-img-container'>
                    <Image src={SerImg} alt='Search Engine Optimization' priority />
                </div>
                <div className='web-soln-top-txt-container'>
                    <h1><span className='title-blue'>SEARCH ENGINE</span> <span className='title-orange'>OPTIMIZATION</span></h1>
                    <p>Optimize and Elevate Your Online Presence with Expert SEO Services</p>
                    <p>Welcome to AL KATEF IT SOLUTIONS, your partner in achieving online visibility and success through advanced Search Engine Optimization (SEO) services. Our team of seasoned experts employs cutting-edge techniques to ensure your website stands out in search engine results, driving targeted traffic and maximizing your online impact.</p>
                    <p>Strategic keyword optimization for enhanced visibility</p>
                    <p>Regular monitoring and adaptation to evolving search engine algorithms</p>
                    <p>On-page and off-page optimization for comprehensive results</p>
                    <p>Localized SEO strategies for businesses in the UAE</p>
                    <Button onClick={handlebtn} variant="primary">Contact Us</Button>
                </div>
            </div>
        </div>
    );
}
