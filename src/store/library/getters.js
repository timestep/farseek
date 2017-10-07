import { map, reduce, flatten, pipe, keys, values } from 'ramda';

export default {
  cards: state => state.cards,
  pieChartData: state =>
    pipe(
      map(card => card.mana_cost),
      map(manaCost =>
        manaCost
          .slice(1, -1)
          .split('}{')
          .reverse(),
      ),
      flatten,
      reduce(
        (obj, mana) => {
          const newObj = obj;
          if (isNaN(mana)) {
            newObj[mana]++;
          } else {
            newObj.C = parseInt(mana, 10);
          }
          return newObj;
        },
        {
          R: 0,
          U: 0,
          B: 0,
          G: 0,
          W: 0,
          C: 0,
        },
      ),
      obj => ({
        datasets: [
          {
            data: values(obj),
          },
        ],
        labels: keys(obj),
      }),
    )(state.cards),
};
