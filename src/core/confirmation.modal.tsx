import {memo, MouseEventHandler, ReactNode, FC} from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog.tsx';
import {TModal} from '@/types/modal.types.ts';
import {clsx} from 'clsx';
import {Button} from '@/components/ui/button.tsx';
import {useSizeClasses} from '@/hooks/use-size-classes';

type Prop = TModal & {
  DialogTriggerBtn: ReactNode;
  confirmBtnHandler: MouseEventHandler<HTMLButtonElement>;
};

const ConfirmationModal: FC<Prop> = memo(
  ({
    size,
    defaultOpen = false,
    open,
    modal,
    onOpenChange,
    DialogTriggerBtn,
    confirmBtnHandler,
  }) => {
    const sizeClasses = useSizeClasses(
      size,
      'max-w-xs md:max-w-[425px] lg:max-w-[495px] text-sm',
      'max-w-xs md:max-w-xl lg:max-w-3xl text-sm md:text-base xl:text-lg',
    );

    return (
      <>
        <Dialog
          defaultOpen={defaultOpen}
          modal={modal}
          open={open}
          onOpenChange={onOpenChange}
        >
          <DialogTrigger asChild>{DialogTriggerBtn}</DialogTrigger>
          <DialogContent className={clsx(sizeClasses, '')}>
            <DialogHeader className="">
              <DialogTitle className="!text-[#101928]">
                Confirmation
              </DialogTitle>

              <DialogDescription className="text-left !font-medium !text-grey6 mt-4">
                You are about to submit this quote in response to RFQ ID, this
                will immediately be sent to the client “Westend Clear Hospital”.
                Are you sure you want to proceed?
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <Button
                size="lg"
                className="!font-semibold !border-[#E4E7EC] text-grey6 !bg-transparent"
              >
                Cancel
              </Button>
              <Button
                variant="default"
                size="lg"
                className="!bg-primary !font-semibold"
                onClick={confirmBtnHandler}
              >
                Continue
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  },
);

export default ConfirmationModal;
