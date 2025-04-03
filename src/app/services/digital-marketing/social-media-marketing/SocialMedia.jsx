'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import socialImg from '../../../../assets/socialmedia.png';
import { Button } from 'react-bootstrap';
import '../DigiMrkt.css';


export default function SocialMedia() {
    const router = useRouter();

    const handlebtn = () => {
        router.push('/contact');
    };

    return (
        <div>

            <div className='web-soln-top'>
                <div className='web-soln-top-img-container'>
                    <Image src={socialImg} alt='Social Media Marketing' priority />
                </div>
                <div className='web-soln-top-txt-container'>
                    <h1><span className='title-blue'>SOCIAL MEDIA</span> <span className='title-orange'>MARKETING</span></h1>
                    <p>Connect, Engage, and Thrive with Social Media Marketing Excellence</p>
                    <p>At AL KATEF IT SOLUTIONS, we recognize the power of social media in shaping brand identity and connecting with your audience. Our Social Media Marketing services are designed to elevate your brand presence, foster engagement, and build a community around your business.</p>
                    <p>Tailored social media strategies for platforms like Facebook, Instagram, and Twitter</p>
                    <p>Engaging content creation and curation</p>
                    <p>Targeted social media advertising campaigns</p>
                    <p>Community building and customer interaction</p>
                    <Button onClick={handlebtn} variant="primary">Contact Us</Button>
                </div>
            </div>
        </div>
    );
}
