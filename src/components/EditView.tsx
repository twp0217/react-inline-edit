import React from 'react';
import { InlineEditProps, Value } from '../interface';
import classNames from 'classnames';
import Icons from './Icons';

interface EditViewProps extends Omit<InlineEditProps, 'onBlur'> {
  onBlur: (value: Value) => void;
  onKeyDown: (event: React.KeyboardEvent, value: Value) => void;
  onMouseDown: () => void;
}

const EditView = (props: EditViewProps) => {
  const {
    hideActions,
    confirmText,
    cancelText,
    defaultValue,
    loading,
    placement,
    editView,
    onBlur,
    onKeyDown,
    onMouseDown,
    onConfirm,
    onCancel,
  } = props;

  const [value, setValue] = React.useState<Value>(defaultValue);

  const renderEditView = (): React.ReactNode => {
    if (!React.isValidElement(editView)) {
      return editView;
    }

    return React.cloneElement(editView, {
      className: classNames('inline-edit-edit-view', editView.props?.className),
      autoFocus: true,
      value,
      onChange: (e: any) => {
        setValue(e.target ? e.target.value : e);
        editView.props?.onChange?.(e);
      },
      onBlur: (e: any) => {
        onBlur?.(value);
        editView.props?.onBlur?.(e);
      },
      onKeyDown: (e: React.KeyboardEvent) => onKeyDown(e, value),
    });
  };

  const renderActionsButton = (): React.ReactNode => {
    if (hideActions) {
      return null;
    }

    return (
      <div
        className={classNames(
          'inline-edit-edit-view-actions',
          `inline-edit-edit-view-actions-placement-${placement}`,
        )}
      >
        <button
          title={confirmText}
          disabled={loading}
          onMouseDown={onMouseDown}
          onClick={() => onConfirm(value)}
        >
          <Icons type={loading ? 'loading' : 'check'} />
        </button>
        <button title={cancelText} disabled={loading} onMouseDown={onMouseDown} onClick={onCancel}>
          <Icons type={loading ? 'loading' : 'close'} />
        </button>
      </div>
    );
  };

  return (
    <div className="inline-edit-edit-view-container">
      {renderEditView()}
      {renderActionsButton()}
    </div>
  );
};

export default EditView;
