import {FC, Fragment} from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';

type LinkInfo = {
  name: string;
  to: string;
};

type Props = {
  base: LinkInfo;
  current: LinkInfo[];
};

export const AppBreadCrumb: FC<Props> = ({base, current}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="text-primary !font-medium !text-xs lg:!text-sm !hover:text-primary">
          <BreadcrumbLink className="!hover:text-primary" href={base.to}>
            {base.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
        {current.map((cur, idx) => (
          <Fragment key={idx}>
            <BreadcrumbSeparator className="!text-grey4">/</BreadcrumbSeparator>
            <BreadcrumbItem className="text-grey4 !font-medium !text-xs lg:!text-sm">
              <BreadcrumbLink href={cur.to}>{cur.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
