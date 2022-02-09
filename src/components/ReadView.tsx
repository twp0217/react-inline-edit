import React from 'react';
import { InlineEditProps } from '../interface';
import classNames from 'classnames';

interface ReadViewProps extends Pick<InlineEditProps, 'disabled' | 'readView'> {
  onClick: () => void;
}

const ReadView = (props: ReadViewProps) => {
  const { disabled, readView, onClick } = props;

  return (
    <div className={classNames('inline-edit-read-view-container', { disabled })} onClick={onClick}>
      {readView}
    </div>
  );
};

export default ReadView;
