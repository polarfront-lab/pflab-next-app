import {cn} from '@/utils';

const DisplayGrid = ({display}: {display: boolean}) => {
  return (
    display && (
      <div className="fixed w-full h-full left-0 top-0 bg-transparent -z-10">
        <div className="w-full h-full px-8 grid grid-cols-6 gap-4 md:grid-cols-12">
          {[...Array(12)].map((_, index) => {
            let className = 'bg-gray opacity-30 flex flex-col justify-end items-center';
            if (index < 6) {
              className = cn(className, 'flex');
            } else {
              className = cn(className, 'hidden md:flex');
            }
            return (
              <div key={index} className={className}>
                {index}
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default DisplayGrid;
