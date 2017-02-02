import { connect } from 'react-redux';
import { createSelector } from 'reselect';

//force create new attempt
export const forceNewAttempt = async (userEmail: string, courseUrl: string) => new Promise<string>((res, rej) => { });

//load all course and user data 
export const loadCourse = (par: DCourse.ICourseNavigData, state: DCourse.ICoursesState) => new Promise<DCourse.ICoursesState> (async (resolve, reject) => {
  //adjust par.attemptId
  if (!par.attemptId) par.attemptId = await loadLastAttempt(par.userEmail, par.courseUrl);
  //read course user data
  let courseUser: DCourse.IPagesState = null;
  if (!par.attemptId) par.attemptId = new Date().getTime().toString();
  else courseUser = await loadCourseUserData(par.userEmail, par.attemptId); //could be null for first enter to par.attemptId=singleAttempt
  if (!courseUser) courseUser = { userCourse: {}, attemptId: null };
  courseUser.attemptId = par.attemptId;
});
//export const singleAttempt = '@single'; //only one attempt for course allowed

//last attemptId for given user and course. Null if no attempt exist yet.
const loadLastAttempt = async (userEmail: string, courseUrl: string) => new Promise<string>((res, rej) => { });

const loadCourseUserData = async (userEmail: string, attemptId: string) => new Promise<DCourse.IPagesState>((res, rej) => { });

export interface IPageOwnProps {
  routePath: string;
  courseContext: string;
  pageUrl: string;
}

export interface IPageMapStateToProps {
  router: DRouter.IRouteData
  userData: DCourse.IFlagResult;
}

const PageLoaderPresent: React.StatelessComponent<IPageMapStateToProps> = props => {
  return null;
};

const getRouter = (state: DRedux.IRootState, props: IPageOwnProps) => state.router[props.routePath];
const getUserData = (state: DRedux.IRootState, props: IPageOwnProps) => state.courses[props.courseContext].userCourse[props.pageUrl];

const makePageLoaderSelector = () => createSelector<DRedux.IRootState, IPageMapStateToProps, DRouter.IRouteData, DCourse.IFlagResult>(
  getRouter,
  getUserData,
  (router, userData) => ({ router, userData })
);

const makePageMapStateToProps = () => {
  const getPageLoaderSelector = makePageLoaderSelector()
  return (state: DRedux.IRootState, props: IPageOwnProps) => getPageLoaderSelector(state, props);
}

export const PageLoader = connect<IPageMapStateToProps, any, IPageOwnProps>(
  makePageMapStateToProps
)(PageLoaderPresent);