import {
  TimeLineAction,
  CONTAIN,
  REFRESH,
  initialState,
} from "../../types/TimeLine";

const TimeLineReducer = (state = initialState, action: TimeLineAction) => {
  switch (action.type) {
    case REFRESH:
      return action.payload;
    case CONTAIN:
      return state;
    default:
      return state;
  }
};

export default TimeLineReducer;
