import React, { Children, cloneElement, useContext, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import useList from './useList';
import FormContext from '../Form/Context';
import FormItemPropsContext from '../FormItem/PropsContext';
import { WrapFormItem } from '../FormItem';
import { Item, ChaosListProps } from './types';
import './index.less';

const ChaosList: React.FC<ChaosListProps> = ({
  value,
  min = 1,
  max = 5,
  addText,
  transformFieldProps,
  children,
}) => {
  const form = useContext(FormContext);
  const formItemPropsContext = useContext(FormItemPropsContext);
  const { dataSource, add, remove, setDataSource, mainKey } = useList({
    onChange: (newDataSource: Item[]) => {
      form.setFieldsValue({
        [formItemPropsContext.name as string]: newDataSource
      });
      // 在这里 getFieldsValue 数据没更新，getFieldValue 数据已更新。。。
    },
    onAddOrRemove: () => {
      form.validateFields([formItemPropsContext.name]);
    }
  });

  useEffect(() => {
    if (value) setDataSource(value);
  }, [setDataSource, value])
  
  return (
    <div className="chaos-form-list-wrap">
      <div className="chaos-form-list">
        {dataSource.map((item, index) => {
          return (
            <div key={mainKey + index} className="chaos-form-list-item">
              <div className="chaos-form-list-fields">
              {Children.map<React.ReactElement, React.ReactElement>(children, child => {
                return cloneElement(child, {
                  ...(transformFieldProps ? transformFieldProps(child.props, index) : child.props),
                  name: [formItemPropsContext.name, index, child.props.name],
                  key: mainKey + index + child.props.name,
                  className: "chaos-form-list-field",
                  onChange: (event: any) => {
                    if (event && event.target){
                      dataSource[index][child.props.name] = child.props.getValueFromEvent ? 
                        child.props.getValueFromEvent(event.target.value) : 
                        event.target.value || event.target.checked;
                    } else {
                      dataSource[index][child.props.name] = event;
                    }

                    setDataSource([...dataSource]);
                  }
                })
              })}
              </div>

              {index < min ? null : (
                <span className="chaos-form-list-remove" onClick={() => { remove(index) }}>
                  <IconContext.Provider value={{ className: "chaos-form-list-remove-icon" }}>
                    <AiFillMinusCircle />
                  </IconContext.Provider>
                  删除
                </span>
              )}
            </div>
          )
        })}
      </div>
      <div className={dataSource.length == max ? "chaos-form-list-add disabled" : "chaos-form-list-add"} 
        onClick={() => { if (dataSource.length < max) add() }}>
        <IconContext.Provider value={{ className: "chaos-form-list-add-icon" }}>
          <AiFillPlusCircle />
        </IconContext.Provider>
        {addText ? addText : '添加'}
      </div>
    </div>
  )
}

export default WrapFormItem(ChaosList, {
  defaultDetailType: 'list',
  defaultFormItemProps: {
    shouldUpdate: true,
  }
});
