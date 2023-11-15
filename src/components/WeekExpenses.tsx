//React Hooks
import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchTotalExpenses } from "../store/Slices/totalExpensesSlice";
import { AppDispatch, RootState } from '../store/store';
//Assets
import arrowLeft from '../assets/PhArrowLeftLight.svg';
import arrowRight from '../assets/PhArrowRightLight.svg';
import es from '../assets/ES.svg';
import cat from '../assets/Cat.svg';
import uk from '../assets/Uk.svg';
//Translations
import { useTranslation } from 'react-i18next';

const WeekExpenses: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const totalExpenses = useSelector((state: RootState) => state.totalExpenses.totalExpenses);

  useEffect(() => {
    dispatch(fetchTotalExpenses());
  }, [dispatch]);

  const { t, i18n } = useTranslation(["traductor"]);

  return (
    <>
      <div className="flex mx-auto space-x-2">
        <button onClick={() => i18n.changeLanguage("en")}>
          <img src={uk} width={30} alt="English" />
        </button>
        <button onClick={() => i18n.changeLanguage("cat")}>
          <img src={cat} width={30} alt="Catalan" />
        </button>
        <button onClick={() => i18n.changeLanguage("es")}>
          <img src={es} width={30} alt="Spanish" />
        </button>
      </div>
      <div className="card w-96 bg-primary text-primary-content mx-auto">
        <div className="card-body py-0">
          <div className="flex justify-between">
            <div>
              <h3 className="text-start mt-2"><strong>{t("Balance-total")}</strong></h3>
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
