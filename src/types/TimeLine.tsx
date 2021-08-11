const url = "/getTimeLines";

const REFRESH = "REFRESH";
const CONTAIN = "CONTAIN";

interface TimeLine {
  TimeLineId: number;
  TimeLineStatus: number;
  TimeLineContent: string;
}
const initialState: TimeLine[] = [];

const TimeLineActionCreator = (type: string, TimeLine: TimeLine[]) => {
  return {
    type: type,
    payload: TimeLine,
  };
};
type TimeLineAction = {
  type: string;
  payload: TimeLine[];
};

export { REFRESH, CONTAIN, initialState, url, TimeLineActionCreator };
export type { TimeLine, TimeLineAction };
