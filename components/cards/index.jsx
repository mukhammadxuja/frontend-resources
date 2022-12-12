import { Card } from 'components';
import { data } from 'data/index';

const Cards = () => {
  return (
    <div className="container mx-auto mt-10 py-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-4">
        {data.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
