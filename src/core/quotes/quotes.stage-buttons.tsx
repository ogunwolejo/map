import {Button} from '@/components/ui/button';
import {FC, memo} from 'react';
import ConfirmationModal from '../confirmation.modal';

type Props = {
  isSubmit?: boolean;
};

const QuoteStageButton: FC<Props> = memo(({isSubmit = false}) => {
  const lastBtnText: string = isSubmit ? 'Submit' : 'Continue';
  return (
    <div className="flex justify-end items-center gap-4">
      <Button className="!font-semibold !border-[#E4E7EC] text-grey6 !bg-transparent">
        Cancel
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="!border-primary !border-2 !text-primary !font-semibold"
      >
        Save as draft
      </Button>
      {isSubmit ? (
        <ConfirmationModal
          size="lg"
          onOpenChange={() => null}
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
