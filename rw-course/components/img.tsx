import React from 'react';

import { registerTag } from '../compiler';
//import * as DCourse from '../dom';

//http://stackoverflow.com/questions/19508468/how-to-duplicate-img-tag-with-src-that-should-not-be-cached-without-an-http-requ
//http://jsfiddle.net/Jan_Miksovsky/yy7Zs/
//https://developer.mozilla.org/en-US/docs/Web/API/Body/blob
//http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
//https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications#Example_Using_object_URLs_to_display_images

export const Img: React.StatelessComponent<DCourse.IImgProps> = props => {
  const { imgData, ...other } = props;
  if (isMap(imgData)) {
    other.src = imgData.map.img.url;
    const sect = imgData.map.segments[imgData.id];
    other.width = other.width ? other.width : sect.width + 'px';
    other.height = other.height ? other.height : sect.height + 'px';

  } else {
    other.width = other.width ? other.width : imgData.width + 'px';
    other.height = other.height ? other.height : imgData.height + 'px';
    other.src = imgData.url;
  }
  return <img {...other} />;
};
registerTag('Img', Img);

function isMap(imgData: DCourse.IImgData | DCourse.IImgSection): imgData is DCourse.IImgSection { return !!(imgData as DCourse.IImgSection).map; }