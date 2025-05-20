import styles from './About.module.css';
import img from '../assets/about.jpg';

function About() {
    return (
        <div className={styles.container}>
            <img src={img} className={styles.img} />
            <h1>ABOUT ME</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam a posuere neque.
                Pellentesque vitae justo nec nisl ultricies varius.
                Mauris convallis justo sed lobortis sollicitudin.
                Nunc lobortis turpis dolor, vitae ultricies nibh varius vel.
                Phasellus non aliquam dolor. In vehicula eros lectus, nec blandit tortor lobortis vel.
                Suspendisse at aliquet eros.
            </p>
            <p>
                Quisque lacinia egestas justo quis interdum.
                Morbi faucibus dui sed ligula interdum, ac varius nisl iaculis.
                Cras et sem vel nibh molestie posuere sed sed justo.
                Mauris justo libero, egestas sed efficitur at, molestie ut risus.
                Sed eu tristique sapien.
                Etiam erat purus, ultrices ac feugiat pretium, molestie et erat.
                Sed vulputate augue ante, in pulvinar tortor malesuada sagittis.
                Integer rutrum pharetra nisl, vel accumsan velit.
                Nulla sed bibendum ante.
                Fusce vel maximus leo.
            </p>
            <p>
                Maecenas vitae volutpat dui, sit amet vulputate sem.
                Vivamus odio eros, hendrerit quis mauris eu, varius congue odio.
                Fusce quis laoreet mauris. Curabitur semper justo a eleifend sollicitudin.
                Nullam vel tellus a ligula lobortis ornare a at purus.
                Maecenas eget urna enim.
                Etiam tincidunt pellentesque ipsum, id porttitor quam convallis sit amet.
                Pellentesque at quam vel sapien consectetur commodo.
                Quisque efficitur ultrices felis, fermentum dictum lorem finibus in.
                Morbi sit amet quam in urna ornare dictum eget id enim.
            </p>
        </div>
    );
}

export default About;