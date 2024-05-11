import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Visual from './Visual';
// import data from './../assets/api/data';
import './Index.scss';

const Index = () => {
    // const {visual, mainCon1, mainCon2, mainCon3} = data;

    return (
        <div id="wrap">
            <Header />
            {/* <Visual visual={visual} /> */}
            <Visual />
            {/* <Main mainCon1={mainCon1} /> */}
            <Main />
            <Footer />
        </div>
    );
};

export default Index;
