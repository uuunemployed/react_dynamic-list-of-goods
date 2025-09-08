import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [methodShowGoods, setMothodShowGoods] = useState('');

  useEffect(() => {
    switch (methodShowGoods) {
      case 'showAllgoods':
        getAll().then(setGoods);
        break;
      case 'showFiveFirsGoods':
        get5First().then(setGoods);
        break;
      case 'showRedGoods':
        getRedGoods().then(setGoods);
    }
  }, [methodShowGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setMothodShowGoods('showAllgoods')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setMothodShowGoods('showFiveFirsGoods')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setMothodShowGoods('showRedGoods')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
