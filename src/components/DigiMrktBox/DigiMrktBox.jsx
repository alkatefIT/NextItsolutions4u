import Image from 'next/image';
import Link from 'next/link';
import "./DigiMrktBox.css";

export default function DigimrktBox({ digititle, dididesc, digiimg, link, alttxt }) {
    return (
        <Link href={link || '#'} className="digi-mrkt-bottom-card">
            <Image src={digiimg} alt={alttxt} width={100} height={100} />
            <h3>{digititle}</h3>
            <p>{dididesc}</p>
        </Link>
    );
}
