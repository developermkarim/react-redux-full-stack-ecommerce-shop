import loadergif from '../../assets/loader.gif'
import styles from './loader.module.css'
import  ReactDOM  from 'react-dom';
const Loader = () => {
    return ReactDOM.createPortal(
        <div className={styles.wrapper}>
            <div className={styles.loader}>
            <img src={loadergif} alt="Loading ..." />
            </div>
            Loader
            
        </div>,
         document.getElementById('loader')
    );
};

export default Loader;