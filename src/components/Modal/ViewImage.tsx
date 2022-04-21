import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  const handleCloseModal = (): void => {
    onClose();
  };
  return (
    <Modal isOpen={isOpen} isCentered onClose={handleCloseModal}>
      <ModalOverlay />
      <ModalContent
        alignItems="start"
        bgColor="pGray.800"
        maxWidth="900px"
        maxHeight="632px"
        width="auto"
      >
        <ModalBody p={0}>
          <Image
            src={imgUrl}
            borderTopRadius="md"
            maxWidth="900px"
            maxHeight="600px"
            objectFit="cover"
          />
        </ModalBody>
        <ModalFooter height="32px">
          <Link href={imgUrl} fontSize="14px" isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
