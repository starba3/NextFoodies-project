import MealsGrid from '@/components/meals/meals-grid';
import classes from './page.module.css';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';
import Link from 'next/link';

const Meals = async () => {
    const mealsList = getMeals()

    return <MealsGrid meals={mealsList}/>
}

export default function MealsPage() {
    const meals = getMeals()
    console.log(meals)
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
        <p className={classes.cta}>
            <Link href="/meals/share">Share your favorites meals!</Link>
        </p>
            
      </header>
      
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetcing meals... </p>}>
            <Meals />
        </Suspense>
        
      </main>
    </>
  );
}