import React from "react";
import { NEXT_LABEL_BTN, PREV_LABEL_BTN} from '../util';

type TToolbarButtomProps = {
  pageNum: number;
  onBtnClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ToolbarButtom: React.FC<TToolbarButtomProps> = ({pageNum, onBtnClick}) => {

  return (
    <div className="pages">
      <button disabled={pageNum === 0} onClick={() => onBtnClick((prevState) => prevState - 1)}>
        {PREV_LABEL_BTN}
      </button>
      <span>Page {pageNum + 1}</span>
      <button onClick={() => onBtnClick((prevState) => prevState + 1)}>
        {NEXT_LABEL_BTN}
      </button>
    </div>
  )
}