export const useDisclosure = (defaultOpen: boolean = false) => {
  const [open, setOpen] = useState(defaultOpen);
  const onOpen = () => setOpen(true);
  const toggle = () => setOpen((prevState) => !prevState);
  const onClose = () => setOpen(false);
  const stateActions: [
    boolean,
    {
      onOpen: () => void;
      toggle: () => void;
      onClose: () => void;
      setOpen: (value: SetStateAction<boolean>) => void;
    }
  ] = [open, { onOpen, toggle, onClose, setOpen }];
  return stateActions;
};
