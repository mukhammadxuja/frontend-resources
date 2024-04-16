import { main } from 'data/test';
import React, { useState } from 'react';

function Test() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="container my-32 mx-auto">
      {main.map((category) => (
        <div key={category.id} className='flex'>
          <h2 className="text-lg font-bold">{category.title}</h2>
          <button
            className="mb-2 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            onClick={() => setSelectedCategory(category.title)}
          >
            Show {category.title} Resources
          </button>
          {selectedCategory === category.title && (
            <div>
              {category.folders.map((folder) => (
                <div key={folder.id}>
                  <h3 className="text-xl font-bold">{folder.title}</h3>
                  <ul>
                    {folder.resources.map((resource) => (
                      <li key={resource.id}>
                        <button className="btn btn_ghost">
                          {resource.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Test;
