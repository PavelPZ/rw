import * as React from 'react';

export interface IImgData {
  id: string;
  url: string;
  width: number;
  height: number;
  type: string;
  origPath: string;
}


//http://stackoverflow.com/questions/19508468/how-to-duplicate-img-tag-with-src-that-should-not-be-cached-without-an-http-requ
//http://jsfiddle.net/Jan_Miksovsky/yy7Zs/
//https://developer.mozilla.org/en-US/docs/Web/API/Body/blob
//http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
//https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications#Example_Using_object_URLs_to_display_images
export interface IImgProps extends React.HTMLProps<{}> {
  imgData: IImgData;
}

export const Img: React.StatelessComponent<IImgProps> = props => {
  const { imgData, ...other } = props;
  other.width = other.width ? other.width : imgData.width + 'px';
  other.height = other.height ? other.height : imgData.height + 'px';
  other.src = imgData.url;
  return <img {...other} />;
};