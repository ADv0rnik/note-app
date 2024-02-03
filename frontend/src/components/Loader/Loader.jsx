import LoaderImage from '../../assets/img/loader.png';
import './Loader.css'

const Loader = () => {
    return (
        <div className="loader">
            <img src={LoaderImage} alt="Loading..." />
        </div>
    );
};

export default Loader;