import ImageSlider from '../components/image-slider/ImageSlider';
import PurposeComponent from '../components/purpose/PurposeComponent';
import Benefits from '../components/Benefits/Benefits';
import OurBoardSection from '../components/Board/ourBoard';

function home() {
    const slides = [
        { url: "./images/ieee-1.jpg", title: "valeo visit all" },
        { url: "./images/ieee-2.jpg", title: "valeo visit IEEE members" },
        { url: "./images/ieee-3.jpg", title: "backend boot camp" },
        { url: "./images/ieee-4.jpg", title: "tivac boot camp" },
    ];
    return(
        <div>
            <ImageSlider slides={slides} />
            <PurposeComponent />
            <Benefits />
            <OurBoardSection />
        </div>
    );
}
export default home; 