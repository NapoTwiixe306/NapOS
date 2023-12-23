import close from '../../img/close.svg'
import Image from "next/image";
export default function  Finder(){
    return(
        <>
            <div className="finder">
                <div className="Container">
                    <div className="items">
                        <div className="left">
                            <Image src={close as any} alt="close" className="close_img"/>
                            <div className="Favorites">
                                <h1>Favorites</h1>
                                <p>Recents</p>
                                <p>Desktop</p>
                                <p>Documents</p>
                                <p>Downloads</p>
                            </div>
                            <div className="Icloud">
                                <h1>Icloud</h1>
                                <p>Icloud Drive</p>
                            </div>
                            <div className="Locations">
                                <h1>Locations</h1>
                                <p>Macintosh HD</p>
                                <p>Network</p>
                            </div>
                        </div>
                        <div className="sepa"></div>
                        <div className="right">
                            right
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}