export interface ModalProps {
  toggleModal(): void;
  id: string;
}

export interface ModalPortalChildren {
  children: React.ReactNode;
}
