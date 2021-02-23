import styles from '../styles/components/Profile.module.css';
export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/38787272?s=400&u=d9706481817e3bdb191727b069afd98e8da1d109&v=4" alt="Victor "/>
            <div>
                <strong>Vadjo Victor</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>

    )
}