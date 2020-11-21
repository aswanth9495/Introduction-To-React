import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import leaderboardStore from './leaderboard';
import sessionMenteeStore from './sessionMentees';
import taStore from './ta';
import taSessionsStore from './taSessions';
import taSessionNegativeFeedbackFormStore
  from './forms/taSessionNegativeFeedbackForm';
import taSessionPositiveFeedbackFormStore
  from './forms/taSessionPositiveFeedbackForm';
import taSessionFeedbackViewStore from './taSessionFeedbackView';
import taSessionCreateFormStore from './forms/taSessionCreateForm';
import taSessionRescheduleFormStore from './forms/taSessionRescheduleForm';

const reducers = combineReducers({
  leaderboardStore,
  sessionMenteeStore,
  taStore,
  taSessionsStore,
  taSessionNegativeFeedbackFormStore,
  taSessionPositiveFeedbackFormStore,
  taSessionFeedbackViewStore,
  taSessionCreateFormStore,
  taSessionRescheduleFormStore,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
