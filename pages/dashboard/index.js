import React from 'react';
import { Sidebar, Card } from 'components';
import { data } from 'data/index';

const Dashboard = () => {
  return (
    <div>
      <Sidebar>
        <div className="py-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center">
            {data.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default Dashboard;
