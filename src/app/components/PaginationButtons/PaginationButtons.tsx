import React from 'react';

interface PaginationButtonsProps {
  hasNext: boolean;
  hasPrevious: boolean;
}

const PaginationButtons: React.FC<
  PaginationButtonsProps & {
    onNext: () => void;
    onPrevious: () => void;
  }
> = ({ hasNext, hasPrevious, onNext, onPrevious }) => {
  return (
    <div className="btn-group flex gap-4">
      <button className="btn" disabled={!hasPrevious} onClick={onPrevious}>
        Previous
      </button>
      <button className="btn" disabled={!hasNext} onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default PaginationButtons;
