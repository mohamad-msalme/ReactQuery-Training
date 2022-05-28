import React from "react";
import { UseQueryResult } from "react-query";
import { TPost } from "../types";
import { NEXT_LABEL_BTN, PREV_LABEL_BTN, DEF_PAGE, MAX_PAGE} from '../util';

type TToolbarButtomProps = {
  pageNum: number;
  onBtnClick: React.Dispatch<React.SetStateAction<number>>;
  postState: UseQueryResult<TPost[], unknown>;
}

export const ToolbarButtom: React.FC<TToolbarButtomProps> = ({pageNum, onBtnClick, postState}) => {

  return (
    <div className="pages">
      <button disabled={pageNum === DEF_PAGE} onClick={() => onBtnClick((prevState) => prevState - 1)}>
        {PREV_LABEL_BTN}
      </button>
      <span>Page {pageNum}</span>
      <button disabled={ pageNum === MAX_PAGE} onClick={() => {onBtnClick((prevState) => prevState + 1)}}>
        {NEXT_LABEL_BTN}
      </button>
    </div>
  )
}
