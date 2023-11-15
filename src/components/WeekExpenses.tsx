import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTotalExpenses } from "../store/Slices/totalExpensesSlice";
import { AppDispatch, RootState } from '../store/store';

import arrowLeft from '../assets/PhArrowLeftLight.svg';
import arrowRight from '../assets/PhArrowRightLight.svg';

const WeekExpenses: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>(); 
  const totalExpenses = useSelector((state: RootState) => state.totalExpenses.totalExpenses);

  useEffect(() => {
    dispatch(fetchTotalExpenses());
  }, [dispatch]);

  return (
    <>
      <div className="card w-96 bg-primary text-primary-content mx-auto">
        <div className="card-body py-0">
          <div className="flex justify-between">
            <div>
              <h3 className="text-start mt-2"><strong>Balanç total</strong></h3>
              <h3 className="card-title mb-2">{totalExpenses} €</h3>
            </div>
            <div className="flex gap-4">
              <img src={arrowLeft} width={24} alt="arrow-left" />
              <img src={arrowRight} width={24} alt="arrow-right" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeekExpenses;
