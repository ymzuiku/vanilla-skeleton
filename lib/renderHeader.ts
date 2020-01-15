import { IOptions } from './interface';
import { setStyle } from './setStyle';

const backSvg = (color: any, size = 1) => `
<?xml version="1.0" standalone="no"?><svg t="1577104161089" class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="4478" width="${100 *
  size}%" height="${100 *
  size}%"><defs><style type="text/css"></style></defs><path d="M519.581 0.771l-511.821 511.744 512.162 510.715 69.656-69.756-442.225-441.474 442.225-441.98z" p-id="4479" fill="${color}"></path></svg>
`;

export const renderHeader = (options: IOptions) => {
  if (!options.header) {
    return null;
  }
  const {
    title = '',
    titleStyle,
    backStyle,
    rightStyle,
    onBack,
    isShowBackButton = true,
    safeTop,
    style = {},
  } = options.header;
  const header = document.createElement('section');

  if (safeTop === 'auto') {
    header.setAttribute('class', 'skeleton-safe-top');
  }

  setStyle({
    height: '54px',
    width: '100%',
    background: '#88f',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 8px',
    alignItems: 'center',
    paddingTop: safeTop && safeTop !== 'auto' ? safeTop : undefined,
    ...style,
  })(header);

  const backButton = document.createElement('div');

  setStyle({
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...backStyle,
  })(backButton);

  if (isShowBackButton) {
    backButton.innerHTML = backSvg(style.color || '#fff', 0.37);
  }

  if (onBack) {
    backButton.onclick = onBack;
  } else {
    backButton.onclick = () => {
      window.history.back();
      setTimeout(() => {
        (window as any).vSkeleton.close();
      });
    };
  }

  header.append(backButton);

  const titleEle = document.createElement('div');
  titleEle.textContent = title;
  setStyle({ fontWeight: 'normal', fontSize: '17px', ...titleStyle })(titleEle);
  header.append(titleEle);

  const rightIcon = document.createElement('div');
  setStyle({
    width: backStyle ? backStyle.width : '50px',
    height: backStyle ? backStyle.height : '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...rightStyle,
  })(rightIcon);

  header.append(rightIcon);

  return header;
};
