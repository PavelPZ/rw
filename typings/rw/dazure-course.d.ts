declare namespace DAzureCourse {
  interface IPersistCourse {
    getAttempts(userEmail: string, courseUrl?: string, select?: Array<keyof IAttemptsRec>): Promise<Array<IAttemptsRec>>;
    getShortResults(userEmail: string, attemptId: string): Promise<Array<string>>;
    getLongResult(userEmail: string, attemptId: string, pageUrl: string): Promise<string>;
    save(data: Array<TResultsRec>): Promise<never>;
    delete(userEmail: string, attemptId: string, pages: Array<string>): Promise<never>; //http://stackoverflow.com/questions/16170915/best-practice-in-deleting-azure-table-entities-in-foreach-loop
  }


  //***** generic 
  //partitionKey or rowKey
  interface ITyped { 
    type: string; //key type, alow recognize data type in one table
  }
  //table record
  interface IId<T, P extends ITyped, R extends ITyped> {
    table: T; //table id
    partitionKey: P; //partition key
    rowKey: R; //row key
  }

  //course table ID
  type TCourseTable = 'course';

  //partitionKey via user email
  interface IUserPartition extends ITyped {
    type: 'user';
    userEmail: string;
  }

  //******************* COURSE ATTEMPTS EVIDIENCE
  //row key for single course attempt
  interface IAttemptsRow extends ITyped {
    type: 'attempts';
    courseUrl: string;
    attemptId: number;
  }
  //course attempt record
  interface IAttemptsRec extends IId<TCourseTable, IUserPartition, IAttemptsRow> {
  }

  //******************* COURSE RESULTS
  //row key for course page result
  interface IResultsRow extends ITyped {
    type: 'results';
    attemptId: number; //course attempt id
    pageUrl: string; //course page id
  }
  //course page result and other course records
  interface IResultsRec<TShort extends DCourse.IFlagResult, TLong> extends IId<TCourseTable, IUserPartition, IResultsRow>{
    short: TShort;
    long?: TLong; //some records does not contains long data
  }
  type TResultsRec = IResultsRec<DCourse.IFlagResult,any>;

  //Result Records
  interface IPageResultsRec extends IResultsRec<DCourse.IPageResultShort, DCourse.IPageResult> { }

  interface INeverRec<TShort extends DCourse.IFlagResult> extends IResultsRec<TShort, never> { }
}