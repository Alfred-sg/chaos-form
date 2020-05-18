import React, { Children, Fragment, cloneElement, useContext } from 'react';
import FormItemPropsContext from '../FormItem/PropsContext';
import './index.less';

const List = ({
  value,
  renderItemDetail,
  children,
}: {
  value?: any[],
  renderItemDetail: (item: any, index: number) => React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
}) => {
  const formItemPropsContext = useContext(FormItemPropsContext);

  return (
    <div className="chaos-form-detail-list">
      {(value || []).map((item: any, index: number) => {
        return (
          <div className="chaos-form-detail-item" key={index}>
            {
              renderItemDetail ? 
                renderItemDetail(item, index) : 
                (
                  <div className="chaos-form-detail-row" key={index}>
                    {Children.map<React.ReactElement, React.ReactElement>(
                      // @ts-ignore
                      children, child => {
                        const props = child.props;
                        return cloneElement(child, {
                          ...props,
                          name: [formItemPropsContext.name, index, props.name],
                          key: `${index}${props.name}`,
                        })
                      })
                    }
                  </div>
                )
            }
          </div>
        );
      })}
    </div>
  )
}

export default List;