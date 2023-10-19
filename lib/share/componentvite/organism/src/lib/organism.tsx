import styles from './organism.module.css';

/* eslint-disable-next-line */
export interface OrganismProps {}

export function Organism(props: OrganismProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Organism!</h1>
    </div>
  );
}

export default Organism;
