
//React Hooks
import React, { useEffect } from 'react';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchGraphic } from '../store/Slices/graphicExpensesSlice';
import VariationExpenses from './VariationExpenses';

//Charts.js
import { Bar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const GraphicExpenses: React.FC = () => {

  const dispatch: AppDispatch = useDispatch();
  const graphicExpenses = useSelector((state: RootState) => state.graphicExpenses.graphicExpenses);

  useEffect(() => {
    dispatch(fetchGraphic());
  }, [dispatch]);

  //Graphics
  const days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const data = {
    labels: days,
    datasets: [
      {
        data: graphicExpenses,
        backgroundColor: 'rgba(255, 255, 255, 0.938)',
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 500,
      },
      x: {
        ticks: { color: 'rgb(121, 112, 112)' },
      },
    },
  };

  //Translations
  const { t } = useTranslation(["traductor"]);

  return (
    <div>
      <div className="card w-96 bg-primary mx-auto shadow-xl">
        <div className='p-3'>
          <Bar data={data} options={options} />
        </div>
        <div className='flex justify-center'>
          <hr className='w-11/12' />
        </div>
        <div className='flex justify-between'>
          <div className='mt-2 ms-4'>
            <p className='text-xs'>{t("Gastos-hoy")}</p>
            <div className='mb-2 text-xl'>
              {graphicExpenses[1]} €
            </div>
          </div>
          <div className='mt-2 me-4 align-baseline'>
            <VariationExpenses />
            <p className='text-xs'>{t("Gastos-ayer")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicExpenses;
