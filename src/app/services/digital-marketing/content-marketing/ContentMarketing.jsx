'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
import contentImg from '../../../../assets/content-mrkt.png';

export default function ContentMarketing() {
    const router = useRouter();

    const handlebtn = () => {
        router.push('/contact');
    };

    return (
        <div>
            <div className='web-soln-top'>
                <div className='web-soln-top-img-container'>
                    <Image src={contentImg} alt="Content Marketing" priority />
                </div>
                <div className='web-soln-top-txt-container'>
                    <h1><span className='title-blue'>Content </span> <span className='title-orange'>Marketing</span></h1>
                    <p>Captivate Your Audience: Elevate Your Brand with Expert Content Marketing</p>
                    <p>Content is king, and at AL KATEF IT SOLUTIONS, we understand the art of crafting compelling and informative content that resonates with your audience. Our Content Marketing services are designed to enhance your online authority, engage your audience, and contribute to improved search rankings.</p>
                    <p>Customized content strategies aligned with your brand and target audience</p>
                    <p>Creation of high-quality, shareable content</p>
                    <p>Blog management and regular content updates</p>
                    <p>Content optimization for search engines</p>
                    <Button onClick={handlebtn} variant="primary">Contact Us</Button>
                </div>
            </div>
        </div>
    );
}
