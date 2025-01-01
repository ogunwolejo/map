import {Button} from '@/components/ui/button';
import {FC, memo, useState} from 'react';
import ConfirmationModal from '../confirmation.modal';
import {useStageContext} from '@/context/stage.context';

type Props = {
  isSubmit?: boolean;
};

const QuoteStageButton: FC<Props> = memo(({isSubmit = false}) => {
  const ctx = useStageContext();
  const lastBtnText: string = isSubmit ? 'Submit' : 'Continue';

  const [open, setOpen] = useState<boolean>(false);
  // const openHandle = () => {
  //   setOpen(true)
  // }

  return (
    <div className="flex justify-end items-center gap-4">
      <Button
        className="!font-semibold !border-[#E4E7EC] text-grey6 !bg-transparent"
        onClick={ctx.cancelHandle}
      >
        Cancel
      </Button>
      <Button
        onClick={ctx.saveDraftHandle}
        variant="outline"
        size="lg"
        className="!border-primary !border-2 !text-primary !font-semibold"
      >
        Save as draft
      </Button>
      {isSubmit ? (
        <ConfirmationModal
          confirmBtnHandler={
            () => null
          }
          open={open}
          size="lg"
          onOpenChange={setOpen}
          DialogTriggerBtn={
            <Button
              variant="default"
              size="lg"
              className="!bg-primary !font-semibold"
            >
              {lastBtnText}
            </Button>
          }
        />
      ) : (
        <Button
          onClick={() => ctx.nextHandler()}
          variant="default"
          size="lg"
          className="!bg-primary !font-semibold"
        >
          {lastBtnText}
        </Button>
      )}
    </div>
  );
});

export default QuoteStageButton;
