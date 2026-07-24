import useBecomeHostHandler from "../../../hooks/handlers/useBecomeHostHandler.ts";
import Button from "../../ui/Button.tsx";

interface Props {
  onClose: () => void
}

const BecomeHostButton = ({onClose}: Props) => {
  const {isPending, onBecomeHost} = useBecomeHostHandler()
  return (
    <Button
      isLoading={isPending}
      key={'host'}
      onClick={async () => {
        await onBecomeHost()
        onClose()
      }}
      sx={(theme) => ({
        width: 'fit-content',
        color: '#fff',
        background: theme.palette.brand.primary,
        mx: 'auto',
        textAlign: 'center',
        display: 'block',
        mt: '10px',
        px: '20px'
      })}
    >
      Become a host
    </Button>
  );
};

export default BecomeHostButton;