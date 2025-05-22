import styles from './About.module.css';
import img from '../assets/about.jpg';

function About() {
    return (
        <div className={styles.container}>
            <img src={img} className={styles.img} />
            <h1>ABOUT ME</h1>
            <p>
                Hi! I'm Jonas, an artist based in Leuven, Belgium.
                I love working with ink and watercolor to create random things.
                You can explore a selection of my creations under the "Portfolio" tab.
            </p>
            <p>
                I'm always open to commissions, suggestions or anything else.
                The best way to reach me is through my&nbsp;
                <a href='https://www.instagram.com/jonasdrawscats' target='_blank' rel='noopener noreferrer'>Instagram</a>
                &nbsp;— feel free to drop me a message :)
            </p>
            <p>
                I also built this website myself! If you're into the style and want something similar for your own project, hit me up.
            </p>
        </div>

    );
}

export default About;