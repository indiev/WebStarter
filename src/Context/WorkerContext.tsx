import { Dispatch, SetStateAction, useMemo, useState } from 'react';

import { createContext } from 'Utils/createContext';

type Data = {
  workerName: string;
  completed: boolean;
  hasAb: boolean;
  first: string;
  second: string;
  third: string;
  id: string;
  testDate: string;
  retest: string;
  phone: string;
};

type Props = {
  children: React.ReactNode;
};

type Context = {
  workers: Data[];
  setWorkers: Dispatch<SetStateAction<Data[]>>;
  addWorker: (worker: Data) => void;
  updateVaccine: () => void;
  updateAntibody: () => void;
};

const [useContext, Provider] = createContext<Context>();

const WorkerProvider = (props: Props): React.ReactElement => {
  const { children } = props;
  const [workers, setWorkers] = useState([] as Data[]);

  const addWorker = (worker: Data) => {
    const randomId = `M${String(Math.floor(Math.random() * 10000000)).padStart(
      7,
      '0'
    )}`;

    if (worker.workerName === '') {
      worker.workerName = '홍길동';
    }
    if (worker.id === '') {
      worker.id = randomId;
    }
    setWorkers((w) => [worker, ...w]);
  };

  const updateVaccine = () => {
    setWorkers((w) =>
      w.map((item) => ({
        ...item,
        completed: true,
        first: '2021.09.15',
        second: '2021.10.20'
      }))
    );
  };

  const updateAntibody = () => {
    setWorkers((w) =>
      w.map((item) => ({
        ...item,
        hasAb: true,
        testDate: '2021.10.26'
      }))
    );
  };

  const context = useMemo(
    () => ({ workers, setWorkers, addWorker, updateVaccine, updateAntibody }),
    [workers]
  );

  return <Provider value={context}>{children}</Provider>;
};

export { useContext as useWorkerContext, WorkerProvider };
