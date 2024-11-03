import React from 'react';

const Job = () => {
  return (
    <div className="flex justify-center space-x-5 mt-10">
      {/* Job Card 1 */}
      <div className="ml-10 w-[800px] h-[200px] rounded-lg p-4 bg-white/30 backdrop-blur-sm text-white">
        <p className="text-center">Job Position 1</p>
      </div>

      {/* Job Card 2 */}
      <div className="w-[800px] h-[200px] rounded-lg p-4 bg-white/30 backdrop-blur-sm text-white">
        <p className="text-center">Job Position 2</p>
      </div>

      {/* Job Card 3 */}
      <div className="w-[800px] h-[200px] rounded-lg p-4 bg-white/30 backdrop-blur-sm text-white">
        <p className="text-center">Job Position 3</p>
      </div>
    </div>
  );
};

export default Job;
