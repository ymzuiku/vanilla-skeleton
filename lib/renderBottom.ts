import { IOptions } from './interface';
import { IStyle, setStyle } from './setStyle';

export const renderBottom = (options: IOptions) => {
  if (!options.bottomBar) {
    return null;
  }
  const { safeBottom, count = 3, style = {}, itemStyle } = options.bottomBar;
  const bottom = document.createElement('section');

  if (safeBottom === 'auto') {
    bottom.setAttribute('class', 'skeleton-safe-bottom');
  }

  setStyle({
    minHeight: '54px',
    background: '#fff',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed',
    bottom: '0px', 
    left: '0px',
    width: '100%',
    borderTop: '1px solid #e8e8e8',
    paddingTop:'6px',
    paddingBottom: safeBottom && safeBottom !== 'auto' ? safeBottom : undefined,
    ...style,
  })(bottom);

  for (let i = 0; i < count; i++) {
    const item = document.createElement('div');
    setStyle({
      width: '36px',
      height: '36px',
      display: 'flex',
      justifyContent: 'center',
      background: '#e9e9e9',
      borderRadius: '50px',
      alignItems: 'center',
      ...itemStyle,
    })(item);
    bottom.appendChild(item);
  }

  return bottom;
};
