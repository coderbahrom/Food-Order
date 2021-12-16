import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import MealsSummary from './MealsSummry'
import AvailableMeals from './AvailableMeals'
function Meals() {
    return (
       <Fragment>
           <MealsSummary/>
           <AvailableMeals/>
       </Fragment>
    )
}

export default Meals
