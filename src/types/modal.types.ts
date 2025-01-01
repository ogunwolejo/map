export type TModal = {
  size: 'sm' | 'lg';
  defaultOpen?: boolean;
  open: boolean;
  modal?: boolean;
  onOpenChange: (op: boolean) => void;
};
