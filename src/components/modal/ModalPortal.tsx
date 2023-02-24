import ReactDOM from 'react-dom';
import { ModalPortalChildren } from 'types/modal';

const ModalPortal = ({ children }: ModalPortalChildren) => {
  const modalRoot = document.getElementById('modal-root');
  return ReactDOM.createPortal(children, modalRoot as HTMLElement);
};

export default ModalPortal;
