'use client'

import { useFormStatus } from 'react-dom'
const MealsSubmitButton = () => {

  const {pending} = useFormStatus()
  return (
    <button type="submit">
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  )
}

export default MealsSubmitButton