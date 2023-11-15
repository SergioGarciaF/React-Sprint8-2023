import { useSelector, useDispatch } from 'react-redux'
import { fetchGraphic } from '../store/Slices/graphicExpensesSlice';
import { useEffect } from 'react';
import { AppDispatch, RootState } from '../store/store';

import { Bar } from 'react-chartjs-2';
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
  const graphicExpenses = useSelector((state: RootState) => state.graphicExpenses.graphicExpenses)

  useEffect(() => {
    dispatch(fetchGraphic());
  }, [dispatch]);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const data = {
    labels: days,
    datasets: [
      {
        data: graphicExpenses,
        backgroundColor: 'rgba(255, 255, 255, 0.938)'
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        min: 0,
        max: 500
      },
      x: {
        ticks: { color: 'rgb(121, 112, 112)' },
      }
    }
  }


  return (
    <div>
      <>

        <div className="card w-96 bg-primary mx-auto shadow-xl">
          <div className='p-3'>
            <Bar data={data} options={options} />
          </div>
        </div>
      </>

    </div>
  )
}

export default GraphicExpenses;
