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