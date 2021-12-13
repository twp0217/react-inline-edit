import React from 'react';
import { InlineEditProps } from '../interface';

interface ReadViewProps extends Pick<InlineEditProps, 'readView'> {
  onClick: () => void;
}

const ReadView = (props: ReadViewProps) => {
  const { readView, onClick } = props;

  return (
    <div className="inline-edit-read-view-container" onClick={onClick}>
      {readView}
    </div>
  );
};

export default ReadView;
