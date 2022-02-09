import React from 'react';
import { InlineEditProps, Value } from './interface';
import classNames from 'classnames';
import EditView from './components/EditView';
import ReadView from './components/ReadView';
import './index.less';

const InlineEdit = (props: InlineEditProps) => {
  const {
    className,
    style,
    disabled,
    keepOpenOnBlur,
    isEditing: customizeIsEditing,
    readView,
    onEdit,
    onBlur,
    onConfirm,
    onCancel,
  } = props;

  const isControlled = customizeIsEditing === undefined;

  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const preventEditViewBlurRef = React.useRef<boolean>(false);

  const handleReadViewClick = () => {
    if (isControlled) {
      setIsEditing(true);
    }
    onEdit?.();
  };

  const handleBlur = (value: Value) => {
    if (preventEditViewBlurRef.current) {
      return;
    }

    if (!keepOpenOnBlur) {
      onBlur?.();
      handleConfirm(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, value: Value) => {
    const { key } = e;
    if (key === 'Enter') {
      handleConfirm(value);
    } else if (e.key === 'Esc' || e.key === 'Escape') {
      handleCancel();
    }
  };

  const handleMouseDown = () => {
    preventEditViewBlurRef.current = true;
  };

  const handleConfirm = (value: Value) => {
    if (isControlled) {
      setIsEditing(false);
    }
    onConfirm(value);
  };

  const handleCancel = () => {
    if (isControlled) {
      setIsEditing(false);
    }
    onCancel?.();
  };

  React.useEffect(() => {
    preventEditViewBlurRef.current = false;
  }, [isEditing]);

  React.useEffect(() => {
    if (customizeIsEditing !== undefined) {
      setIsEditing(customizeIsEditing);
    }
  }, [customizeIsEditing]);

  return (
    <div className={classNames('inline-edit-container', className)} style={style}>
      {!disabled && isEditing ? (
        <EditView
          {...props}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onMouseDown={handleMouseDown}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      ) : (
        <ReadView disabled={disabled} readView={readView} onClick={handleReadViewClick} />
      )}
    </div>
  );
};

InlineEdit.defaultProps = {
  keepOpenOnBlur: false,
  hideActions: false,
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  placement: 'bottom',
};

export default InlineEdit;
