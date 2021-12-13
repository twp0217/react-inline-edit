export type Value = any;

export type Placement = 'top' | 'bottom';

export interface InlineEditProps<T = Value> {
  className?: string;
  style?: React.CSSProperties;
  keepOpenOnBlur?: boolean;
  hideActions?: boolean;
  confirmText?: string;
  cancelText?: string;
  defaultValue: T;
  isEditing?: boolean;
  loading?: boolean;
  placement?: Placement;
  readView: React.ReactNode;
  editView: React.ReactNode;
  onEdit?: () => void;
  onBlur?: () => void;
  onConfirm: (value: T) => void;
  onCancel?: () => void;
}
