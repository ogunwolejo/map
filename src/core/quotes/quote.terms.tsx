import {FC, Fragment, useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {ChevronDown, ChevronUp, Trash2} from 'lucide-react';
import ContractIcon from '@/assets/icons/sign-doc-2.svg';
import {Button} from '@/components/ui/button';
import {Separator} from '@/components/ui/separator';
import {QuoteAgreement} from '@/types/quotes.types';
import {QuoteContractContext, useQuoteAgreementContext} from '@/context/quote-contract.context';

export const QuoteInnerTermsContractContent: FC<{
  label: string;
  content: string;
}> = ({label, content}) => {
  return (
    <Fragment>
      <div className="flex flex-col gap-1 items-start">
        <h4 className="text-grey2 font-semibold  text-sm lg:text-base">
          {label}
        </h4>
        <h4 className="font-semibold text-dark text-sm lg:text-base">
          {content}
        </h4>
      </div>
    </Fragment>
  );
};

export const QuoteInnerTermsContract: FC = () => {
  const ctx = useQuoteAgreementContext();
  return (
    <Card>
      <CardContent>
        <CardHeader className="!px-1">
          <div className="flex justify-between items-center font-satoshi">
            <CardTitle className="font-semibold text-sm lg:text-base text-grey6">
              Payment & Delivery
            </CardTitle>
            {/* <div>
              <Button size="icon" variant="link" className=""></Button>
              <Button size="icon" variant="link" className="">
                <Trash2 className="h-4 w-4 text-grey6" />
              </Button>
            </div> */}
          </div>
        </CardHeader>
        <section className="flex justify-between items-center w-4/5">
          <QuoteInnerTermsContractContent
            content={`Net ${ctx.terms.toString()}`}
            label="Payment term"
          />
          <Separator orientation="vertical" className="h-10" />
          <QuoteInnerTermsContractContent
            content={ctx.schedule}
            label="Delivery schedule"
          />
          <Separator orientation="vertical" className="h-10" />
          <QuoteInnerTermsContractContent
            content={ctx.shippingMethod}
            label="Shipping method"
          />
          <Separator orientation="vertical" className="h-10" />
          <QuoteInnerTermsContractContent content={`${ctx.leadTime} days`} label="Lead time" />
        </section>
      </CardContent>
    </Card>
  );
};

export const QuoteTermsContract: FC<{data: QuoteAgreement}> = ({data}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <QuoteContractContext.Provider value={data}>
      <Card>
        <CardContent className="py-4">
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="">
            <div className="flex items-center justify-between px-4 ">
              <div className="flex justify-start items-start gap-3">
                <img src={ContractIcon} className="h-6 w-6 lg:h-8 lg:w-8" />
                <div className="">
                  <h4 className="font-semibold text-base lg:text-xl">
                    Terms and Attachments
                  </h4>
                  <p className="font-normal text-xs lg:text-sm text-grey6">
                    Review payment and delivery terms
                  </p>
                </div>
              </div>
              <CollapsibleTrigger className="text-grey4">
                {isOpen ? (
                  <ChevronUp className="h-6 w-6 lg:h-8 lg:w-8" />
                ) : (
                  <ChevronDown className="h-6 w-6 lg:h-8 lg:w-8" />
                )}
                <span className="sr-only">Toggle</span>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2 p-4">
              <QuoteInnerTermsContract />
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </QuoteContractContext.Provider>
  );
};
