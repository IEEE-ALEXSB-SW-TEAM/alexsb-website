import NavBar from '../components/NavigationBar/NavigationBar.js';
import Footer from '../components/footer/footer.js';
import ImageSlider from '../components/image-slider/ImageSlider';

function home() {
    const slides = [
        { url: "http://192.168.1.14:3000/images/image-1.jpg", title: "beach" },
        { url: "http://192.168.1.14:3000/images/image-2.jpg", title: "boat" },
        { url: "http://192.168.1.14:3000/images/image-3.jpg", title: "forest" },
        { url: "http://192.168.1.14:3000/images/image-4.jpg", title: "city" },
        { url: "http://192.168.1.14:3000/images/image-5.jpg", title: "italy" },
    ];
    return(
        <div>
            <div><NavBar /></div>
            <ImageSlider slides={slides} />
            <br/>
            <br/>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <h1> Home Page </h1>
            <div><Footer/></div>
        </div>
    );
}
export default home; 