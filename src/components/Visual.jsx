import VisualBanner from './VisualBanner';
import visual from './../assets/api/data';
import './Visual.scss';

const Visual = () => {
    return (
        <>
            <section id="visual">
                <VisualBanner visual={visual} />

                <p className="btn-wrap">
                    <button className="btn prev">
                        <img
                            src="http://www.kyungdong.co.kr/ko/front/image/main/btn_prev2.png"
                            alt=""
                        />
                    </button>
                    <button className="btn next">
                        <img
                            src="http://www.kyungdong.co.kr/ko/front/image/main/btn_next2.png"
                            alt=""
                        />
                    </button>
                </p>
                <p className="scroll">
                    <img src="http://www.kyungdong.co.kr/ko/front/image/main/scroll.png" alt="" />
                </p>
            </section>
        </>
    );
};

export default Visual;
