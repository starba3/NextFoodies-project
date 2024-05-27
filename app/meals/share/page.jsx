const ImagePicker = dynamic(() => import('@/components/meals/image-picker'))
import styles from './page.module.css';
import dynamic from 'next/dynamic';
import { shareButonClick } from '@/lib/actions';
import MealsSubmitButton from '@/components/meals/meals-submit-button';

export default function ShareMealPage() {

  // Server Action
  

  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={shareButonClick}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Pick Image" name="image" />
          <p className={styles.actions}>
            <MealsSubmitButton />
          </p>
        </form>
      </main>
    </>
  );
}